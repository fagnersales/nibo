# Collector

### Extendable by:

* [MessageCollector](messagecollector.md)
* [TextInputCollector](textinputcollector.md)

This class is abstract, so it is not possible to create an instance of it.

## Constructor

| Parameter | Type                                            |
| --------- | ----------------------------------------------- |
| data      | [CollectorProps](../typedefs/collectorprops.md) |

## Methods

### .setTarget([target](https://discord.js.org/#/docs/discord.js/main/class/User))

Sets a new target to this collector to run with.

| Parameter | Type                                                             | Description                                     |
| --------- | ---------------------------------------------------------------- | ----------------------------------------------- |
| target    | [User](https://discord.js.org/#/docs/discord.js/main/class/User) | The new user to be targetted for this collector |

Returns: [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

### .setLocation([location](https://discord.js.org/#/docs/discord.js/main/typedef/GuildTextBasedChannel))

Sets a new location to this collector to run with.

| Parameter | Type                                                                                                 | Description                                 |
| --------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| location  | [GuildTextBasedChannel](https://discord.js.org/#/docs/discord.js/main/typedef/GuildTextBasedChannel) | The new location to this collector run with |

Returns: [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

### .stop() `<abstract>`

Stops the collector.

Returns: [void](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/undefined)

### .run()

Runs the collector.

Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Promise)<[unknown](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type)>
