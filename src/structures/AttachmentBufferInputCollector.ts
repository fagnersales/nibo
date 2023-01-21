import axios from 'axios'
import { Message } from 'discord.js'
import { Collector } from './Collector'
import { MessageCollector } from './MessageCollector'

const AttachmentBufferInputCollectorOnFailedReasons = {
  NoAttachment: 'NoAttachment',
  InvalidType: 'InvalidType',
  SizeIsGreatherThanMaximum: 'SizeIsGreatherThanMaximum',
  Unknown: 'Unknown'
} as const

export type AttachmentBufferInputTypes = 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/gif' | 'image/webp'

export interface AttachmentBufferInputCollectorProps {
  maxSize?: number
  availableTypes?: AttachmentBufferInputTypes[]
  onFailedFilter?: (collector: MessageCollector, message: Message, reason: keyof typeof AttachmentBufferInputCollectorOnFailedReasons) => void
}

export class AttachmentBufferInputCollector extends Collector<AttachmentBufferInputCollectorProps> {
  private collector!: MessageCollector

  public stop(): void {
    this.collector.stop()
  }

  public async run(): Promise<{ mime: string, extension: string, buffer: Buffer } | null> {
    this.collector = new MessageCollector(this)

    const hasAttachment = (message: Message): boolean =>
      message.attachments.size > 0

    const isValidType = (message: Message): boolean =>
      this.props.availableTypes ? this.props.availableTypes.some(availableType => availableType === message.attachments.first()?.contentType) : true

    const attachmentSizeIsLessThanMax = (message: Message): boolean =>
      this.props.maxSize ? (message.attachments.first()?.size || 0) <= this.props.maxSize : true

    async function filter(message: Message): Promise<boolean> {
      return (hasAttachment(message) && isValidType(message) && attachmentSizeIsLessThanMax(message))
    }

    const defaultOnFailedFilter = async (collector: MessageCollector, message: Message): Promise<void> => {
      const replyAndPushToMessageStack = async (content: string): Promise<void> =>
        collector.pushMessageToMessageStack(await message.reply(content))

      if (!hasAttachment(message)) {
        replyAndPushToMessageStack('Nenhum arquivo foi encontrado na mensagem, lembre-se de enviar um, ao invés de utilizar link.')
      }

      else if (!isValidType(message)) {
        if (this.props.availableTypes) {
          replyAndPushToMessageStack(`O tipo de arquivo é inválido, é necessário ser um dos seguintes tipos: ${this.props.availableTypes.join(', ')}`)
        } else {
          replyAndPushToMessageStack('O tipo de arquivo é inválido.')
        }
      }

      else if (!attachmentSizeIsLessThanMax(message)) {
        if (this.props.maxSize) {
          replyAndPushToMessageStack(`O tamanho do arquivo é muito grande, é necessário ser menor do que \`${this.props.maxSize}\``)
        } else {
          replyAndPushToMessageStack('O tamanho do arquivo é muito grande.')
        }
      }

      else {
        replyAndPushToMessageStack(`A resposta inserida é inválida!`)
      }
    }

    const collectedMessage = await this.collector
      .setProps({
        ...this.props,
        filter,
        onFailedFilter: (collector, message) => {
          if (!this.props?.onFailedFilter) defaultOnFailedFilter(collector, message)
          else if (!hasAttachment(message)) this.props.onFailedFilter(collector, message, AttachmentBufferInputCollectorOnFailedReasons.NoAttachment)
          else if (!isValidType(message)) this.props.onFailedFilter(collector, message, AttachmentBufferInputCollectorOnFailedReasons.InvalidType)
          else if (!attachmentSizeIsLessThanMax(message)) this.props.onFailedFilter(collector, message, AttachmentBufferInputCollectorOnFailedReasons.SizeIsGreatherThanMaximum)
          else this.props.onFailedFilter(collector, message, AttachmentBufferInputCollectorOnFailedReasons.Unknown)
        }
      })
      .run()

    const attachment = collectedMessage?.attachments.first()

    if (!attachment) return null

    const attachmentFileData = {
      mime: attachment.contentType || 'image/jpeg',
      extension: attachment.url.split('.').reverse()[0],
      buffer: (await axios.get(attachment.url, { responseType: 'arraybuffer' })).data
    }

    return attachmentFileData
  }

}