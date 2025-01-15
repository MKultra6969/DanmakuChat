// cfg of animations&fonts
const config = {
    fonts: {
      username: 'Roboto, sans-serif',
      messageText: 'Hachi Maru Pop, cursive',
    },
    animations: {
      1: 'slide-left 15s linear forwards',
      2: 'slide-left 15s linear forwards, fade-out 15s linear forwards',
      3: 'slide-left-bounce 15s linear forwards',
      4: 'slide-left-liquid 15s linear forwards',
    },
    selectedAnimation: 1, // 1-4 only, correctly works only 1=) idk why, fix it later
  };
  
  window.config = config;