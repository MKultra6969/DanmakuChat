document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('chat-container');

  // Подключаемся к чату Twitch
  const client = new tmi.Client({
    connection: { reconnect: true },
    channels: ['ffl0wer']
  });

  client.connect().catch(console.error);

  // Список рандомных цветов для текста
  const textColors = ['#ff4c4c', '#4cff4c', '#4c4cff', '#ffc04c', '#ff4cff'];

  // Функция для обработки смайликов
  function parseEmotes(message, emotes) {
    if (!emotes) return message; // Если смайликов нет, возвращаем исходное сообщение

    const emoteKeys = Object.keys(emotes); // Все смайлики
    const splitText = message.split(''); // Разбиваем сообщение на массив символов

    emoteKeys.forEach((id) => {
      const positions = emotes[id]; // Позиции каждого смайлика
      positions.forEach((pos) => {
        const [start, end] = pos.split('-').map(Number);
        const emoteURL = `https://static-cdn.jtvnw.net/emoticons/v2/${id}/default/dark/1.0`;

        // Заменяем символы смайлика на HTML <img>
        splitText[start] = `<img src="${emoteURL}" alt="emote" class="emote">`;
        for (let i = start + 1; i <= end; i++) {
          splitText[i] = ''; // Очищаем символы, которые заменили
        }
      });
    });

    return splitText.join(''); // Собираем сообщение обратно
  }

  // Функция для получения URL бейджа
  function getBadgeURL(badgeName) {
    const badgeURLs = {
      'watching-without-audio': 'https://static-cdn.jtvnw.net/badges/v1/aef2cd08-f29b-45a1-8c12-d44d7fd5e6f0/1',
      'listening-only': 'https://static-cdn.jtvnw.net/badges/v1/199a0dba-58f3-494e-a7fc-1fa0a1001fb8/1',
      'verified': 'https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/1',
      'staff': 'https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/1',
      'broadcaster': 'https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1',
      'power-clipper': 'https://static-cdn.jtvnw.net/badges/v1/f38976e0-ffc9-11e7-86d6-7f98b26a9d79/1',
    };

    return badgeURLs[badgeName] || null;
  }

  // Функция добавления сообщения
  function addMessage(username, text, usernameColor, badges) {
    const message = document.createElement('div');
    message.className = 'chat-message';
  
    // Рандомная высота через CSS-переменную
    message.style.setProperty('--rand', Math.random());
  
    // Рандомный размер шрифта
    const randomFontSize = Math.floor(Math.random() * 16) + 20; // Размер от 20px до 36px
    message.style.fontSize = `${randomFontSize}px`;
  
    // Применяем выбранную анимацию через CSS-переменную
    const selectedAnimation = config.animations[config.selectedAnimation];
    message.style.setProperty('--animation', selectedAnimation);
  
    // Генерируем HTML с бейджами, цветным ником и текстом
    const randomTextColor = textColors[Math.floor(Math.random() * textColors.length)];
    let badgesHTML = '';
  
    if (badges) {
      Object.keys(badges).forEach((badgeName) => {
        const badgeURL = getBadgeURL(badgeName);
        if (badgeURL) {
          badgesHTML += `<img src="${badgeURL}" alt="${badgeName}" class="badge" style="height: ${randomFontSize}px;"> `;
        }
      });
    }
  
    message.innerHTML = `
      ${badgesHTML}
      <span class="username" style="color: ${usernameColor}; font-family: ${config.fonts.username};">${username}:</span>
      <span class="message-text" style="font-family: ${config.fonts.messageText};">${text}</span>
    `;
  
    container.appendChild(message);
  
    // Удаляем сообщение после завершения анимации
    message.addEventListener('animationend', () => {
      message.remove();
    });
  }

  // Обработка входящих сообщений
  client.on('message', (channel, tags, message, self) => {
    if (self) return;

    // Парсим смайлики
    const parsedMessage = parseEmotes(message, tags.emotes);

    // Добавляем сообщение с бейджами, цветным ником и рандомным текстом
    addMessage(tags['display-name'], parsedMessage, tags.color || '#ffffff', tags.badges);
  });
});