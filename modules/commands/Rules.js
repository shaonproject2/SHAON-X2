module.exports.config = {
    name: "rules",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Shaon Ahmed ",
    description: "important notes",
    commandCategory: "random-img",
    usages: "send message",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var ZiaRein3 = (`❐-আসসালামু আলাইকুম,🖤🌺

❐- 𝙶𝚁𝙾𝚄𝙿 এর কিছু 𝚁𝚄𝙻𝙴𝚂 আছে, এগুলো হয়তো অনেকেই জানেন না যারা জানেন না   তারা জেনে রাখেন⬅️
<-------------------------------------------------------------------------->

১) 𝙰𝙳𝙼𝙸𝙽 𝙰𝙿𝙿𝚁𝙾𝚅𝙰𝙻 𝙶𝚁𝙾𝚄𝙿 !⚠️

২) 𝙶𝚛𝚘𝚞𝚙 𝚊 কোনো প্রকার বাজে কথা বলা যাবে না ! ⚠️

৩)𝙰𝙳𝙳𝙸𝙽𝙶 এর সন্ধান না পাওয়া পর্যন্ত 𝙰𝙳𝙼𝙸𝙽 𝙶𝚁𝙾𝚄𝙿 থেকে কোন 𝙼𝙴𝙼𝙱𝙴𝚁 এড দেওয়া যাবে না !⚠️

৪) 𝙶𝚁𝙾𝚄𝙿 𝙰 কাউকে অপমানিত করে গালি দেওয়া যাবে না !⚠️

৫) কোনো বাজে ভাষা ওলা 𝙲𝙴𝙿𝚃𝙸𝙾𝙽 𝙶𝚁𝙾𝚄𝙿 𝙰 পোস্ট করা যাবে না !⚠️

৬) 𝙶𝚁𝙾𝚄𝙿 কলে কাউকে বাজে ভাবে অপমান বা গালি দেওয়া যাবে না ⚠️

৭) 𝙶𝚁𝙾𝚄𝙿 কাউকে এড করলে তার সম্পর্কে আগে জেনে নিতে হবে !⚠️

৮)পিক নাম প্রোফাইল দেখে 𝙶𝚁𝙾𝚄𝙿 𝙰 এড করা যাবে না ! ⚠️

৯)𝙶𝚁𝙾𝚄𝙿 𝙰 নিজের বা 𝙵𝙾𝚁𝚆𝙾𝚁𝙳 করা 𝚅𝙾𝙸𝙲𝙴 দেওয়া যাবে না 🙂!

১০)𝙶𝚁𝙾𝚄𝙿 𝙰 নিজের ব্যক্তিগত বা অন্য কারো পিক দেওয়া যাবে না 🙃!⚠️

১১) 𝙶𝚁𝙾𝚄𝙿 𝙰 𝚃𝙸𝙺𝚃𝙾𝙺 এর ভালো 𝚂𝙴𝙳 𝙵𝚄𝙽𝙽𝚈 এর 𝙻𝙸𝙽𝙺 ছাড়া অন্য কোন 𝙻𝙸𝙽𝙺 দেওয়া যাবে না! ⚠️

১২) 𝙶𝚁𝙾𝚄𝙿 𝙰 আমরা সবাই ভাই বোন ইত্যাদি নো প্রেম নো ছ্যাকা 𝙶𝚁𝙾𝚄𝙿 𝙰 সবাই মিলে থাকবো ঝাকা নাকা 👈

১৩)𝙶𝚁𝙾𝚄𝙿 𝚁𝚄𝙻𝙴𝚂 কারো পছন্দ না হলে সে 𝙶𝚁𝙾𝚄𝙿 𝙾𝚆𝙽𝙴𝚁 এর সাথে যোগাযোগ করতে পারেন ⚠️
<-------------------------------------------------------------------------->
১৪)𝙶𝚁𝙾𝚄𝙿 𝚁𝚄𝙻𝙴𝚂 মেনে আমাদের সাথেই থাকুন 𝙾𝚆𝙽𝙴𝚁_𝙲.𝙴.𝙾 𝙰𝙳𝙼𝙸𝙽 না থাকলে কেউ বাজে কথা বললে এর জন্য সরি
                                             <-------------------------------------------------------------------------->

১৫)𝙶𝚁𝙾𝚄𝙿 𝙰 𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁 যারা 𝙱𝙾𝚃 সম্পর্কে বুঝেন না, তারা 𝙰𝙳𝙼𝙸𝙽 কে মেনশন দিয়ে বলেন আশা করি 𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽 আপনাকে বুঝিয়ে বলবে
<-------------------------------------------------------------------------->                                 𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽: 𝚂𝙷𝙰𝙾𝙽 𝙰𝙷𝙼𝙴𝙳
𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 𝙵𝙱 𝙻𝙸𝙽𝙺: https://www.facebook.com/Hey.Its.Me.Shaon.Ahmed
              ‌
___সাথেই থাকুন 🌺SHAON [ / ] ROBOT🌼BOX🌸___

　　　　　💖...........ধন্যবাদ সবাইকে...........💖`);
   var ZiaRein = [
"https://i.postimg.cc/GtXBfDsd/20230923-082425.jpg",
"https://i.postimg.cc/5NtQCsZ0/20230923-082409.jpg",
"https://i.postimg.cc/QtkKpw8B/20230923-082348.jpg",
"https://i.postimg.cc/L4DZ5cQw/20230923-082259.jpg",
"https://i.postimg.cc/qMvQSjyV/20230923-082329.jpg",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
