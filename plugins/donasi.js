let handler = async m => m.reply(`
╭─〘 n 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 [paypal.me/michae165]

╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
