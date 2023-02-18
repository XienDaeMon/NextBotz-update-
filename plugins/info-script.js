let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `Sc Nya Gw Private Karna Gw Recode Sendiri Kalo Mau \nSc ORI Cari Sendiri`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'ESCE', url: 'https://wa.me/6281269734000'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler
