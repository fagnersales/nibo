import { ButtonSelectCollector } from './ButtonSelectCollector'
import { RoleSelectCollector } from './RoleSelectCollector'
import { TextInputCollector } from './TextInputCollector'

import { AttachmentBufferInput, ButtonSelectInteraction, RoleInput, RoleSelectInteraction, TextInput } from '../customValues'
import { RoleInputCollector } from './RoleInputCollector'
import { AttachmentBufferInputCollector } from './AttachmentBufferInputCollector'

type CombinableCollectors = TextInputCollector | RoleSelectCollector | ButtonSelectCollector | RoleInputCollector | AttachmentBufferInputCollector

type CombineCollectorsReturnType = TextInput | RoleInput | RoleSelectInteraction | ButtonSelectInteraction | AttachmentBufferInput

export class CombineCollectors {
  public constructor(public readonly collectors: CombinableCollectors[]) { }

  public add(collector: CombinableCollectors): this {
    this.collectors.push(collector)
    return this
  }

  public merge(combined: CombineCollectors): this {
    this.collectors.push(...combined.collectors)
    return this
  }

  async run(): Promise<CombineCollectorsReturnType> {
    const promisedCollectors = this.collectors.map(async collector => {
      if (collector instanceof RoleSelectCollector) return new RoleSelectInteraction(await collector.run())
      if (collector instanceof ButtonSelectCollector) return new ButtonSelectInteraction(await collector.run())
      if (collector instanceof TextInputCollector) return new TextInput(await collector.run())
      if (collector instanceof RoleInputCollector) return new RoleInput(await collector.run())
      if (collector instanceof AttachmentBufferInputCollector) return new AttachmentBufferInput(await collector.run())

      throw new Error('Unknown Collector instance')
    })

    const result = await Promise.race(promisedCollectors)

    this.collectors.forEach(collector => collector.stop())

    return result as CombineCollectorsReturnType
  }
}
