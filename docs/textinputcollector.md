---
description: Collects text input from a specific user
---

# TextInputCollector

extends [Collector](collector.md)<[TextInputCollectorProps](../typedefs/textinputcollectorprops.md)>

## Example

```typescript
import { TextInputCollector } from 'niboh'
 
const textInputCollector = new TextInputCollector({
 location,
 target
})

const collectedText = await textInputCollector.run()

if (collectedText) {
  console.log(`Collected: ${collectedText}`)
}
```

## Constructor

Creates an instance of [TextInputCollector](textinputcollector.md)

| Parameter | Type                                            |
| --------- | ----------------------------------------------- |
| data      | [CollectorProps](../typedefs/collectorprops.md) |

## Methods

### .run()

Runs the collector.

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Promise)<[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/String) | [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)>

### .stop()

Stops the collector.

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/undefined)

### **.setProps(**[**options**](../typedefs/textinputcollectorprops.md)**)**

Sets the property for this collector to run with.

| Parameter | Type                                                              | Description                                  | Default |
| --------- | ----------------------------------------------------------------- | -------------------------------------------- | ------- |
| options   | [TextInputCollectorProps](../typedefs/textinputcollectorprops.md) | options to pass to the collector to run with | `{}`    |

Returns: [TextInputCollector](textinputcollector.md)

### .setTarget([target](https://discord.js.org/#/docs/discord.js/main/class/User))

Sets a new target to this collector to run with.

| Parameter | Type                                                             | Description                                     |
| --------- | ---------------------------------------------------------------- | ----------------------------------------------- |
| target    | [User](https://discord.js.org/#/docs/discord.js/main/class/User) | The new user to be targetted for this collector |

Returns: [TextInputCollectorProps](../typedefs/textinputcollectorprops.md)

### .setLocation([location](https://discord.js.org/#/docs/discord.js/main/typedef/GuildTextBasedChannel))

Sets a new location to this collector to run with.

| Parameter | Type                                                                                                 | Description                                 |
| --------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| location  | [GuildTextBasedChannel](https://discord.js.org/#/docs/discord.js/main/typedef/GuildTextBasedChannel) | The new location to this collector run with |

Returns: [TextInputCollectorProps](../typedefs/textinputcollectorprops.md)
