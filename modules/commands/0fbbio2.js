module.exports.config = {
  name: "fbbio2",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: "Shaon Ahmed", //don't change the credits please
  description: "Admin and Bot info.",
  commandCategory: "...",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/GtXBfDsd/20230923-082425.jpg",
"https://i.postimg.cc/5NtQCsZ0/20230923-082409.jpg",
"https://i.postimg.cc/QtkKpw8B/20230923-082348.jpg",
"https://i.postimg.cc/L4DZ5cQw/20230923-082259.jpg",
"https://i.postimg.cc/qMvQSjyV/20230923-082329.jpg",
  ];var callback = () => api.sendMessage({body:`🦋🌸 এখানে ফেসবুকের কিছু ভিআইপি Bio দেয়া আছে🦋🌸👇


●⬤🔴⬤●
●⬤🔴⬤●●⬤🔴⬤●
⟣⃟⸻🖤⸻⃟⟢
❚♥️❚
❚🖤❚
❚💜❚
❚💙❚
❚💚❚
❚💛❚
❚🤎❚
❚💟❚
⟣⃟⸻🖤⸻⃟⟢
●⬤🔴⬤●●⬤🔴⬤●
●⬤🔴⬤

✦✗✦❚✦✗✦
❚
✦✗✦❚❚♥️❚❚✦✗✦
❚❚💙❚❚
╔━━❖❖🖤❖❖━━╗
⭕Cute Kamina⭕
╚━━❖❖🖤❖❖━━╝
❚❚💙❚❚
✦✗✦❚❚♥️❚❚✦✗✦
❚
✦✗✦❚✦✗

🟣
●⬤⚫⬤●
●⬤⚫⬤●●⬤⚫⬤●
⟣⃟⸻⭕⸻⃟⟢
╔━━❖❖🖤❖❖━━╗
⭕ Lovely Girl⭕
╚━━❖❖🖤❖❖━━╝
⟣⃟⸻⭕⸻⃟⟢
●⬤⚫⬤●●⬤⚫⬤●
●⬤⚫⬤●

♥️●▬▬๑♥️๑▬▬●♥️
♦️❖♦️
╱◣♦️◢╲
◥▔◣◣◈◢◢▔◤
♦️♦️ ★Bad Girl★♦️♦️
◢▂◥◤◈◥◥▂◣
◢◤♦️◥◣
◥◤
♥️●▬▬๑♥️๑▬▬●♥️

♦️♦️♦️♦️
꧁🌹◆❃◆∆◆❃◆🌹꧂
❣●▬▬๑♥️๑▬▬●❣
╔━━❖❖🖤❖❖━━╗
👑 FB Queen👑
╚━━❖❖🖤❖❖━━╝
❚❣●▬▬๑♥️๑▬▬●❣
꧁🌹◆❃◆∆◆❃◆🌹꧂
♦️♦️♦️♦️

◥◣❀◢◤❖💠❖♥️❖💠❖💠
█
█
♦️❖♦️❖♦️❖♦️❖♦
╔━━❖❖🖤❖❖━━╗
⭕Love U⭕
╚━━❖❖🖤❖❖━━╝
♦️❖♦️❖♦️❖♦️❖♦
█
█
💠❖💠❖♥️❖💠❖💠

╔╬═─╰╭❆☬❆╮╯─═╬╗
╔━━❖❖❁❖❖━━╗
╠━✫✫━❥SAB 13￭━✫✫━╣
╚━━❖❖❖❖━━╝
╚╬═─╭╰❆☬❆╯╮─═╬╝

꧁❤꧂꧁❤꧂
💙
◥♦◤
◥♦◤
꧁♦💠🔷💠♦꧂
꧁♦⚀🔷⚀♦꧂
☛♦Boys Crush♦☚
꧁♦⚀🔷⚀♦꧂
꧁♦💠🔷💠♦꧂
◥♦◤
◥♦◤
💙
꧁❤꧂꧁❤꧂

◥⚚◤
◥⚚◤
◥⚚◤
◥⚚◤
╱◣◥◤◢╲
◥✺◣◢✺◣♛◢✺◣◢✺◤
😁Crush Queen😎
◢✺◤◥✺◤♛◥✺◤◥✺◣
╲◣◥◤◢╱
◥⚚◤
◥⚚◤
◥⚚◤
◥⚚◤
◥⚚

☘️𝐒𝐇𝐀𝐎𝐍 𝐏𝐑𝐎𝐉𝐄𝐂𝐓🌸`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };