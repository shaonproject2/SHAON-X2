module.exports.config = {
  name: 'autosend1',
  version: '10.02',
  hasPermssion: 2,
  credits: 'Shaon Ahmed', 
  description: 'auto mgs send ',
  commandCategory: 'system',
  usages: '[]',
  cooldowns: 3
};
const r = a => a[Math.floor(Math.random()*a.length)],
{
  get
} = require('axios'),
config = [{
      timer: '12:00:00 AM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '1:00:00 AM',
  message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '2:00:00 AM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '3:00:00 AM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '4:00:00 AM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '5:00:00 AM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '6:00:00 AM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '7:00:00 AM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
  timer: '8:00:00 AM',
  message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '9:00:00 AM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{ 
      timer: '10:00:00 AM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{ 
      timer: '11:00:00 AM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '12:00:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '1:00:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '2:00:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '3:00:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '4:00:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '5:00:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '6:00:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '7:00:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '8:00:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '9:00:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '10:00:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
},
{
      timer: '11:00:00 PM',
      message: ['🔔 ===『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡𝗗 』=== 🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗔𝗨𝗧𝗢𝗠𝗔𝗧𝗜𝗖 𝗦𝗘𝗡𝗗 𝗠𝗘𝗦𝗦𝗔𝗚𝗘']
}];
module.exports.onLoad = o => {
  if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
  global.autosendmessage_setinterval = setInterval(async function() {
      if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
          var msg = r(á.message);
          msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Dhaka").format("❰hh:mm:ss A❱ ⟬D/MM/YYYY⟭ (dddd)")).replace(/{thinh}/g, (await get(`https://video-api-5i3d.onrender.com/video/status3`)).data.url.title)
          msg = {
              body: msg, attachment: (await get((await get(`https://video-api-5i3d.onrender.com/video/status3`)).data.url.url, {
                  responseType: 'stream'
              })).data
          };
          global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
      };
  }, 1000);
};
module.exports.run = () => {};