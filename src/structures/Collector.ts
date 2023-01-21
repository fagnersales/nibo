import { TextBasedChannel, User } from 'discord.js'

export interface CollectorProps {
  target: User
  location: TextBasedChannel
}

export abstract class Collector<TProps> {
  public target!: CollectorProps['target']
  public location!: CollectorProps['location']

  public props!: TProps

  public constructor(props: CollectorProps) {
    Object.assign(this, props)
  }

  public setProps(data: TProps): this {
    this.props = data
    return this
  }

  public setTarget(target: CollectorProps['target']): this {
    this.target = target
    return this
  }

  public setLocation(location: CollectorProps['location']): this {
    this.location = location
    return this
  }

  public abstract stop(): void

  public abstract run(): Promise<unknown>
}