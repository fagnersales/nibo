# MessageCollector

extends [Collector](collector.md)<[MessageCollectorRunOptions](../typedefs/messagecollectorrunoptions.md)>

## Example

```typescript
import { MessageCollector } from 'niboh'
 
const messageCollector = new MessageCollector({
 location,
 target
})

const collectedMessage = await messageCollector.run()

if (collectedMessage) {
 console.log(`Collected a message: ${collectedMessage.id} from ${collectedMessage.user.tag}`)
}
```

## Constructor

Creates an instance of [MessageCollector](messagecollector.md)

| Parameter | Type                                            |
| --------- | ----------------------------------------------- |
| data      | [CollectorProps](../typedefs/collectorprops.md) |

## Properties

### .collecting

Whether or not this collector is running

Returns: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Boolean)

### .collector

The Discord's [MessageCollector](https://discord.js.org/#/docs/discord.js/main/class/MessageCollector) object

Returns: [MessageCollector](https://discord.js.org/#/docs/discord.js/main/class/MessageCollector) (this is the instance created by Discord.JS!)

### .messageStack

A collection of [Messages](https://discord.js.org/#/docs/discord.js/main/class/Message)' object to be bulk deleted after the collector finishes

Returns: [Collection](https://discord.js.org/#/docs/collection/main/class/Collection)<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String), [Message](https://discord.js.org/#/docs/discord.js/main/class/Message)>

## Methods

### .run()

Runs the collector.

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Promise)<[Message](https://discord.js.org/#/docs/discord.js/main/class/Message) | [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)>

### .stop()

Stops the collector.

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/undefined)

### **.setProps(**[**options**](../typedefs/textinputcollectorprops.md)**)**

Sets the property for this collector to run with.

| Parameter | Type                                                                    | Description                                  | Default |
| --------- | ----------------------------------------------------------------------- | -------------------------------------------- | ------- |
| options   | [MessageCollectorRunOptions](../typedefs/messagecollectorrunoptions.md) | options to pass to the collector to run with | `{}`    |

Returns: [MessageCollector](messagecollector.md)

### .setTarget([target](https://discord.js.org/#/docs/discord.js/main/class/User))

Sets a new target to this collector to run with.

| Parameter | Type                                                             | Description                                     |
| --------- | ---------------------------------------------------------------- | ----------------------------------------------- |
| target    | [User](https://discord.js.org/#/docs/discord.js/main/class/User) | The new user to be targetted for this collector |

Returns: [MessageCollector](messagecollector.md)

### .setLocation([location](https://discord.js.org/#/docs/discord.js/main/typedef/GuildTextBasedChannel))

Sets a new location to this collector to run with.

| Parameter | Type                                                                                                 | Description                                 |
| --------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| location  | [GuildTextBasedChannel](https://discord.js.org/#/docs/discord.js/main/typedef/GuildTextBasedChannel) | The new location to this collector run with |

Returns: [MessageCollector](messagecollector.md)

### .swapCollecting()

Swaps/Toggles the collection state.

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/undefined)

### .pushMessageToMessageStack(message)

Pushes a message to the message stack.

| Parameter | Type                                                                   | Description              |
| --------- | ---------------------------------------------------------------------- | ------------------------ |
| message   | [Message](https://discord.js.org/#/docs/discord.js/main/class/Message) | The message to be pushed |

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/undefined)

### .bulkDeleteMessageStack()

Deletes all stacked messages. (This method will ignore any given error)

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Promise)<[void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/undefined)>
