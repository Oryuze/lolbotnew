/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	fxc7: 'https://api-xcoders.xyz/api',
	jojo: 'https://docs-jojo.herokuapp.com/api',
	zekais: 'https://api.zekais.com',
	zeks: 'https://api.zeks.me/api',
	waifu: 'https://api.waifu.pics/sfw'
}

// Apikey Website Api
global.APIKeys = {
	'https://api-xcoders.xyz/api': 'hnslrl1882',
	'https://api.zekais.com': 'RIGkeWDJ',
	'https://api.zeks.me/api': 'octavetech'
}

// Other
global.owner = ['6282296959969','6282296959969','6282296959969']
global.premium = ['6282296959969']
global.phone = '6282296959969'
global.owners  = '6282296959969'
global.acara = 'Turu'
global.tanggal = '31,5,2023'
global.botname = 'Ayaka BoT'
global.packname = 'AyakaBoT'
global.author = 'By:Ahmad'
global.sessionName = 'octave'
global.tresshold = '0.65'
global.sourceurl = 'https://github.com/koleksibot'
global.donasiurl = 'https://telegra.ph/file/a158e51fb390b67383776.jpg'
global.prefa = ['-','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '⌛ Wait a minute... ⌛ ',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//load file
global.thumb = fs.readFileSync('./lib/octave.png')
global.wala = fs.readFileSync('aud/wala.m4a')
global.biasa = fs.readFileSync('aud/biasalah.m4a')
global.samasama = fs.readFileSync('aud/sama.m4a')
global.menu = fs.readFileSync('aud/menu.m4a')
global.sound1 = fs.readFileSync('aud/sound1.m4a')
global.sound2 = fs.readFileSync('aud/sound2.m4a')
global.sound3 = fs.readFileSync('aud/sound3.m4a')
global.sound4 = fs.readFileSync('aud/sound4.m4a')
global.sound5 = fs.readFileSync('aud/sound5.m4a')
global.sound6 = fs.readFileSync('aud/sound6.m4a')
global.sound7 = fs.readFileSync('aud/sound7.m4a')
global.sound8 = fs.readFileSync('aud/sound8.m4a')
global.sound9 = fs.readFileSync('aud/sound9.m4a')
global.sound10 = fs.readFileSync('aud/sound10.m4a')
global.sound11 = fs.readFileSync('aud/sound11.m4a')
global.sound12 = fs.readFileSync('aud/sound12.m4a')
global.sound13 = fs.readFileSync('aud/sound13.m4a')
global.sound14 = fs.readFileSync('aud/sound14.m4a')
global.sound15 = fs.readFileSync('aud/sound15.m4a')


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
