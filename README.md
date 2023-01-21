# niboh
 
Niboh is a library that provides powerful collectors for Discord Bots made using Discord.js library.

It allows you to collect almost every type of information, from a ButtonInteraction to a TextInput (message sent in the specified channel)

### How to install
```ts
yarn add niboh
npm install **niboh**
pnpm install niboh
```

### Example

#### Collecting a ButtonInteraction from a message
```ts
import { ButtonSelectCollector } from 'niboh'

const messageComponents = [
  new ActionRowBuilder<ButtonBuilder>().setComponents(
    new ButtonBuilder()
      .setCustomId('cool-id')
      .setLabel('Confirm')
      .setButtonStyle(ButtonStyle.Success)
  )
]

const message = await someCoolInteraction.reply({
  fetchReply: true,
  components: messageComponents
})

const buttonSelectCollector = new ButtonSelectCollector({
  location: message.channel,
  target: someCoolInteraction.user
})

const buttonInteraction = await buttonSelectCollector.setProps({ message }).run()

if (buttonInteraction) {
  buttonInteraction.reply({ content: 'Confirmed!' })
}
```
Make sure to understand that the only part of the library that is actually being used is here
```ts
const buttonSelectCollector = new ButtonSelectCollector({
  location: message.channel,
  target: someCoolInteraction.user
})

const buttonInteraction = await buttonSelectCollector.setProps({ message }).run()

if (buttonInteraction) {
  buttonInteraction.reply({ content: 'Confirmed!' })
}
```
the rest is only a example of message sent with some components to be collected :)