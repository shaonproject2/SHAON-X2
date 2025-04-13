const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: 'imgur1',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'Shaon Ahmed',
  description: 'Convert media from a link (supports jpeg, jpg, png, mp4, gif, wav)',
  commandCategory: 'Media',
  usages: ['/Convert2 [link]'],
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const url = args[0];

  if (!url) {
    return api.sendMessage('Please provide a valid link to convert media from.', event.threadID, event.messageID);
  }

  const validExtensions = ['.jpeg', '.jpg', '.png', '.mp4', '.mp3', '.pdf', '.raw', '.docx', '.txt', '.gif', '.wav'];
  const extension = url.substring(url.lastIndexOf('.'));

  if (!validExtensions.includes(extension.toLowerCase())) {
    return api.sendMessage('Unsupported file format. Supported formats: jpeg, jpg, png, mp4, mp3, pdf, raw, docx, txt, gif, wav.', event.threadID, event.messageID);
  }

  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    if (response.status !== 200) {
      return api.sendMessage('Failed to fetch the media from the provided link.', event.threadID, event.messageID);
    }

    const filename = `converted${extension}`;
    fs.writeFileSync(filename, Buffer.from(response.data, 'binary'));

    api.sendMessage(
      {
        body: `Converted media from the provided link: ${url}`,
        attachment: fs.createReadStream(filename),
      },
      event.threadID,
      () => fs.unlinkSync(filename)
    );
  } catch (error) {
    api.sendMessage('❐ 𝚂𝙷𝙰𝙾𝙽 6𝚇 𝚂𝙴𝚁𝚅𝙴𝚁 𝙱𝚄𝚂𝚈 𝙽𝙾𝚆 💔🥀', event.threadID, event.messageID);
    console.error(error);
  }
};