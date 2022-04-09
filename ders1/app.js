const { Client, Intents } = require("discord.js");// discord.js kütüphanesinin içindeki class ları çağırıyoruz.
const client = new Client({
    intents: [Intents.FLAGS.GUILDS],//Intents belirtiyoruz
});
const config = require("./src/config.json");//kurulum dosyamızı belirtiyoruz

client.once("ready", async () => {// ready eventimiz
    client.user.setPresence({
        activities: [{ name: "selam arkadaşlar ben botum", type: "WATCHING"}], status: "dnd"//presence datasını ayarladığımız kısım
    });
});

client
    .login(config.bot.token)//botu discord Apisine baüladığımız kısım
    .then(() => console.log("hazırım!"))//discord apisine bağlandığında console yazdıracağı yazı
    .catch((err) =>
        console.log(`${err} sebebi yüzünden bota giriş yapılamadı!`)//discord apisine bağlamadığında console yazdıracağı yazı
    );
