import { ButtonSelectInteraction } from './ButtonSelectInteraction'
import { RoleSelectInteraction } from './RoleSelectInteraction'
import { RoleInput } from './RoleInput'
import { TextInput } from './TextInput'
import { AttachmentBufferInput } from './AttachmentBufferInput'

export type CollectorReturnType<T extends { run: (...args: unknown[]) => unknown }> =
  T extends { run: (...args: unknown[]) => Promise<infer R> }
  ? R
  : never

export class CustomValue {
  public isRoleSelectInteraction(): this is RoleSelectInteraction {
    return false
  }

  public isButtonSelectInteraction(): this is ButtonSelectInteraction {
    return false
  }

  public isTextInput(): this is TextInput {
    return false
  }

  public isRoleInput(): this is RoleInput {
    return false
  }

  public isAttachmentBufferInput(): this is AttachmentBufferInput {
    return false
  }
}