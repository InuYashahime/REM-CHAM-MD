import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!global.db.data.chats[m.chat].nsfw) throw `🚫 En El Grupo No Esta Permitido El Contenido +18 \n\nSi Eres Admin Activalo con \n⚙ *${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw m.reply(`✒ Necesitas Tener +18 Para Usar Este Comando`)
m.react(rwait)

let res = await fetch(`https://fantox-apis.vercel.app/${command}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw 'Ocurrio Un Error'
conn.sendFile(m.chat, json.url, 'img.jpg', `✨ Rᴀɴᴅᴏᴍ ${command}`, m, null, rcanal)
m.react(dmoji)
}
handler.help = ['genshin', 'swimsuit', 'schoolswimsuit', 'white', 'barefoot', 'touhou', 'gamecg', 'hololive', 'uncensored', 'sunglasses', 'glasses', 'weapon', 'shirtlift', 'chain', 'fingering', 'flatchest', 'torncloth', 'bondage', 'demon', 'wet', 'pantypull', 'headdress', 'headphone', 'tie', 'anusview', 'shorts','stokings', 'topless', 'beach', 'bunnygirl', 'bunnyear', 'idol', 'vampire', 'gun', 'maid', 'bra', 'nobra', 'bikini', 'whitehair', 'blonde', 'pinkhair', 'bed', 'ponytail', 'nude', 'dress', 'underwear', 'foxgirl', 'uniform', 'skirt', 'sex', 'sex2', 'sex3', 'breast', 'twintail', 'spreadpussy', 'tears', 'seethrough', 'breasthold', 'drunk', 'fateseries', 'spreadlegs', 'openshirt', 'headband', 'food', 'close', 'tree', 'nipples', 'erectnipples', 'horns', 'greenhair', 'wolfgirl', 'catgirl']
handler.tags = ['nsfw'] 
handler.command = ['genshin', 'swimsuit', 'schoolswimsuit', 'white', 'barefoot', 'touhou', 'gamecg', 'hololive', 'uncensored', 'sunglasses', 'glasses', 'weapon', 'shirtlift', 'chain', 'fingering', 'flatchest', 'torncloth', 'bondage', 'demon', 'wet', 'pantypull', 'headdress', 'headphone', 'tie', 'anusview', 'shorts','stokings', 'topless', 'beach', 'bunnygirl', 'bunnyear', 'idol', 'vampire', 'gun', 'maid', 'bra', 'nobra', 'bikini', 'whitehair', 'blonde', 'pinkhair', 'bed', 'ponytail', 'nude', 'dress', 'underwear', 'foxgirl', 'uniform', 'skirt', 'sex', 'sex2', 'sex3', 'breast', 'twintail', 'spreadpussy', 'tears', 'seethrough', 'breasthold', 'drunk', 'fateseries', 'spreadlegs', 'openshirt', 'headband', 'food', 'close', 'tree', 'nipples', 'erectnipples', 'horns', 'greenhair', 'wolfgirl', 'catgirl']
handler.diamond = true
handler.group = true
handler.register = true


export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
