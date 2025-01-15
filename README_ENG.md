[🇷🇺Русский](https://github.com/MKultra6969/DanmakuChat/blob/main/README.md)

# Twitch Danmaku Chat Overlay (DCO)🌟

This project is a beautiful and customizable Twitch chat overlay that can be used during streams. The overlay supports animations, custom fonts, emojis, and badges. 🎉

## Features ✨

- **Message animations**: Support for multiple animations for chat messages.
- **Custom fonts**: Ability to use different fonts for usernames and message text.
- **Emojis**: Automatic replacement of text emojis with images.
- **Badges**: Display of user badges (e.g., moderator, streamer, etc.).
- **Random colors**: Each message has a random text color.

## Installation 🛠️

1. Clone the repository:

   ```bash
   git clone https://github.com/MKultra6969/DanmakuChat
   ```

2. Navigate to the project directory:

   ```bash
   cd DanmakuChat
   ```

3. Open the `index.html` file in a browser or add `index.html` as a source in OBS.

## Configuration ⚙️

### Fonts

You can change the fonts for usernames and message text in the `config.js` file:

```javascript
const config = {
  fonts: {
    username: 'Roboto, sans-serif',
    messageText: 'Hachi Maru Pop, cursive',
  },
  // ...
};
```

### Animations

You can also choose animations for messages in the `config.js` file:

```javascript
const config = {
  animations: {
    1: 'slide-left 15s linear forwards',
    2: 'slide-left 15s linear forwards, fade-out 15s linear forwards',
    3: 'slide-left-bounce 15s linear forwards',
    4: 'slide-left-liquid 15s linear forwards',
  },
  selectedAnimation: 1, // Choose an animation from 1 to 4
  // ...
};
```

### Twitch Channel

Specify the channel you want to connect to in the `script.js` file:

```javascript
const client = new tmi.Client({
  connection: { reconnect: true },
  channels: ['NICKNAME'], // Replace NICKNAME with your Twitch username
});
```

## Usage 🚀

1. Launch the `index.html` file in a browser.
2. Set up OBS or another streaming software to add a browser window with the overlay.
3. Enjoy a beautiful chat on your stream! 🎥

## Animation Examples 🎮

- **slide-left**: The message smoothly moves from left to right.
- **fade-out**: The message gradually disappears.
- **slide-left-bounce**: The message moves with a "bounce" effect.
- **slide-left-liquid**: The message moves with a "wave" effect.

## License 📜

This project is distributed under the WTFPL license. For more details, see the [LICENSE](https://github.com/MKultra6969/DanmakuChat/blob/main/LICENSE.md).

---

Created with HATE FOR PEOPLE by [mkultra69](https://github.com/mkultra69). If you have questions or suggestions, NEVER WRITE THEM BECAUSE I ABSOLUTELY DON'T CARE! 😊

