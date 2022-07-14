//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//description and tag me on githuh repo, 
//thank you
//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6282296959969'] //ur owner number
global.ownername = "AyakaBoT - By Ahmad"
global.ytname = "Unknown" //ur yt chanel name
global.socialm = "@ahmd.syihab21_" //ur github or insta name
global.location = "Indonesia, Sulawesi Selatan, Kab.Bone" //ur location
global.phone = '6282296959969'

//bot bombdy
global.botname = "Ayaka - BoT" //ur bot name
global.websitex = "https//wa.me/6282296959969" //ur website
global.vidmenu = { url: 'https://a.uguu.se/zlzQZvXH.mp4' } //gif and video menu
global.packname = "Ayaka BoT"
global.author = "Ahmad"
global.themeemoji = "🐶"
global.reactmoji = "🗿"
global.ownertag = ['6282296959969'] //ur owner tag
global.ownernummenu = ['6282296959969'] //ur owner number in menu and all
global.watermark = "Ayaka BoT 2022" //ur watermark
global.botscript = "https://github.com/Oryuze"
global.linkz1 = "https://chat.whatsapp.com/"
global.linkz2 = "https://chat.whatsapp.com/"

//Bot theme media
global.thum = fs.readFileSync("./Ahmad/theme/logo.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Ahmad/theme/logo.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Ahmad/theme/logo.jpg") //ur error pic
global.thumb = fs.readFileSync("./Ahmad/theme/logo.jpg") //ur thumb pic

//sewa
global.free = 'https://wa.me/6282296959969?text=Halo+mau+sewabot+dong+yang+Free+2+hari'
global.aa = 'https://wa.me/6282296959969?text=Halo+mau+sewabot+dong+yang+harga+10k'
global.ab = 'https://wa.me/6282296959969?text=Halo+mau+sewabot+dong+yang+harga+20k'
global.ac = 'https://wa.me/6282296959969?text=Halo+mau+sewabot+dong+yang+harga+50k'
global.ad = 'https://wa.me/6282296959969?text=Halo+mau+sewabot+dong+yang+harga+70K'
//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "9b817532fadff8fc7cb86862"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Sukses✓',
    admin: 'Fitur Khusus Admin!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus *Owner bot*',
    group: 'Fitur Khusus Grup!',
    private: 'Fitur Tidak Dapat Di Gunakan di Grup!',
    bot: 'This feature is only for bot',
    wait: 'Proses....',
    linkm: 'Mana Link Nya???',
    error: 'Error!',
    ban: 'Kamu Telah di ban oleh bot, Silahkan Hubungi Owner Untuk Membuka Banned.',
    nsfw: 'Fitur NSFW Tidak aktif, hubungi admin untuk mengaktifkan',
    banChat: 'Bot Telah Di Banned Di Grup Ini, Hubungi Owner Untuk Membuka Banned'
}
global.limitawal = {
    premium: "Infinity",
    free: 100,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': 'fiktod',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
