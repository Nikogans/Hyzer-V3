let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=Dawnfrostkey`
  conn.sendFile(m.chat, res, 'side.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['sideoppai'].map(v => v + ' ')
handler.tags = ['hentai']

handler.command = /^(sideoppai)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

