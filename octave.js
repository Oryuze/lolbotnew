/**
* Create By Dika Ardnt.
* Contact Me on wa.me/6288292024190
* Follow https://github.com/DikaArdnt
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const imgbb = require('imgbb-uploader')
const lirik = require('lyrics-parse')
const similarity = require('similarity')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { linkwa } = require("./lib/linkwa");
const { Gempa, Cuaca } = require("./lib/bmkg");
const { textpro, textpro2, ephoto } = require("./lib/textpro");
const { tiktok } = require("./lib/tiktok");
const { Instagram } = require('./lib/instagram')
const { zippyDownloader, mediafireDownloader } = require('./lib/downloader')
const { mediafireDl } = require ('./lib/mediafire');
const { terjemah } = require ('./lib/translate');
const { download } = require ('./lib/twitter')
const { Tiktok } = require("./lib/tiktod")
const tt = new Tiktok()
const { _tebaktebakan, _susunkata, _asahotak, _kimia, _bendera, _lagukebangsaan, _ibukota, _siapaaku } = require('./lib/game')
const { truth, dare, quotesislami, quoteskehidupan, quotesnasehat, quotesmotivasi } = require('./lib/random')
const { listsurah, codebahasa, rules } = require('./lib/listcode')
// Check Bandwidth
let { sizeFormatter } = require("human-readable");
let formatd = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
async function checkBandwidth() {
var data = require("node-os-utils")
data = await data.netstat.stats()
let ind = 0
let out = 0
for (let i of data) {
ind = ind + i.inputBytes
out = out + i.outputBytes
}
return {
download: formatd(ind),
upload: formatd(out)
}
}
// UCAPAN WAKTU
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }

// TANGGAL
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
const asupan = JSON.parse(fs.readFileSync('./src/asupan.json'));
// Reply
async function reply(teks) {
const relink = ['https://youtu.be','https://chat.whatsapp.com/']
const rurl = relink[Math.floor(Math.random() * relink.length)];
maclient = teks
client.sendMessage(m.chat, {text:maclient, mentions: await client.parseMention(maclient), contextInfo:{externalAdReply:{
title: `${ucapanWaktu} ${pushname}`,
body: "©AyakaBoT",
thumbnail: thum,
mediaType:1,
mediaUrl: rurl,
sourceUrl: rurl
}}}, {quoted:m})
}
//quoted
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: "0@s.whatsapp.net", 
	     remoteJid: "120363040549014341@g.us" 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `AyakaBoT`,
                 "h": `AyakaBoT`,
                 'duration': '99999', 
                 'caption': `test`,
                 'jpegThumbnail': global.thumb
                        }
                       }
	                  }
	                  

//ftick
const dev = {
	key : {
                          participant : "0@s.whatsapp.net",
                          remoteJid: "status@broadcast"
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            itemCoun : 404,
                            surface : 404,
                            message: `©Ayaka-BoT`,
                            orderTitle: 'B',
                            thumbnail: global.thumb, 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }

//tod Link
 const todlink =[
'https://youtu.be/IiYRFELAC0s',
'https://youtu.be/bNoFWGc1iJ0',
'https://youtu.be/DKm8Fg7dAp0',
'https://youtu.be/PagvjtVfsPk',
'https://youtu.be/CQLgEvxPs2w',
'https://youtu.be/MsLnLxxjzPE',
'https://youtu.be/YkDCqgk-QZY',
'https://youtu.be/RGihGa5eAA8',
'https://youtu.be/YkDCqgk-QZY',
'https://youtu.be/KCOdjVN-x64',
'https://youtu.be/6t_fdHhFrTg',
'https://youtu.be/xzu_ODGpCRs',
'https://youtu.be/Rz1diG58Rhs',
'https://youtu.be/umQDV0UHUsQ',
'https://youtu.be/W3m3yKpMTDg',
'https://youtu.be/jRDJv5lfiH0',
'https://youtu.be/FjdUiHW5JpQ',
'https://youtu.be/i3OgJLwB2lc',
'https://youtu.be/r1_EDhYbsHA',
'https://youtu.be/MsLnLxxjzPE',
'https://youtu.be/JWHV8lPTzPs',
'https://youtu.be/EjVcqMknvUU',
'https://youtu.be/2iCEd94TZ4o',
'https://youtu.be/S8F2L3v10mA',
'https://youtu.be/xvRWA9_18So',
'https://youtu.be/sSynIGIVjUs',
'https://youtu.be/E6NQYmO2qbA',
'https://youtu.be/usY2mQGtpyw',
'https://youtu.be/dMPnLAXAOBY',
'https://youtu.be/b0md2fEIFpg',
'https://youtu.be/e08eDavj0oI',
'https://youtu.be/IYo8iXPCmgQ',
'https://youtu.be/iuHy1fHikVo',
'https://youtu.be/TwbhA23jSsw',
]
let tod = todlink[Math.floor(Math.random() * (todlink.length))]

///Button Document
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await client.prepareMessage(m.chat, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// read database
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let susunkata = db.data.game.susunkata = []
let asahotak = db.data.game.asahotak = []
let kimia = db.data.game.kimia = []
let bendera = db.data.game.bendera = []
let lagukebangsaan = db.data.game.lagukebangsaan = []
let ibukota = db.data.game.ibukota = []
let siapaaku = db.data.game.siapaaku = []
let vote = db.data.others.vote = []

function findUrl(message) {
  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return message.match(urlRegex)
}
module.exports = client = async (client, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const ar = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
var buddy = budy.toLowerCase()
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await client.decodeJid(client.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false

const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
// Other Function
banUser = await client.fetchBlocklist()
const isBan = banUser ? banUser.includes(m.sender) : false
const jam = moment.tz('Asia/Jakarta').format('HH');
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6282296959969-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: global.thumb, surface: 200, message: `©AyakaBoT`, orderTitle: 'AyakaBoT', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `©AyakaBoT`,jpegThumbnail: global.thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.from ? { remoteJid: "6282296959969-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${global.owner}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `©AyakaBoT`, 'jpegThumbnail': global.thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6282296959969-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `©AyakaBoT`, 'jpegThumbnail': global.thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.from ? { remoteJid: "6282296959969-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`P`, "h": `Hmm`,'seconds': '359996400', 'caption': `AyakaBoT`, 'jpegThumbnail': global.thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `P`,jpegThumbnail: global.thumb}}}
// Group
const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
          //reply
 
	const reply = (teks) => {
	let thumb = global.thumb
            client.sendMessage(m.chat, { text: teks, contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: tod,
    mediaType: 2,
    thumbnail: thumb
     }}
   })
        }
        const replay = (teks) => {
            client.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`,"body": `Follow me on instagram`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": global.thumb,"sourceUrl": "https://instagram.com/"}}}, { quoted: dev})
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": img, // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
client.relayMessage(jid, order.message, { messageId: order.key.id})
}
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
}

} catch (err) {
console.error(err)
}

// Public & Self
if (!client.public) {
if (!m.key.fromMe) return
}

// Push Message To Console && Auto Read
if (m.message) {
client.sendReadReceipt(m.chat, m.sender, [m.key.id])
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})

// auto set bio
if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await client.setStatus(`${global.botname} | Runtime : ${runtime(process.uptime())}`)
setting.status = new Date() * 1
}
}

// Anti Link
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
let gclink = (`https://chat.whatsapp.com/`+await client.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: client.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, client.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
client.ev.emit('messages.upsert', msg)
}

if (tebaklagu.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = tebaklagu[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete tebaklagu[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\n*Jawaban*: ${jawaban}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete tebaklagu[m.chat.split('@')[0]]
}
}

if (kuismath.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = kuismath[m.chat.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
m.reply(`🎮 Kuis Matematika  🎮\n\n*Jawaban*: ${jawaban} 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.chat.split('@')[0]]
}
}

if (tebakgambar.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = tebakgambar[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete tebakgambar[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\n*Jawaban*: ${jawaban}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete tebakgambar[m.chat.split('@')[0]]
}
}

if (tebakkata.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = tebakkata[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete tebakkata[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\n*Jawaban*: ${jawaban}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete tebakkata[m.chat.split('@')[0]]
}
}

if (susunkata.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = susunkata[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: 'Susun Kata' }, type: 1 }], `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete susunkata[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: 'Susun Kata' }, type: 1 }], `🎮 Susun Kata 🎮\n\n*Jawaban*: ${jawaban}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete susunkata[m.chat.split('@')[0]]
}
}

if (asahotak.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = asahotak[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'asahotak', buttonText: { displayText: 'Asah Otak' }, type: 1 }], `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete asahotak[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'asahotak', buttonText: { displayText: 'Asah Otak' }, type: 1 }], `🎮 Asah Otak 🎮\n\n*Jawaban*: ${jawaban}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete asahotak[m.chat.split('@')[0]]
}
}

if (kimia.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = kimia[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'kimia', buttonText: { displayText: 'Kimia' }, type: 1 }], `🎮 Kimia 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete kimia[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'kimia', buttonText: { displayText: 'Kimia' }, type: 1 }], `🎮 Kimia 🎮\n\n*Jawaban*: ${jawaban}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete kimia[m.chat.split('@')[0]]
}
}

if (bendera.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = bendera[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'tebak bendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete bendera[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'tebak bendera', buttonText: { displayText: 'Tebak Bendera' }, type: 1 }], `🎮 Tebak Bendera 🎮\n\n*Jawaban*: ${jawaban}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete bendera[m.chat.split('@')[0]]
}
}

if (lagukebangsaan.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = lagukebangsaan[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'lagukebangsaan', buttonText: { displayText: 'Lagu Kebangsaan' }, type: 1 }], `🎮 Lagu Kebangsaan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete lagukebangsaan[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'lagukebangsaan', buttonText: { displayText: 'Lagu Kebangsaan' }, type: 1 }], `🎮 Lagu Kebangsaan 🎮\n\n*Jawaban*: ${jawaban}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete lagukebangsaan[m.chat.split('@')[0]]
}
}

if (ibukota.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = ibukota[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'ibukota', buttonText: { displayText: 'Tebak Ibukota' }, type: 1 }], `🎮 Tebak Ibukota 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete ibukota[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'ibukota', buttonText: { displayText: 'Ibu Kota' }, type: 1 }], `🎮 Ibu Kota 🎮\n\n*Jawaban*: ${jawaban}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete ibukota[m.chat.split('@')[0]]
}
}

if (siapaaku.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = siapaaku[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'siapaaku', buttonText: { displayText: 'Siapa Aku' }, type: 1 }], `🎮 Siapa Aku 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete siapaaku[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'siapaaku', buttonText: { displayText: 'Siapa Aku' }, type: 1 }], `🎮 Siapa Aku 🎮\n\n*Jawaban*: ${jawaban}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete siapaaku[m.chat.split('@')[0]]
}
}

if (caklontong.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = caklontong[m.chat.split('@')[0]]
deskripsi = caklontong_desk[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete caklontong[m.chat.split('@')[0]]
delete caklontong_desk[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: 'Cak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\n*Jawaban*: ${jawaban}\n*Deskripsi*: ${deskripsi}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete caklontong[m.chat.split('@')[0]]
delete caklontong_desk[m.chat.split('@')[0]]
}
}

if (tebakkalimat.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = tebakkalimat[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete tebakkalimat[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\n*Jawaban*: ${jawaban}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete tebakkalimat[m.chat.split('@')[0]]
}
}

if (tebaklirik.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = tebaklirik[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete tebaklirik[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\n*Jawaban*: ${jawaban}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete tebaklirik[m.chat.split('@')[0]]
}
}

if (tebaktebakan.hasOwnProperty(m.chat.split('@')[0]) && isCmd) {
kuis = true
let jawaban = tebaktebakan[m.chat.split('@')[0]]
let similar = await similarity(jawaban, budy.toLowerCase())
if ( similar > global.tresshold && similar < 1) {
m.reply('Sedikit lagi..!')
} else if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
delete tebaktebakan[m.chat.split('@')[0]]
} else if (/^((me)?nyerah|pass|surrend?er|off|skip)$/i.test(buddy)) {
 await client.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\n*Jawaban*: ${jawaban}\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
 delete tebaktebakan[m.chat.split('@')[0]]
}
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|pass|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
client.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
client.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) client.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) client.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) client.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
client.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) client.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) client.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
client.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

switch (ar) {
case 'bot': {
m.reply(`Iya bos silahkan ketik ${prefix}menu`);
}
break

case 'cok': {
m.reply('Piye cok?');
}
break

case 'suwun': case 'suwon': {
m.reply('Nggih');
}
break

case 'p': {
if (!m.isGroup) return m.reply(`Hay ${pushname}👋, Selamat datang di Ayaka bot\nKetik *${prefix}menu* untuk melihat semua fitur kami\nketik *${prefix}tutobot untuk melihat cara penggunaan bot kami`);
if (isCreator) return m.reply('Salam yang bener sayang☺️');
m.reply('Salam sing bener cok!1!1');
}
break

case 'thank': case 'thanks': case 'tx': case 'tq': case 'thx': case 'thq': {
m.reply('You are wellcome dear');
}
break

case 'pagi': case 'pagii': case 'morning': case 'enjing': case 'isuk': {
if (jam >= 4 && jam <= 9) {
m.reply(`${ar} juga`);
} else if (jam >= 10 && jam <= 15) {
m.reply(`${ar} apaan, ini mah udah siang`);
} else if (jam >= 16 && jam <= 18) {
m.reply(`${ar} apaan, ini mah udah sore`);
} else {
m.reply(`${ar} apaan, ini mah udah malam`);
};
}
break

case 'siang': case 'siangg': case 'siank': case 'ciank': case 'ciang': case 'awan': {
if (jam >= 4 && jam <= 9) {
m.reply(`${ar} apaan, ini mah masih pagi`);
} else if (jam >= 10 && jam <= 15) {
m.reply(`${ar} juga`);
} else if (jam >= 16 && jam <= 18) {
m.reply(`${ar} apaan, ini mah udah sore`);
} else {
m.reply(`${ar} apaan, ini mah udah malem`);
};
}
break

case 'sore': case 'soree': case 'sonten': {
if (jam >= 4 && jam <= 9) {
m.reply(`${ar} apaan, ini mah masih pagi`);
} else if (jam >= 10 && jam <= 15) {
m.reply(`${ar} apaan, ini mah masih siang`);
} else if (jam >= 16 && jam <= 18) {
m.reply(`${ar} juga`);
} else {
m.reply(`${ar} apaan, ini mah udah malem`);
};
}
break

case 'malem': case 'malam': case 'night': case 'wengi': case 'dalu': {
if (jam >= 4 && jam <= 9) {
m.reply(`${ar} apaan, ini mah masih pagi`);
} else if (jam >= 10 && jam <= 15) {
m.reply(`${ar} apaan, ini mah masih siang`);
} else if (jam >= 16 && jam <= 18) {
m.reply(`${ar} apaan, ini mah masih sore`);
} else {
m.reply(`${ar} juga`);
};
}
break
};

switch(command) {
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
}
break	
case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!\nSilahkan pembuat room untuk mengetik satu angka 1 - 9 untuk memulai permainan.')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]} mengetik satu angka 1 - 9 untuk memulai permainan.

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
client.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await client.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) client.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'sc': {
m.reply(`Script : ${global.sourceurl}\n\n Dont Forget Give Star\n\nDonate : 6282296959969 (DANA, GOPAY)\n\n Dont Forget Donate`)
}
break
case 'chat': {
if (!isCreator) throw mess.owner
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
client.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
client.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
client.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
client.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
client.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
client.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
client.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'family100': {
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await client.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'tebak': {
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.bendera`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.chat.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await client.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' , ptt: true}, { quoted: m })
client.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nKetik *pass* untuk menyerah!`, msg).then(() => {
tebaklagu[m.chat.split('@')[0]] = result.jawaban.toLowerCase()
})
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.chat.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
client.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nKetik *pass* untuk menyerah!`, m).then(() => {
tebakgambar[m.chat.split('@')[0]] = result.jawaban.toLowerCase()
})
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.chat.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
client.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nKetik *pass* untuk menyerah!`, m).then(() => {
tebakkata[m.chat.split('@')[0]] = result.jawaban.toLowerCase()
})
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.chat.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
client.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nKetik *pass* untuk menyerah!`, m).then(() => {
tebakkalimat[m.chat.split('@')[0]] = result.jawaban.toLowerCase()
})
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.chat.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
client.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nKetik *pass* untuk menyerah!`, m).then(() => {
tebaklirik[m.chat.split('@')[0]] = result.jawaban.toLowerCase()
})
} else if (args[0] === 'bendera') {
if (bendera.hasOwnProperty(m.chat.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let res = await _bendera()
client.sendImage(m.chat, res.soal, `*TEBAK BENDERA*\n\nBerikut adalah bendera dari negara?\n*Clue*: ${res.clue}\n\nKetik *pass* untuk menyerah!`, m).then(() => {
bendera[m.chat.split('@')[0]] = res.jawab.toLowerCase()
})
}
}
break
case 'asahotak': {
if (asahotak.hasOwnProperty(m.chat.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let res = await _asahotak()
client.sendText(m.chat, `*ASAH OTAK*\n\n${res.soal}\n*Clue*:${res.clue}\n\nKetik *pass* untuk menyerah!`, m).then(() => {
  asahotak[m.chat.split('@')[0]] = res.jawab.toLowerCase()
})
}
break
case 'susunkata': {
if (susunkata.hasOwnProperty(m.chat.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let res = await _susunkata()
client.sendText(m.chat, `*SUSUN KATA*\n\n${res.huruf}\n*Clue*:${res.tipe}\n\nKetik *pass* untuk menyerah!`, m).then(() => {
  susunkata[m.chat.split('@')[0]] = res.jawaban.toLowerCase()
})
}
break
case 'siapaaku': {
if (siapaaku.hasOwnProperty(m.chat.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let res = await _siapaaku()
client.sendText(m.chat, `*SIAPA AKU*\n\n${res.soal}\n*Clue*:${res.clue}\n\nKetik *pass* untuk menyerah!`, m).then(() => {
  siapaaku[m.chat.split('@')[0]] = res.jawaban.toLowerCase()
})
}
break
case 'lagukebangsaan': {
if (lagukebangsaan.hasOwnProperty(m.chat.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let res = await _lagukebangsaan()
client.sendText(m.chat, `*TEBAK LAGU KEBANGSAAN*\n\nLagu kebangsaan negara ${res.soal} adalah?\n\n*Clue*:${res.clue}\n\nKetik *pass* untuk menyerah!`, m).then(() => {
  lagukebangsaan[m.chat.split('@')[0]] = res.jawab.toLowerCase()
})
}
break
case 'ibukota': {
if (ibukota.hasOwnProperty(m.chat.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let res = await _ibukota()
client.sendText(m.chat, `*ASAH OTAK*\n\nIbukota dari negara ${res.soal} adalah?\n\n*Clue*:${res.clue}\n\nKetik *pass* untuk menyerah!`, m).then(() => {
  ibukota[m.chat.split('@')[0]] = res.jawab.toLowerCase()
})
}
break
case 'kimia': {
if (kimia.hasOwnProperty(m.chat.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let res = await _kimia()
client.sendImage(m.chat, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaF3hgBvnI2n6_y5V72tMORY4dLJTgfvmOw&usqp=CAU', `*KIMIA*\n\n${res.soal} adalah unsur kimia dari?\n*Clue*: ${res.clue}\n\nKetik *pass* untuk menyerah!`, m).then(() => {
kimia[m.chat.split('@')[0]] = res.jawab.toLowerCase()
})
}
break
case 'caklontong': {
if (caklontong.hasOwnProperty(m.chat.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
client.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nKetik *pass* untuk menyerah!`, m).then(() => {
caklontong[m.chat.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.chat.split('@')[0]] = result.deskripsi
})
}
break
case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./src/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
client.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'jodohku': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await client.sendButtonText(m.chat, buttons, jawab, client.user.name, m, {mentions: ments})
}
break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
]
await client.sendButtonText(m.chat, buttons, jawab, client.user.name, m, {mentions: menst})
}
break
case 'chatowner': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
let txt = `Member laknat chat nih:\n\n*Sender*: https://wa.me/${m.sender.split("@s.whatsapp.net")[0]} / ${m.sender.split("@s.whatsapp.net")[0]}\n*Name* ${pushname}\n*Message*: ${text}`
if (/image/.test(mime)) {
  let media = await client.downloadAndSaveMediaMessage(quoted)
  buff = fs.readFileSync(media)
  client.sendMessage(global.owners + '@s.whatsapp.net', {image: buff, caption: txt})
  m.reply('Succes chat to owner')
} else if (/video/.test(mime)) {
  let media = await client.downloadAndSaveMediaMessage(quoted)
  buff = fs.readFileSync(media)
  client.sendMessage(global.owners + '@s.whatsapp.net', {video: buff, caption: txt})
  m.reply('Succes chat to owner')
} else if (text) {
  client.sendMessage(global.owners + '@s.whatsapp.net', {text: txt})
  m.reply('Succes chat to owner')
} else {
  m.reply(`Usage: *${prefix + command} your message* or send image with caption *${prefix + command} your message*`)
}
}
break 
case 'ochat': {
msg = text.slice(args[0].length + 1)
if (isNaN(args[0])) throw 'Please insert a number'
let txt = `*CHAT DARI OWNER*\n\nPesan : ${msg}\n\nUntuk reply ketik ${prefix}chatowner balasan`
if (/image/.test(mime)) {
  let media = await client.downloadAndSaveMediaMessage(quoted)
  buff = fs.readFileSync(media)
  client.sendMessage(args[0] + '@s.whatsapp.net', {image: buff, caption: txt})
} else if (/video/.test(mime)) {
  let media = await client.downloadAndSaveMediaMessage(quoted)
  buff = fs.readFileSync(media)
  client.sendMessage(args[0] + '@s.whatsapp.net', {video: buff, caption: txt})
} else if (text) {
  client.sendMessage(args[0] + '@s.whatsapp.net', {text: txt})
} else {
  m.reply(`Usage: *${prefix + command} your message* or send image with caption *${prefix + command} your message*`)
}
m.reply('Succes reply to member')
}
break
case 'privatechat':{
let [nomor, teks] = text.split`|`
s = nomor
s = s.replace(/\-/g, "");
s = s.replace(/\ /g, "");
s = s.replace(/\+/g, "");
if (isNaN(s)) return reply('Nomor harus berupa angka');
let txt = `Hay, ada yang chat kamu nih:\n\n\n*Pesan*: ${teks}\n\n\n© Octave Bot`
if (/image/.test(mime)) {
  let media = await client.downloadAndSaveMediaMessage(quoted)
  buff = fs.readFileSync(media)
  client.sendMessage(s + '@s.whatsapp.net', {image: buff, caption: txt})
} else if (/video/.test(mime)) {
  let media = await client.downloadAndSaveMediaMessage(quoted)
  buff = fs.readFileSync(media)
  client.sendMessage(s + '@s.whatsapp.net', {video: buff, caption: txt})
} else if (text) {
  client.sendMessage(s + '@s.whatsapp.net', {text: txt})
} else {
  m.reply(`Usage: *${prefix + command} your message* or send image with caption *${prefix + command} your message*`)
}
m.reply(mess.success)
}
break
case 'react': {
if (!isCreator) throw mess.owner
if (!text) throw `Usage *${prefix + command}🥰*`
reactionMessage = {
react: {
text: args[0],
key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
}
}
client.sendMessage(m.chat, reactionMessage)
}
break  
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let delrep = await m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await client.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
client.sendMessage(global.owners + '@s.whatsapp.net', {text: `Joined in ${text}`}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'leave': {
if (!isCreator) throw mess.owner
await client.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setexif': {
if (!isCreator) throw mess.owner
if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'block': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await client.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await client.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setppbot': {
if (!isCreator) throw mess.owner
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await client.downloadAndSaveMediaMessage(quoted)
await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await client.downloadAndSaveMediaMessage(quoted)
await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'tagall': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══

➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
client.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'style': case 'styletext': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break
case 'vote': {
if (!m.isGroup) throw mess.group
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: client.user.name,
buttons: buttonsVote,
headerType: 1
}
client.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageUpvote = {
text: teks_vote,
footer: client.user.name,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
client.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'devote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: client.user.name,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
client.sendMessage(m.chat, buttonMessageDevote)
}
break

case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${client.user.id}
`
client.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await client.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await client.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await client.sendButtonText(m.chat, buttons, `Mode Group`, client.user.name, m)

}
}
break
case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
await client.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await client.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
await client.sendButtonText(m.chat, buttons, `Mode Edit Info`, client.user.name, m)

}
}
break
case 'antilink': {
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await client.sendButtonText(m.chat, buttons, `Mode Antilink`, client.user.name, m)
}
}
break
// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
teks = `Ketik join untuk bergabung ke group whatsapp anda`
sendOrder(m.chat, teks, "391028153034238", fs.readFileSync('./src/test.jpg'), 2022, "AyakaBOT~MD", "6282296959969@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}
case 'mute': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${client.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${client.user.name} telah di unmute di group ini !`)
} else {
let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
]
await client.sendButtonText(m.chat, buttons, `Mute Bot`, client.user.name, m)
}
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
let response = await client.groupInviteCode(m.chat)
client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await client.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await client.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await client.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(2000)
let btn = [{
urlButton: {
displayText: 'Source Code',
url: global.sourceurl
}
}, {
callButton: {
displayText: 'O W N E R',
phoneNumber: global.phone
}
}, {
quickReplyButton: {
displayText: 'S P E E D BOT 🤖',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: '💸 S E W A B O T 💸',
id: `${prefix}sewabot`
}  
}, {
quickReplyButton: {
displayText: 'Menu',
id: 'menu'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
client.sendButImg(i, txt, client.user.name, global.thumb, btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 2} detik`)
for (let yoi of anu) {
await sleep(2000)
let btn = [{
urlButton: {
displayText: 'Source Code',
url: global.sourceurl
}
}, {
callButton: {
displayText: 'O W N E R',
phoneNumber: global.phone
}
}, {
quickReplyButton: {
displayText: 'S P E E D BOT 🤖',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: '💸 S E W A B O T 💸',
id: 'sewabot'
}  
}, {
quickReplyButton: {
displayText: 'Menu',
id: 'menu'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
client.sendButImg(yoi, txt, client.user.name, global.thumb, btn)
}
m.reply('Sukses Broadcast')
}
break
case 'infochat': {
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
client.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await client.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
client.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listgc': {
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata = await client.groupMetadata(i)
teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
}
client.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listonline': case 'liston': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
client.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'wm': case 'stickerwm': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example :\nswm Myclient APIs | MyMainas`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
client.downloadAndSaveMediaMessage(quoted, "gifee")
client.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'smeme': case 'smm': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply("Masukan Textnya!")
if (/image/.test(mime)) {
var media = await client.downloadAndSaveMediaMessage(quoted)
imgbb('01f871ad56b2137b3affb38dfd46ae31', media)
.then(async (data) => {
atast = args.join(" ").split('|')[0] ? args.join(" ").split('|')[0] : '-'
bawaht = args.join(" ").split('|')[1] ? args.join(" ").split('|')[1] : '-'
if (bawaht) {
lohd = atast + "/" + bawaht
} else {
lohd = " /" + args.join(" ")
}
var urls = data.display_url
let meme = `https://api.memegen.link/images/custom/${lohd ? lohd : "-"}.png?background=${urls}`
client.sendImageAsSticker(m.chat, meme, m, { packname:global.packname, author: global.packname })
await fs.unlinkSync(media)
}).catch(err => {
return m.reply(err)
})
} else {
m.reply("Kirim foto dengan caption smeme")
}
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
let delrep = await m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'ebinary': {
if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
let { eBinary } = require('./lib/binary')
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let eb = await eBinary(teks)
m.reply(eb)
}
break
case 'dbinary': {
if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
let { dBinary } = require('./lib/binary')
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let db = await dBinary(teks)
m.reply(db)
}
break
case 'emojimix2': {
  if (!text) throw `Example : ${prefix + command} 😅`
    let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
  for (let res of anu.results) {
    let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
    await fs.unlinkSync(encmedia)
  }
}
break
case 'emojimix': {
if (!text) throw `Example : ${prefix + command} 😅+🤔`
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
let delrep = await m.reply(mess.wait)
let media = await client.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
client.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
let delrep = await m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await client.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
let delrep = await m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
client.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'tomp3': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
let delrep = await m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
client.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${client.user.name}.mp3`}, { quoted : m })
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
let delrep = await m.reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
client.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
let delrep = await m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await client.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'tourl': {
let delrep = await m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await client.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'nobg': case 'removebg': {
if (/image/.test(mime)) {
let delrep = await m.reply(mess.wait)
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
if (res.image.extension === "png") throw 'Maaf gampar berformat .png tidak dapat dihapus background\nMohon gunakan gambar berformat .jpg'
client.sendMessage(m.chat, {image: {url: api('fxc7', '/maker/rmbg', {url: res.display_url}, 'apikey')}}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else { 
  m.reply(`Send a picture with caption ${prefix + command} !`)
}
}
break
/*case 'imagenobg': case 'removebg': case 'remove-bg': {
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './src/remobg-'+getRandom('')
localFile = await client.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './src/hremo-'+getRandom('.png')
let delrep = await m.reply(mess.wait)
remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
client.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break*/
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
client.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'google': {
if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'gimage': {
if (!text) throw `Example : ${prefix + command} kaori cicak`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'infogempa': {
let delrep = await m.reply(mess.wait)
let anu = await Gempa();
client.sendMessage(m.chat, {image: {url: anu.map}, caption: `• *Waktu*:${anu.waktu}\n• *Magnitude*:${anu.magnitudo}\n• *Kedalaman*:${anu.kedalaman}\n• *Lintang*:${anu.lintang}\n• *Bujur*:${anu.bujur}\n• *Wilayah*:${anu.wilayah}`}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'cuaca': {
if (!text) throw 'Please insert your city!'
let delrep = await m.reply(mess.wait)
let anu = await Cuaca(text)
m.reply(`🔰 *Tempat* : ${anu.Nama}\n📍 *Longitude* : ${anu.Longitude}\n📍 *Latitude* : ${anu.Latitude}\n🌡️ *Suhu* : ${anu.Suhu}\n🌪️ *Angin* : ${anu.Angin}\n❄️ *Kelembaban* : ${anu.Kelembaban}\n🌥️ *Cuaca* : ${anu.Cuaca}\n🗒️ *Keterangan* : ${anu.Keterangan}\n🌬️ *Udara* : ${anu.Udara}`)
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'jadwaltv': {
if (!text) throw 'Please insert tv channel name!'
let delrep = await m.reply(mess.wait)
let anu = await fetchJson(api('jojo', '/jadwaltv', {ch: text}))
txt = `*Berikut adalah jadwal tv dari ${text}*:\n\n`
for (let res of anu.result) {
  txt += `\n📺-> ${res}\n`
}
m.reply(txt)
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'jadwaltvnow': {
let delrep = await m.reply(mess.wait)
let anu = await fetchJson(api('jojo', '/jadwaltvnow'))
m.reply('*Berikut adalah jadwal tv terkini*:\n\n' + anu.result.jadwalTV)
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'covid': case 'corona': {
  if (!text) throw 'Please insert a country'
  let delrep = await m.reply(mess.wait)
  let anu = await fetchJson(`https://arugaz.herokuapp.com/api/corona?country=${text}`)
  if (!anu.status == 200) throw 'Not found!'
  capt = `⭔ Country : ${anu.result.country}\n\n⭔ Active : ${anu.result.active}\n⭔ CasesPerOneMillion : ${anu.result.casesPerOneMillion}\n⭔ Critical : ${anu.result.critical}\n⭔ ReathsPerOneMillion : ${anu.result.deathsPerOneMillion}\n⭔ Recovered : ${anu.result.recovered}\n⭔ TestPerOneMillion : ${anu.result.testPerOneMillion}\n⭔ TodayCases : ${anu.result.todayCases}\n⭔ TodayDeath : ${anu.result.todayDeath}\n⭔ TotalCases : ${anu.result.totalCases}\n⭔ TotalTest : ${anu.result.totalTest}`
  client.sendMessage(m.chat, {image: {url: 'https://www.ahajournals.org/pb-assets/AHAPortfolio/CoronaVirusVertical-1584464141167.jpg'}, caption: capt}, {quoted: m})
  await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'spekhp': {
if (!text) throw 'Please insert phone brand!'
let delrep = await m.reply(mess.wait)
let anu = await fetchJson(api('jojo', '/gsm_arena', {q: text}))
res = `*Title* : ${anu.title}\n`
for (let an of anu.spec) {
            res += '\n' + an.list + '\n'
        }
client.sendMessage(m.chat, {image: {url: anu.img}, caption: res}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'lirik': {
  if (!text) throw 'Please insert a song title'
  let anu = await lirik(text);
  m.reply('Lirik dari lagu '+text+' adalah :\n\n'+anu);
}
break
case 'chord': {
  if (!text) throw 'Please insert a song title'
  let anu = await fetchJson(api('fxc7', '/search/chordlagu', {query: text}, 'apikey'))
  m.reply(anu.result.chord)
}
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} rootsec`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    ngen = `
💬 Title : ${anu.title}
🙈 Ext : Search
🗣️ ID : ${anu.videoId}
🤔 Duration : ${anu.timestamp}
😎 Viewers : ${anu.views}
🔥 Uploaded : ${anu.ago}
🤖 Author : ${anu.author.name}
🗿 Channel : ${anu.author.url}
✍️ Description : ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   client.waUploadToServer })
                template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngen,
                            hydratedFooterText: `${text}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Video Source 🚀',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎵Audio🎵',
                                    id: `ytmp3 ${anu.url} 320kbps`
                                    }
                                },{quickReplyButton: {
                                    displayText: '🎥VIdeo🎥',
                                    id: `ytmp4 ${anu.url} 360p`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                  client.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'ytmp3': case 'ytaudio': {
let { yta } = require('./lib/y2mate')
if (!isUrl(text)) throw 'Please enter the YouTube link'
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(args[0], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
client.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
client.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
if (!isUrl(text)) throw 'Please enter the YouTube link'
let quality = args[1] ? args[1] : '360p'
let media = await ytv(args[0], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
client.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'getmusic': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
client.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
client.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'getvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
client.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'pinterest': case 'pint': {
if (!text) throw 'Please insert the query'
if (isUrl(text)) throw 'please input the query not url!'
let { pinterest } = require('./lib/scraper')
let delrep = await m.reply(mess.wait)
let anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
client.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'couple': case 'ppcp': case 'ppcouple': {
let delrep = await m.reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
client.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
client.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'coffe': case 'kopi': {
let buttons = [
{buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'wallpaper': {
if (!text) throw 'Masukkan Query Title'
let { wallpaper } = require('./lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'wikimedia': {
if (!text) throw 'Masukkan Query Title'
let { wikimedia } = require('./lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break

case 'quotesanime': case 'quoteanime': {
let { quotesAnime } = require('./lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footer: client.user.name,
buttons: buttons,
headerType: 2
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'waifu': case 'neko': case 'shinobu': case 'megumin': case 'awoo': {
  let anu = await fetchJson(api('waifu', '/' + command))
  let buttons = [
{buttonId: command, buttonText: {displayText: command.toUpperCase() }, type: 1}
]
let buttonMessage = {
image: { url: anu.url },
caption: `Nih gann!`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
            case 'cecan': {
            let buttons = [
                    {buttonId: `cecan`, buttonText: {displayText: 'Lagi Bot 😏'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/asupan/cecan' },
                    caption: `Jangan Berharap Terlalu Tinggi Itu Tidak Baik 😅`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
            case 'wallnime': {
            let buttons = [
                    {buttonId: `wallnime`, buttonText: {displayText: 'Lagi Bot 😏'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.lolhuman.xyz/api/random/wallnime?apikey=ThadzBotZ' },
                    caption: `Istriku Cantik² Kak 😂`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
            case 'wallpaper2': case 'wphd': {
            let buttons = [
                    {buttonId: `wallpaper2`, buttonText: {displayText: 'Lagi Bot 😏'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.lolhuman.xyz/api/random2/wallpaper?apikey=ThadzBotZ' },
                    caption: `Jika Ada Gambar 18+ Mohon Maaf Karena Saya Hanyalah Bot 🗿`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
    break
            case 'cogan': {
            let buttons = [
                    {buttonId: `cogan`, buttonText: {displayText: 'Lagi Bot 😏'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.lolhuman.xyz/api/random/cogan?apikey=ThadzBotZ' },
                    caption: `Ini Cogannya Kak 😗`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
    break
            case 'blackpink': case 'pinkblack': {
            let buttons = [
                    {buttonId: `blackpink`, buttonText: {displayText: 'Lagi Bot 😏'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.lolhuman.xyz/api/random/blackpink?apikey=ThadzBotZ' },
                    caption: `Ini Kak Fans Mu Jangan Sang3 Ya 😅`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
    break
            case 'bts': {
            let buttons = [
                    {buttonId: `bts`, buttonText: {displayText: 'Lagi Bot 😏'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.lolhuman.xyz/api/random/bts?apikey=ThadzBotZ' },
                    caption: `Nih gan!!`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
        break
            case 'waifu2': case 'husbu2': case 'neko2': {
            let buttons = [
                    {buttonId: `waifu`, buttonText: {displayText: 'Lagi Bot 😏'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/randomimg/waifu' },
                    caption: `Waifu HD Random Hehehe`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
        break
            case 'waifu2': case 'husbu2': case 'neko2': {
            let buttons = [
                    {buttonId: `waifu`, buttonText: {displayText: 'Lagi Bot 😏'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/randomimg/waifu' },
                    caption: `Waifu HD Random Hehehe`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
        break
            case 'elina': case 'elaina': {
            let buttons = [
                    {buttonId: `elina`, buttonText: {displayText: 'Lagi Bot 😏'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.lolhuman.xyz/api/random/elaina?apikey=ThadzBotZ' },
                    caption: `Elina Random Hehehe`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
    break
            case 'memeindo': {
            let buttons = [
                    {buttonId: `memeindo`, buttonText: {displayText: 'Yang Ngakak Lagi Dong'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.lolhuman.xyz/api/meme/memeindo?apikey=ThadzBotZ' },
                    caption: `Ini Kak Memenya Kak 🗿`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
    break
            case 'meme': {
            let buttons = [
                    {buttonId: `meme`, buttonText: {displayText: 'Next The Fun😂'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.lolhuman.xyz/api/random/meme?apikey=ThadzBotZ' },
                    caption: `Meme The Fun Vitur New`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
    break
            case 'art': case 'animeart': {
            let buttons = [
                    {buttonId: `art`, buttonText: {displayText: 'Yang Bagus Lagi Dong 😗'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.lolhuman.xyz/api/random/art?apikey=ThadzBotZ' },
                    caption: `Anime Art Vitur New`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
    break
            case 'estetic': {
            let buttons = [
                    {buttonId: `estetic`, buttonText: {displayText: 'Lanjutkan Bot 🗿'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.lolhuman.xyz/api/random/estetic?apikey=ThadzBotZ' },
                    caption: `Estetic Generator`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
    break
           
case 'bully': case 'cuddle': case 'hug': case 'kiss': case 'lick': case 'pat': case 'bonk': case 'smug': case 'yeet': case 'blush': case 'smile': case 'wave': case 'highfive': case 'handhold': case 'nom': case 'bite': case 'glomp': case 'slap': case 'kill': case 'happy': case 'wink': case 'poke': case 'dance': case 'cringe': {
  let anu = await fetchJson(api('waifu', '/' + command))
  let encmedia = await client.sendImageAsSticker(m.chat, anu.url, m, { packname: global.packname, author: global.author})
await fs.unlinkSync(encmedia)
}
break
            case 'zippyshare': case 'zippydl': {
                if (!text) throw `Example : ${prefix + command} https://www69.zippyshare.com/v/MRLWO4qB/file.html#!/N27zvKSgDG46JQ6`
                let anu = await zippyDownloader(isUrl(text)[0])
                if (Number(anu.size.split("MB")[0]) >= 100.00) return m.reply('File Melebihi Batas '+util.format(m.result))
                client.sendText(m.chat, util.format(anu), m)
                client.sendMedia(m.chat, anu.link, '', m)
            }
            break
            case 'mediafire': case 'mediafiredl': {
                if (!text) throw `Example : ${prefix + command} http://www.mediafire.com/file/naqy6ofoqkb6poi/Anime_MUGEN_300_Characters_by_Makoto_Itou_%2526_Kizuma_Gaming.apk/file`
                let anu = await mediafireDownloader(isUrl(text)[0])
                if (Number(anu.filesize.split("MB")[0]) >= 100.00) return m.reply('File Melebihi Batas '+util.format(m.result))
		client.sendText(m.chat, util.format(anu), m)
                client.sendMedia(m.chat, anu.link, '', m)
            }
            break
case 'storyanime': {
  let anu = await fetchJson('https://fatiharridho.my.id/database/anime/storyanime.json')
  rndm = anu[Math.floor(Math.random() * anu.length)];
  let buttons = [
{buttonId: command, buttonText: {displayText: command.toUpperCase() }, type: 1}
]
let buttonMessage = {
video: { url: rndm.result },
caption: `Nih gann!`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'truth': {
let anu = await truth()
let buttons = [
{buttonId: 'truth', buttonText: {displayText: 'Truth' }, type: 1},
{buttonId: `dare`, buttonText: {displayText: 'Dare' }, type: 1}
]
let buttonMessage = {
image: { url: 'https://lh3.googleusercontent.com/vxt8eXdsh1r6veaejf8bnkdIw4PJJ1goLEMe0_ez0NlVMzyQFs_mk0Z5UN99qssUDnk' },
caption: `*ToD*\n\n${anu}`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'dare': {
let anu = await dare()
let buttons = [
{buttonId: 'truth', buttonText: {displayText: 'Truth' }, type: 1},
{buttonId: `dare`, buttonText: {displayText: 'Dare' }, type: 1}
]
let buttonMessage = {
image: { url: 'https://lh3.googleusercontent.com/vxt8eXdsh1r6veaejf8bnkdIw4PJJ1goLEMe0_ez0NlVMzyQFs_mk0Z5UN99qssUDnk' },
caption: `*ToD*\n\n${anu}`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'renungan': {
  let anu = await fetchJson('https://fatiharridho.my.id/database/kata-kata/renungan.json')
  rndm = anu[Math.floor(Math.random() * anu.length)];
    let buttons = [
{buttonId: command, buttonText: {displayText: command.toUpperCase() }, type: 1}
]
let buttonMessage = {
image: { url: rndm },
caption: `Nih gann!`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'quotesmotivasi': {
let anu = await quotesmotivasi()
let buttons = [
{buttonId: command, buttonText: {displayText: 'Quotes Motivasi' }, type: 1}
]
let buttonMessage = {
image: { url: 'https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg' },
caption: `*${command.toUpperCase()}*\n\n${anu}`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'quoteskehidupan': {
let anu = await quoteskehidupan()
let buttons = [
{buttonId: command, buttonText: {displayText: 'Quotes Kehidupan' }, type: 1}
]
let buttonMessage = {
image: { url: 'https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg' },
caption: `*${command.toUpperCase()}*\n\n${anu}`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'quotesislami': {
let anu = await quotesislami()
let buttons = [
{buttonId: command, buttonText: {displayText: 'Quotes Islami' }, type: 1}
]
let buttonMessage = {
image: { url: 'https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg' },
caption: `*${command.toUpperCase()}*\n\n${anu}`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'quotesnasehat': {
let anu = await quotesnasehat()
let buttons = [
{buttonId: command, buttonText: {displayText: 'Quotes Nasehat' }, type: 1}
]
let buttonMessage = {
image: { url: 'https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg' },
caption: `*${command.toUpperCase()}*\n\n${anu}`,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'ttp': {
if (!text) throw `Example : ${prefix + command} octave`
let encmedia = await client.sendImageAsSticker(m.chat, api('fxc7', '/maker/ttp', { text: text }, 'apikey'), m, { packname: global.packname, author: global.author})
await fs.unlinkSync(encmedia)
}
break
case 'bpink': case 'glitch2': case 'thunder'  : case 'bneon': case 'matrix': case 'ghoror': case 'dropwater': case 'devil': {
if (!text) throw `Example : ${prefix + command} octave`
if (command == 'bpink') {
texp = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
} else if (command == 'glitch2') {
texp = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
} else if (command == 'thunder') {
texp = 'https://textpro.me/create-thunder-text-effect-online-881.html'
} else if (command == 'bneon') {
texp = 'https://textpro.me/neon-light-text-effect-online-882.html'
} else if (command == 'matrix') {
texp = 'https://textpro.me/matrix-style-text-effect-online-884.html'
} else if (command == 'ghoror') {
texp = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
} else if (command == 'dropwater') {
texp = 'https://textpro.me/dropwater-text-effect-872.html'
} else if (command == 'devil') {
texp = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
}
let delrep = await m.reply(mess.wait)
let anu = await textpro(texp, text)
client.sendMessage(m.chat, {image: {url: anu}}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'glitch': case 'avengers': case 'marvel': case 'phlogo': {
if (!text) throw `Example : ${prefix + command} octave|bot`
if (command == 'glitch') {
  texp2 = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
} else if (command == 'marvel') {
  texp2 = 'https://textpro.me/create-logo-style-marvel-studios-online-971.html'
} else if (command == 'phlogo') {
  texp2 = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'
} else if (command == 'avengers') {
  texp2 = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
}
let [tx1, tx2] = text.split`|`
if (tx2 == undefined) throw `Example : ${prefix + command} octave|bot\n\nUse |  for the separator between text1 and text2`
let delrep = await m.reply(mess.wait)
let anu = await textpro2(texp2, tx1, tx2)
client.sendMessage(m.chat, {image: {url: anu}}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'ssweb': case 'webtoimg': {
  if (!text) throw 'Please insert url!'
let delrep = await m.reply(mess.wait)
  client.sendMessage(m.chat, {image: {url :`https://image.thum.io/get/maxAge/12/width/1200/${args[0]}`, caption: 'If only the logo appears, please repeat!'}}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'nulis': case 'tulis': {
if (!text) throw 'Please insert text!'
let delrep = await m.reply(mess.wait)
client.sendMessage(m.chat, {image: {url: api('fxc7', '/maker/nulis', {text: text}, 'apikey')}, caption: 'nahh'}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'nulis2': case 'tulis2': {
if (!text) throw `Type ${prefix + command} name|class|text|ink color\nFor ink color is:\n1 = brown\n2 = red\n3 = blue\n4 = black`
let [nama, kelas, isi] = text.split`|`
if (isNaN(kelas)) throw 'Class must be a number not alphabeth'
let delrep = await m.reply(mess.wait)
client.sendMessage(m.chat, {image: {url: api('fxc7', '/maker/nulis2', {nama: nama, kelas: kelas, text: isi}, 'apikey') , caption: 'nahh'}}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'tantangan': case 'tonguetwister': {
let anu = await fetchJson(api('jojo', '/tongue_twister'))
let buttons = [
{buttonId: `tantangan`, buttonText: {displayText: 'Tongue Twister' }, type: 1}
]
let buttonMessage = {
image: { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSAorkaHRaUeqsHld2wB18QatSTSQZ1SAEw&usqp=CAU' },
caption: '👅 *Tongue Twister* 👅\nCoba ngomong kalimat dibawah ini dengan cepat!\n\n' + anu.result,
footer: client.user.name,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'qr': case 'qrencode': {
if (!text) throw `Usage: *${prefix + command} text*`
let delrep = await m.reply(mess.wait)
client.sendMessage(m.chat, {image: {url: api('jojo', '/qrcode', {text: text})}, caption: `*QR Encode from: ${text}`}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'qrreader': case 'qrdecode': {
if (/image/.test(mime)) {
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
let delrep = await m.reply(mess.wait)
let anu = await fetchJson(api('jojo', '/qr_read', {image_url: res.display_url}))
m.reply(`*Result*:\n\n⭔ *Raw Text*: ${anu.result.raw_text}\n⭔ *Raw Bytes*: ${anu.result.raw_bytes}`)
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
  m.reply(`Please insert or reply image with caption ${prefix + command}!`)
}
}
break
case 'vampire': {
if (/image/.test(mime)) {
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
let delrep = await m.reply(mess.wait)
client.sendMessage(m.chat, {image: {url: api('jojo', '/vampire-teeth-effect', {image_url: res.display_url})}, caption: 'Nih gann!'}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
m.reply(`Please insert or reply image with caption ${prefix + command}!`)
}
}
break
case 'skull': {
if (/image/.test(mime)) {
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
let delrep = await m.reply(mess.wait)
client.sendMessage(m.chat, {image: {url: api('jojo', '/skull-makeup', {image_url: res.display_url})}, caption: 'Nih gann!'}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
m.reply(`Please insert or reply image with caption ${prefix + command}!`)
}
}
break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `Random Coffee`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'spongebob': {
if (/image/.test(mime)) {
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
let delrep = await m.reply(mess.wait)
client.sendMessage(m.chat, {image: {url: api('fxc7', '/maker/spongebob', {url: res.display_url}, 'apikey')}, caption: 'Nih gann!'}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
m.reply(`Please insert or reply image with caption ${prefix + command}!`)
}
}
break
case 'twibonbadut': {
if (/image/.test(mime)) {
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
let delrep = await m.reply(mess.wait)
client.sendMessage(m.chat, {image: {url: api('fxc7', '/maker/badut', {url: res.display_url}, 'apikey')}, caption: 'Nih gann!'}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
m.reply(`Please insert or reply image with caption ${prefix + command}!`)
}
}
break
case 'crush': {
if (/image/.test(mime)) {
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
let delrep = await m.reply(mess.wait)
client.sendMessage(m.chat, {image: {url: api('fxc7', '/maker/crush', {url: res.display_url}, 'apikey')}, caption: 'Nih gann!'}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
m.reply(`Please insert or reply image with caption ${prefix + command}!`)
}
}
break
case 'passed': {
if (/image/.test(mime)) {
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
let delrep = await m.reply(mess.wait)
client.sendMessage(m.chat, {image: {url: api('fxc7', '/maker/missionpassed', {url: res.display_url}, 'apikey')}, caption: 'Nih gann!'}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
m.reply(`Please insert or reply image with caption ${prefix + command}!`)
}
}
break
case 'scary': {
if (/image/.test(mime)) {
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
let delrep = await m.reply(mess.wait)
client.sendMessage(m.chat, {image: {url: api('fxc7', '/maker/scary', {url: res.display_url}, 'apikey')}, caption: 'Nih gann!'}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
m.reply(`Please insert or reply image with caption ${prefix + command}!`)
}
}
break
case 'tobecontinue': {
if (/image/.test(mime)) {
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
let delrep = await m.reply(mess.wait)
client.sendMessage(m.chat, {image: {url: api('fxc7', '/maker/tobecontinue', {url: res.display_url}, 'apikey')}, caption: 'Nih gann!'}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
m.reply(`Please insert or reply image with caption ${prefix + command}!`)
}
}
break
case 'colorize': {
if (/image/.test(mime)) {
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
let delrep = await m.reply(mess.wait)
client.sendMessage(m.chat, {image: {url: api('jojo', '/colorize-old-photo', {image_url: res.display_url})}, caption: 'Nih gann!'}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
m.reply(`Please insert or reply image with caption ${prefix + command}!`)
}
}
break
case 'quoteit': case 'quotesmaker': case 'quotemaker': {
if (!text) throw `Usage: send a picture with caption *${prefix + command} text|wm*\nor type *${prefix + command} text|wm* for use random background`
let [tx1, tx2] = text.split`|`
wm = tx2
wm = tx2 ? tx2 : '-'
let delrep = await m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
client.sendMessage(m.chat, {image: {url: api('fxc7', '/maker/quotes', {background: res.display_url, wm: wm, text: tx1}, 'apikey')}, caption: tx1}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
client.sendMessage(m.chat, {image: {url: api('fxc7', '/maker/quotes', {background: 'https://random.responsiveimages.io/v1/docs', wm: wm, text: tx1}, 'apikey')}, caption: tx1}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
}
break
case 'triggered': case 'trig': case 'trigger': {
if (/image/.test(mime)) {
let delrep = await m.reply(mess.wait)
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
let encmedia = await client.sendImageAsSticker(m.chat, api('fxc7', '/maker/triggered', { url: res.display_url }, 'apikey'), m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else { 
  m.reply(`Send a picture with caption ${prefix + command} !`)
}
}
break
case 'yasin': {
if (/image/.test(mime)) {
  if (!text) throw `Send a picture with caption ${prefix + command}  Name!`
let delrep = await m.reply(mess.wait)
  let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
await fs.unlinkSync(media)
client.sendImage(m.chat, `https://hadi-api.herokuapp.com/api/canvas/yasin?name=${text}&url=${res.display_url}`, `Innalillahi, turut berdukacita yahh ${text}😔`, m)
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
  m.reply(`Send a picture with caption ${prefix + command}  Name!`)
}
}
break
case 'badut': {
if (/image/.test(mime)) {
let delrep = await m.reply(mess.wait)
let media = await client.downloadAndSaveMediaMessage(quoted)
res = await imgbb('de404db9d9a94c4d0eb2490b93788824', media)
client.sendMessage(m.chat, { image: { url:`https://docs-jojo.herokuapp.com/api/clown-face-in-hole?image_url=${res.display_url}` }, caption: 'Stop membadut'}, { quoted: m }).catch ((err) => m.reply('Face not detected!'))
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
  m.reply(`Please insert a picture or reply to the picture with a caption ${prefix + command}`)
}
}
break
case 'nomerhoki': case 'nomorhoki': {
if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'suamiistri': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artinama': {
if (!text) throw `Example : ${prefix + command} Dika Ardianta`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) throw `Example : ${prefix + command} Dika|Novia`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
client.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
case 'sifatusaha': {
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
case 'rejeki': case 'rezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'pekerjaan': case 'kerja': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artitarot': case 'tarot': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'fengshui': {
if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'haribaik': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harisangar': case 'taliwangke': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harinaas': case 'harisial': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
case 'nagahari': case 'harinaga': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'peruntungan': {
if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'weton': case 'wetonjawa': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
case 'sifat': case 'karakter': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
case 'keberuntungan': {
if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
case 'memancing': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'masasubur': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'zodiak': case 'zodiac': {
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'shio': {
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
client.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break
case 'shortlink': {
  if (!text) throw 'Please insert a url!'
  if (!isUrl(text)) throw 'Please insert a url!'
  let delrep = await m.reply(mess.wait)
  let anu = await fetchJson(api('fxc7', '/tools/shorturl', {url: text}, 'apikey'))
  m.reply(anu.result)
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'linkwa': {
if (!text) throw 'Please insert a query'
let delrep = await m.reply(mess.wait)
let anu = await linkwa(text)
txt = `*Result*:\n\n<==================================>`
for (let res of anu) {
  txt += `\n⭔ *Nama Group*: ${res.nama}\n⭔ *Link Group*: ${res.link}\n\n<==================================>`
}
m.reply(txt)
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'codebahasa': {
  let anu = await codebahasa()
  m.reply(anu)
}
break
case 'rules': {
  let anu = await rules()
  m.reply(anu)
}
break
case 'listsurah': {
  let anu = await listsurah()
  m.reply(anu)
}
break
case 'translate': case 'terjemah': case 'tr': {
if (!text) throw `Usage: ${prefix + command} language code text\nExample: ${prefix + command} id hello world\n\nType ${prefix}codebahasa to see all available language codes`
var lang = args[0];
var tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
var kata = text.slice(args[0].length + 1)
trj = kata || tex
try {
let anu= await terjemah(trj, lang);
m.reply(anu);
} catch {
  m.reply(`Language code is wrong!\n\nUsage: ${prefix + command} language code text\nExample: ${prefix + command} id hello world\n\nType ${prefix}codebahasa to see all available language codes`)
}
}
break
case 'brainly': {
if (!text) throw `Ketik ${prefix + command} query\nContoh penggunaan : \n${prefix + command} apakah itu cinta`
  let delrep = await m.reply(mess.wait)
let anu = await fetchJson(api('fxc7', '/search/brainly', {query: text}, 'apikey'))
for (let dat of anu.result) {
  await sleep(1000)
brain = `'❉───────────❉\n\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${dat.pertanyaan}\n\n*➸ Jawaban:* ${dat.jawaban[0].text}\n❉───────────❉`
m.reply(brain.trim())
}
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'wiki': case 'wikipedia': {
if (!text) throw 'Please insert query'
let delrep = await m.reply(mess.wait)
let anu = await fetchJson(api('fxc7', '/search/wikipedia', {query: text}, 'apikey'))
if (anu.result == false) throw 'Query tidak ditemukan'
client.sendMessage(m.chat, { image: { url: anu.result.thumbnail }, caption: anu.result.context }, { quoted: m })
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'tik': case 'tiktok': case 'tiktoknowm': case 'tiktokdl': case 'ttdl': case 'tt': {
if (!text) throw `Usage: *${prefix + command} Tiktok url*`
if (!isUrl(args[0]) && !args[0].includes('tiktok')) throw 'URL TIDAK VALID'
let delrep = await m.reply(mess.wait)
tikt = await tiktok(args[0]);
client.sendMessage(m.chat, { video: { url: tikt.result.nowatermark } }, { quoted: m })
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'asupan': {
nimek =  asupan[Math.floor(Math.random() * asupan.length)];
let delrep = await m.reply(mess.wait)
vid = await mediafireDl(nimek);
let buttons = [
{buttonId: `asupan`, buttonText: {displayText: 'ASUPAN'}, type: 1}
]
let buttonMessage = {
video: { url: vid.link },
caption: '🤤🤤🤤',
footer: client.user.name,
buttons: buttons,
headerType: 5
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'fb': case 'fbdl': {
if (!text && !isUrl(text)) throw `Usage: *${prefix + command} Facebook url*`
if (/(?:\/reel\/)([^\s&]+)/.test(isUrl(text)[0])) throw 'Does not support Reels!'
let delrep = await m.reply(mess.wait)
let anu = await fetchJson(`https://masgimenz.my.id/facebook/?url=${args[0]}`)
client.sendMessage(m.chat, {video: {url: anu.videoUrl}, caption: `*Facebook Downloader*\n\n⭔ *Tittle*: ${anu.title}`}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'ig': case 'instagram': {
if (!text) throw `Usage: *${prefix + command} instagram url*`
if (/(?:\/p\/|\/reel\/)([^\s&]+)/.test(isUrl(text)[0])) {
let delrep = await m.reply(mess.wait)
let igeh = new Instagram()
let anu = await igeh.download(text)
if (anu.status == false) throw 'Invalid link or private post'
if (anu.media_count == 1) {
  if (anu.type == 'image') {
    client.sendMessage(m.chat, {image: {url: anu.url}, caption: `*Result*:\n\n⭔ *Username*: ${anu.username}\n⭔ *Full Name*: ${anu.fullname}\n⭔ *Like Count*: ${anu.like_count}\n⭔ *Comment Count*: ${anu.comment_count}\n⭔ *Media Count*: ${anu.media_count}\n⭔ *Caption*: ${anu.caption}`}, {quoted: m})
  } else {
    client.sendMessage(m.chat, {video: { url: anu.url}, caption: `*Result*:\n\n⭔ *Username*: ${anu.username}\n⭔ *Full Name*: ${anu.fullname}\n⭔ *Like Count*: ${anu.like_count}\n⭔ *Comment Count*: ${anu.comment_count}\n⭔ *Media Count*: ${anu.media_count}\n⭔ *Caption*: ${anu.caption}`}, {quoted: m})
  }
} else {
  m.reply(`*Result*:\n\n⭔ *Username*: ${anu.username}\n⭔ *Full Name*: ${anu.fullname}\n⭔ *Like Count*: ${anu.like_count}\n⭔ *Comment Count*: ${anu.comment_count}\n⭔ *Media Count*: ${anu.media_count}\n⭔ *Caption*: ${anu.caption}`)
  for (let res of anu.result_url) {
    await sleep(1000)
    if (res.type == 'image') {
      client.sendMessage(m.chat, {image: {url: res.url}}, {quoted: m})
    } else {
      client.sendMessage(m.chat, {video: { url: res.url}}, {quoted: m})
    }
  }
}
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
  m.reply('Only support IG Posts and Reels')
}
}
break
case 'igtv': {
if (!text) throw `Usage: *${prefix + command} instagram url*`
if (/(?:\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
let delrep = await m.reply(mess.wait)
let igeh = new Instagram()
let anu = await igeh.tv(text)
client.sendMessage(m.chat, {video: {url: anu.url}, caption: `*Result*:\n\n⭔ *Username*: ${anu.username}\n⭔ *Full Name*: ${anu.full_name}\n⭔ *Like Count*: ${anu.likes}\n⭔ *Comment Count*: ${anu.comments}\n⭔ *Verified*: ${anu.verified}\n⭔ *View*: ${anu.viewers}\n⭔ *Caption*: ${anu.caption}`}, {quoted: m})
await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else {
  m.reply('Only supports IGTV')
}
}
break
case 'twit': case 'twitdl': case 'twitter': {
 if (!text && isUrl(text)) throw 'Please insert twitter url'
 let delrep = await m.reply(mess.wait)
 let anu = await download(text)
 if (!anu.status == true) throw 'Invalid url!'
let txt = `*Twitter Downloader*\n\n⭔ *Title*: ${anu.title}\n⭔ *Username*: ${anu.username}\n⭔ *Nickname*: ${anu.nickname}\n⭔ *Vrified*: ${anu.verified}\n⭔ *Like*: ${anu.like_count}\n⭔ *Comment*: ${anu.comment_count}\n⭔ *Views*: ${anu.view_count}`
 if (anu.type == 'img/jpg') {
   client.sendMessage(m.chat, {image:{url: anu.url}, caption: txt}, {quoted: m})
 } else {
   client.sendMessage(m.chat, {video:{url: anu.url}, caption: txt}, {quoted: m})  
 }
 await sleep(2000)
 client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'umma': case 'ummadl': {
if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
let { umma } = require('./lib) scraper')
let anu = await umma(isUrl(text)[0])
if (anu.type == 'video') {
let buttons = [
{buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.author.profilePic },
caption: `
✍️ Title : ${anu.title}
🗿 Author : ${anu.author.name}
👍 Like : ${anu.like}
👆 Caption : ${anu.caption}
🔗 Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
footer: client.user.name,
buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
} else if (anu.type == 'image') {
anu.media.map(async (url) => {
client.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
})
}
}
                break
case 'ringtone': {
if (!text) throw `Example : ${prefix + command} black rover`
let { ringtone } = require('./lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
client.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
break
case 'jadwalsholat': {
  if (!text) throw `Usage ${prefix + command} city`
  let delrep = await m.reply(mess.wait)
  let anu = await fetchJson(api('fxc7', '/religion/jadwalshalat', {query: text}, 'apikey'))
   if (anu.status == false) throw 'Location not found!'
   throw `*R E S U L T*\n\n📅 *Tanggal* : ${anu.result.date}\n📍 *Lokasi* : ${anu.result.lokasi}\n⏰ *Timezone* : ${anu.result.timezone}\n🌃 *Imsyak* : ${anu.result.imsak}\n🌆 *Sunrise* : ${anu.result.sunrise}\n☀️ *Dzuhur* : ${anu.result.dzuhur}\n🌇 *Ashar* : ${anu.result.ashar}\n🌅 *Maghrib* : ${anu.result.maghrib}\n🌙 *Isya* : ${anu.result.isya}`
   await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'kisahnabi': {
  if (!text) throw `Usage ${prefix + command} prophet name`
  let delrep = await m.reply(mess.wait)
   let anu = await fetchJson(api('fxc7', '/religion/kisahnabi', {nabi: text}, 'apikey'))
   if (anu.status == false) throw 'prophet name not found!'
   throw `📝 *Nama* : ${anu.result.name}\n📅 *Kelahiran* : ${anu.result.kelahiran}\n⏳ *Usia Wafat* : ${anu.result.wafat_usia}\n📍 *Singgah* : ${anu.result.singgah}\n📖 *Cerita* :\n\n${anu.result.kisah}`
   await sleep(2000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'randomquran': {
let anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
let buttons = [
{ buttonId: 'randomquran', buttonText: { displayText: 'Randomquran' }, type: 1 }
]
client.sendButtonText(m.chat, buttons, `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`, client.user.name, m)
}
break
case 'iqra': {
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
client.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
}
break
case 'juzamma': {
if (!text) return m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
let delrep = await m.reply(mess.wait)
if (args[0] === 'pdf') {
client.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
client.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
client.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
client.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
}
await sleep(3000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
}
break
case 'hadis': case 'hadist': {
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
m.reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
m.reply(`Hadis tidak ditemukan !`)
}
}
break
case 'alquran': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
let msg = await m.reply(txt)
client.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg', ptt: true}, { quoted : msg })
}
break
case 'tafsirsurah': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
m.reply(txt)
}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let delrep = await m.reply(mess.wait)
let media = await client.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
client.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
await sleep(4000)
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: delrep.key.id, participant: delrep.key.remoteJid } })
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
case 'setcmd': {
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
client.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
if (!isCreator) throw mess.owner
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
m.reply('Done!')
}
break
case 'addmsg': {
if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case 'getmsg': {
if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
client.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
case 'listmsg': {
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break
case 'delmsg': case 'deletemsg': {
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
case 'anonymous': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
client.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await client.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, client.user.name, m)
}
break
case 'keluar': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await client.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
throw false
}
m.reply('Ok')
let other = room.other(m.sender)
if (other) await client.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[room.id]
}
break
case 'mulai': case 'start': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await client.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, client.user.name, m)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await client.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, client.user.name, m)
room.b = m.sender
room.state = 'CHATTING'
await client.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, client.user.name, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await client.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, client.user.name, m)
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await client.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
throw false
}
let other = romeo.other(m.sender)
if (other) await client.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await client.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, client.user.name, m)
room.b = m.sender
room.state = 'CHATTING'
await client.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, client.user.name, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await client.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, client.user.name, m)
}
break
}
case 'public': {
if (!isCreator) throw mess.owner
client.public = true
m.reply('Sukse Change To Public Usage')
}
break
case 'self': {
if (!isCreator) throw mess.owner
client.public = false
m.reply('Sukses Change To Self Usage')
}
break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
                                          case 'donasi':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi Orang Baik ${pushname}`,
                                                                description: `├───[   D O N A S I  ]────
 
Silakan Pilih Menu Di Bawah Ini Untuk Berdonasi Di Bot Ini
 
 ╰───[ A Y A K A - B O T   ]───`,
                                                                buttonText: "CLICK HERE",
                                                                footerText: `Terima Kasih Sudah Berdonasi`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "List Donasi Di Bot Ini",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "⭐VIA GOPAY ⭐",
                                                                                    "description": "Donasi Lewat Gopay",
                                                                                    "rowId": `${prefix}viagopay`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "⭐VIA DANA ⭐",
                                                                                    "description": "Donasi Lewat DANA",
                                                                                    "rowId": `${prefix}viadana`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "⭐VIA PULSA ⭐",
                                                                                    "description": "Donasi Lewat Pulsa",
                                                                                    "rowId": `${prefix}viapulsa`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
    case 'viagopay': case 'gopay': case 'gopaydonasi': case 'donategopay': {
                client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/589e5a62986556de0de87.jpg' }, caption: `*Hi, ${m.pushName}*\n Terima Kasih Sudah Donasi Via Gopay\n\nMaaf Gopay Tidak Ada\nSilakan Scan Gambar Di Atas Ini Untuk Berdonasi\n` }, { quoted: m })
            }
break
    case 'viadana': case 'dana': {
                client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/589e5a62986556de0de87.jpg' }, caption: `*Hi, ${m.pushName}*\n Terima Kasih Sudah Donasi Via Dana\n\nSilakan Scan Gambar Di Atas Ini Untuk Pembayaraan\n` }, { quoted: m })
            }
break
    case 'viapulsa': case 'pulsa': {
                client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/357dcfed1fbf7a4cea8cf.jpg' }, caption: `*Hi, ${m.pushName}*\n Terima Kasih Sudah Donasi Via Pulsa\n\nSilakan Tulis Nomor Di Gambar Di Atas Ya\n` }, { quoted: m })
            }
break
                                          case 'sewabot':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi ${pushname}`,
                                                                description: `Mau Sewa Bot Ya? Silakan Pilih Harga Di Bawah Ini..!!`,
                                                                buttonText: "SEWA",
                                                                footerText: `Untuk Pembayaraan Tulis Perintah *Payment* atau *donasi*`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Harga Sewabot 🔥",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "Free",
                                                                                    "description": "Add bot gratis (Syarat & ketentuan berlaku)",
                                                                                    "rowId": `${prefix}chatowner`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "😻 5RIBU 😻",
                                                                                    "description": "Sewabot Dengan Harga 5K Selama 7Hari/1Minggu ",
                                                                                    "rowId": `${prefix}chatowner`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "😻 15RIBU 😻",
                                                                                    "description": "Sewabot Dengan Harga 15K Selama 30Hari/1Bulan ",
                                                                                    "rowId": `${prefix}chatowner`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "😻 20RIBU 😻",
                                                                                    "description": "Sewabot Dengan Harga 20K Permanen ",
                                                                                    "rowId": `${prefix}chatowner`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
break
case 'owner': case 'creator': {
client.sendContact(m.chat, global.owner, m)
}
break
                                          case 'nextmenu' :{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi\n\n ${pushname}`,
                                                                description: `🔥DASHBOARD🔥

Selamat datang Ayaka Multi Device. di menu ini kalian bisa mendapatkan panduan soal bot whatsapp.\nOwner\n- Owner atau Pemilik Bot adalah orang yang membuat bot.OWNER BUKANLAH BOT.Chat owner apabila ada kepentingan atau ada yang perlu di tanyakan soal bot whatsapp,\n- Penjelasan OWNER/PEMILIK BOT\n\nhow\n- Cara menggunakan bot adalah dengan mengetikkan command bot. List command bot ada pada menu bot. jangan lupa,untuk mengakses command harus menggunakan prefix.\nPrefix Ayakabot adalah all prefix.\nContoh penggunaan prefix dan command yang benar: *.menu*\n- Cara menggunakan bot dan prefix\n\nberlangganan\n- Layanan berlangganan Di Ayakabot adalah dengan menyewa bot dalam jumlah waktu ke dalam group. Untuk list harga/layanan silahkan baca pada *.sewabot*\n- Berlangganan\n        \nbot\n- Bot adalah sebuah program komputer yang dijalankan di lingkungan. Bot Whatsapp adalah program komputer yang di-aplikasikan di whatsapp. Bot whatsapp diharapkan dapat membantu beberapa aktifitas maupun sekedar untuk senang senang.\n
`,
                                                                buttonText: "CLICK HERE",
                                                                footerText: `Hallo Kak Saya Adalah Ayakabot Multi Device`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Jangan Spam Entar Di block Nangis",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "🖥ALL MENU BOT🖥",
                                                                                    "description": "Tampilkan Semua Menu",
                                                                                    "rowId": `${prefix}allmenu`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "📱CARI TEMAN ONLINE📱",
                                                                                    "description": "INI UNTUK CARI TEMAN",
                                                                                    "rowId": `${prefix}anonymousmenu`
                                                                                },
                                                                                {
                                                                                
                                                                                    "title": "🔥MAIN MENU🔥",
                                                                                    "description": "Cek Ae",
                                                                                    "rowId": `${prefix}mainmenu`
                                                                                },
                                                                                {
                                                                                    
                                                                                    "title": "🎌ANIME MENU🎌",
                                                                                    "description": "Menampilkan Menu Anime",
                                                                                    "rowId": `${prefix}animemenu`
                                                                                },
                                                                                { 
                                                                                   
                                                                                    "title": "🌹SEWABOT🌹",
                                                                                    "description": "Ayo Sewabot Dengan Harga Murah",
                                                                                    "rowId": `${prefix}sewabot`
                                                                                },
                                                                                {
                                                                                    
                                                                                    "title": "🍂RULES BOT🍂",
                                                                                    "description": "Wajib Baca Biar Pinter",
                                                                                    "rowId": `${prefix}rulesbot`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
                                          case 'menu' : case 'cmd': case 'help': case '?':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi ${pushname}`,
                                                                description: `🤖 Ayaka BOT 🤖

Semua Ada Disini 🙈

RUNTIME BOT

 •> Runtime : ${runtime(process.uptime())}

Kalau Mau Add Bot Silakan Chat Owner Ku Dulu Kak 😗

*Promo*
Free Add bot(1 Bulan) Masa Berlaku 12 Juni - 25 Juni

_Free Gunakan Bot Di Mode Chat Pribadi Nb : Jangan Spam 😡_

*List New Vitur 🔥*

Hi Kak ${ucapanWaktu}
Day •> ${jangwak}

• Lolivideo
• Cecan
• Cogan
• Bts
• Blackpink
• Waifu
• Wallpaper
• Elina
• Memeindo
• Meme
• Wphd
• Payment
• Animemenu
• Shopee
• Gameshopee
• Rate
• Wallnime
• Play new vitur
• Animeart
• Estetic
• Smeme
• Databasemenu
• Toolsmenu
• Islamimenu
• Quotesmenu
• Groupmenu
• Convertmenu
• Searchmenu
• Isadanalquran`,
                                                                buttonText: "CLICK DISINI",
                                                                footerText: `Click Di Bawah Untuk Melanjutkan Ke Menu`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Click Dan Pilih",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "⚡KESELURUHAN MENU",
                                                                                    "description": "Tampilkan Semua Menu",
                                                                                    "rowId": `${prefix}allmenu`
                                                                                },
                                                                                {
                                                                                
                                                                                    "title": "🤔MAIN MENU🤔",
                                                                                    "description": "Cek Ae",
                                                                                    "rowId": `${prefix}mainmenu`
                                                                                },
                                                                                {
                                                                                    
                                                                                    "title": "🎌ANIME MENU🎌",
                                                                                    "description": "Menampilkan Menu Anime",
                                                                                    "rowId": `${prefix}animemenu`
                                                                                },
                                                                                { 
                                                                                    
                                                                                    "title": "🍂RULES BOT🍂",
                                                                                    "description": "Wajib Baca Biar Pinter",
                                                                                    "rowId": `${prefix}rulesbot`
                                                                                },
                                                                                {
                                                                                    
                                                                                    "title": "⭐KASIH BINTANG BOT⭐",
                                                                                    "description": "Berikan Bot Bintang Biar Seneng",
                                                                                    "rowId": `${prefix}rate`
                                                                                },
                                                                                {
                                                                                    
                                                                                    "title": "🐔SHOPEE BOT🐔",
                                                                                    "description": "Vitur Terbaru Shopee Bot",
                                                                                    "rowId": `${prefix}shopee`
                                                                                },
                                                                                {
                                                                                    
                                                                                    "title": "🕋ISA Dan Alquran🕋",
                                                                                    "description": "Artikel Tentang Isa Dan Alquran",
                                                                                    "rowId": `${prefix}isadanalquran`
                                                                                }
                                                                                
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
                                          case 'isadanalquran':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi Orang Baik ${pushname}`,
                                                                description: `Isa Dan Alquran
 
Mungkin Anda baru tahu, tetapi Isa Al-Masih disebut 25 kali dalam Al-Quran; lebih sering daripada setiap orang lain di Al-Quran. Sedangkan, Nabi Islam hanya disebut 5 kali. Dalam Al-Quran Isa lahir suci, tidak pernah berdosa, melakukan banyak mukjizat seperti menyembuhkan orang sakit dan membangkitkan orang mati, serta diperkuat oleh Rohul Qudus. Isa juga diberi banyak gelar yang mulia seperti Kalimatullah, Al-Masih, serta Terkemuka di Dunia dan di Akhirat. Pelajarilah mengenai Isa Al-Masih dalam artikel-artikel Isa dan Al-Quran.`,
                                                                buttonText: "BACA LAINNYA",
                                                                footerText: `Isa Dan Alquran`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Artikel Terbaru Bot",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "Imam Muslim dari Irak Mendapatkan Jaminan Masuk Surga",
                                                                                    "description": "Mengapa kita lebih mudah percaya kepastian asuransi daripada kepastian surga?",
                                                                                    "rowId": `${prefix}isadanalquran1`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "Bagaimana Mukmin Dapat Menghindari Hukuman Tidak Berpuasa?",
                                                                                    "description": "Apa akibat jika umat Islam meninggalkan puasa? Apa hukuman tidak berpuasa?",
                                                                                    "rowId": `${prefix}isadanalquran2`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "Bagaimana Pengertian Muslimah NU Tentang Isa Al-Masih?",
                                                                                    "description": "Menurutnya, apakah Isa Al-Masih adalah Tuhan?",
                                                                                    "rowId": `${prefix}isadanalquran3`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
    case 'isadanalquran1': {
                client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/479e16ba4d6c6da9a6b87.jpg' }, caption: `*Hi, ${m.pushName}*\n “Mengapa kita lebih mudah percaya kepastian asuransi daripada kepastian surga?” Inilah pertanyaan seorang teman kepada Imam di Irak.\n\nPertanyaan ini membuat Imam Husain bergumul. Ia rindu masuk surga. Namun takut neraka karena banyak dosa dan ketidakpastian.\n\nMemang seluruh umat beragama pasti rindu masuk surga. Namun bagaimana caranya kita mendapatkan jaminan masuk surga?\n\nMari kita simak kisah nyata ini. Anda akan dapat melihat cara Allah untuk menolong Imam Husain mengatasi kebimbangannya.\n\nPercakapan Mengenai Surga dengan Imam Husain\n\nSatu saat Nafis datang mengunjungi Imam Husain. Ia adalah teman dan ingin bersilaturahmi. Imam Husain sendiri adalah imam senior yang sudah pensiun, sehingga memiliki waktu luang.\n\nPercakapan mereka berkembang ke arah pembicaraan mengenai surga. Nafis berkata: “Tentu kita sebagai manusia ingin mendapatkan surga. Namun apakah Anda bisa yakin akan jaminan masuk surga?”\n\nImam Husain menjawab tegas:\n\n“Memang semua manusia menginginkannya. Namun tidak ada manusia yang bisa yakin.”\n\nImam Husain sendiri telah paham ajaran agama. Ia telah berkali-kali mempelajarinya.\nKonsep Jaminan Masuk Surga Menurut Al-Quran dan Hadits\n.Ajaran Islam menyatakan Allah menyediakan surga bagi umat-Nya. Akan tetapi surga hanya untuk hamba-Nya yang taat dan beramal saleh. Imam Husain menyelidiki ayat-ayat berikut:“Dan barang siapa datang kepada Tuhannya dalam keadaan beriman, lagi sungguh-sungguh telah beramal saleh, maka mereka itulah orang-orang yang memperoleh tempat-tempat yang tinggi (mulia), (yaitu) surga . . . Dan itu adalah balasan bagi orang yang bersih (dari kekafiran dan kemaksiatan)” (Qs 20:75-76).Memang ada jaminan masuk surga dalam Hadits. Namun disertai banyak prasyarat. “Jaminlah enam hal untukku dari diri kalian, saya akan menjamin surga untuk kalian; jujurlah jika berbicara, tepatilah jika kalian berjanji, tunaikanlah amanat jika kalian serahi amanat, jagalah kemaluan kalian, tundukkan pandangan kalian dan tahanlah tangan kalian” (HR-Ahmad 21695).Masalahnya, mampukah manusia menjamin semua tingkah lakunya benar? Sanggupkah Anda seumur hidup menjaga perkataan, tindakan dan pandangan dengan sempurna? Selain itu bahkan tidak ada jaminan Allah akan menerima amalan baik manusia. “Allah tidak menerima amalan kecuali jika dilakukan dengan ikhlas (kecuali yang murni)” (Hadits Nasa’I 3089).Karena semua inilah tidak ada jaminan masuk surga bagi Mukmin. Tidak ada manusia yang mampu hidup tanpa dosa. “Dan tidak ada seorang pun dari padamu, melainkan mendatangi neraka itu. Hal itu bagi Tuhanmu adalah suatu kemestian yang sudah ditetapkan” (Qs 19:71).Inilah yang menjadi pergumulan Imam Husain. Ia paham isi Al-Quran dan Hadits. Namun ia juga sadar akan berbagai dosa yang ia lakukan.Pertanyaan yang Mengubah Kehidupan Imam Husain Nafis melanjutkan percakapan. Ia bertanya: “Apakah Anda memiliki asuransi kendaraan?” Imam Husain terkejut dengan pertanyaan ini. Ia berpikir apa hubungannya tiba-tiba menanyakan asuransi. Ia menjawab singkat: “Saya memilikinya.”Nafis berkata: “Jika sewaktu-waktu terjadi kecelakaan, apakah Anda yakin asuransi akan menolong Anda?” Imam Husain menjawab dengan yakin: “Pasti akan tertolong! Saya memiliki asuransi yang terpercaya.”Nafis tersenyum dan berkata dengan lembut: “Mohon maaf sebelumnya. Namun bukankah menarik jika kita bisa percaya kepada kepastian asuransi lebih daripada kepastian surga?” Imam Husain menjadi terdiam dengan pertanyaan ini.Memang ajaran Islam selama ini mengajarkan kepastian surga ada pada sisi Allah. Manusia tidak tahu akan mendapat surga atau tidak. Tugas manusia adalah beribadah dan berusaha hidup soleh. Selebihnya berserah pada Allah saja.Pertanyaan ini membuka pikiran Imam Husain untuk mencari jaminan masuk surga. Ia rindu mendapat kepastian nanti di akhirat.` }, { quoted: m })
            }
break
    case 'isadanalquran2': {
                client.sendMessage(m.chat, { image: { url: 'https://www.isadanalquran.com/wp-content/uploads/2022/03/matahari-hijau-di-atas-masjid.jpg' }, caption: `*Hi, ${m.pushName}*\n Apa akibat jika umat Islam meninggalkan puasa? Apa hukuman tidak berpuasa? Ini adalah pertanyaan dalam benak Bayu. Ia berasal dari keluarga yang sangat taat agama. Sejak kecil Bayu telah mengetahui bahwa puasa adalah wajib bagi Mukmin.Namun setelah dewasa ada beberapa kali ia melanggar puasa. Ia tidak mampu memenuhi semua jatah puasa. Karena itu Bayu takut akan hukuman yang menimpanya.Mari kita lihat pendalaman Bayu mengenai hukuman tidak berpuasa. Kita akan mempelajari bagaimana sebenarnya inti ibadah sejati kepada Allah. Agar bisa mendapatkan kasih-Nya hingga nanti masuk surga.Masa Kecil Bayu yang Sangat Taat Beragama, Namun Akhirnya Takut Orang tua Bayu mendidiknya dengan keras. Ia wajib belajar agama dan mengikuti semua peraturannya. Bayu bertumbuh menjadi anak yang sangat taat kepada agama. Ia rajin beribadah, termasuk  berpuasa saat Ramadhan.Ia melakukannya karena ingin mendapatkan pahala puasa. “Puasa adalah milik-Ku, dan Aku sendirilah yang mengganjarinya, . . . Puasa adalah perisai, . . . Dan sungguh, bau mulut orang yang berpuasa jauh lebih wangi di sisi Allah daripada bau minyak kesturi” (Hadits Bukhari 6938).Namun Bayu melakukan semua ini dengan hati penuh kesombongan. Ia sering menghina temannya yang tidak taat agama.Contohnya pernah saat bulan Ramadan, ada teman yang tidak puasa. Bayu memarahi dan menghinanya. Ia menyuruh temannya berpuasa dengan sikap kasar. Hal ini terbawa sampai ia dewasa.Namun saat merantau, Bayu mendapati kondisi yang berbeda. Ia tinggal di luar lingkungan keluarga. Ia bertemu dengan teman dari berbagai latar-belakang berbeda.Saat itu beberapa kali Bayu tidak puasa. Awalnya hanya sesekali terlewat, namun makin lama main sulit memenuhi semua tuntutan agama. Lingkungan yang berbeda telah mempengaruhi kebiasaan Bayu.Satu saat ia menyadari kondisinya dan merasa bersalah. Bayu menjadi sangat takut akan hukuman yang akan menimpanya.Hukuman Tidak Berpuasa dalam Pandangan Agama Menakuti Kita Bayu belajar dari artikel dan bertanya kepada guru agama. Ia ingin tahu apa saja dampak bila tidak bisa menunaikan puasa.Pertama, ia menemukan ada Hadits yang banyak dikutip mengenai hukuman tidak berpuasa.“Tatkala saya sedang tidur, ada dua orang yang mendatangiku, . . . lalu keduanya membawaku ke sebuah gunung yang tandus. . . . saya melihat suatu kaum, yang mana mereka tergantung dengan daging urat kakinya, mulut mereka robek dan dari mulut mereka bercucuran darah. Maka aku berkata: Siapakah mereka ini? Ia berkata: Mereka adalah orang-orang yang berbuka (puasa) sebelum tiba waktunya.” (As-Silsilah Ash-Shahihah 3951, Dishahihkan oleh al-Albani dalam shahih at-Targhib no. 1005).Hadits ini sangat menakutkan. Betapa mengerikan hukuman tidak berpuasa. Ada penderitaan besar menantinya.Selanjutnya, guru agama memberitahu bahwa tidak semua puasa diterima Allah. Bisa saja Allah tidak berkenan dengan ibadah manusia.\n` }, { quoted: m })
            }
break
    case 'isadanalquran3': {
                client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/e37f5918d494f02ada57d.jpg' }, caption: `*Hi, ${m.pushName}*\n (Kami Staff IDI berterimahkasih kepada seorang Muslimah NU, Aisha Nurramdhani, yang sudah berusaha untuk meningkatkan pengertian kaum seagamanya agar kita dapat saling mengerti. Khususnya tentang pengertian Isa Al-Masih bagi para Mukmin) Ada banyak wanita Muslim Menerima Isa Al-Masih karena mengenalnya dengan benar. Seperti Muslimah NU ini memiliki pemahaman yang dalam soal Isa Al-Masih bagi para Mukmin. Menurutnya, apakah Isa Al-Masih adalah Tuhan? Paparannya itu bermanfaat bagi iman kita. Muslimah NU ini memiliki pemahaman soal Isa Al-Masih bagi para Mukmin yang dalam. Menurutnya, apakah Isa Al-Masih adalah Tuhan? Paparannya itu bermanfaat bagi iman kita.Muslimah NU Prihatin akan Salah Paham Soal Isa Al-Masih Muslimah NU Aisha Nurramdhani melihat banyak kaum Muslim yang masih salah pengertian tentang Isa Al-Masih menurut Kristen. Bahkan tokoh sebesar Habib Rizieq masih salah paham soal Isa Al-Masih.Karena itulah ia memberikan cara jitu bagi kaum Muslim agar mengenal Isa dengan benar. Ia juga memaparkan pemahamannya soal Isa Al-Masih.Nasihat Bijak Muslimah NU “Pengertian Isa Al-Masih yang Benar” Kepada kaum Muslim, Muslimah NU ini memberikan saran bijaksana agar para Muslim menerima Isa Al-Masih. “Pertama–tama kita harus mengerti terlebih dahulu posisi Yesus [Isa Al-Masih] di mata Kristiani. Ya, lepas dahulu kaca mata Islam kita yang penuh dengan doktrin dan ayat-ayat Quran tentang nabi Isa, agar dapat melihat dengan jelas perspektif  Kristiani terhadap Yesus [Isa Al-Masih].  (Lepasin perspektif Islamnya, bukan lepasin agama Islamnya yach!)” Penjelasan Muslimah NU: Soal Pengertian Hakekat Isa Al-Masih“Bagi umat Kristen, Yesus [Isa Al-Masih] adalah Tuhan yang berinkarnasi (= menjelma) menjadi manusia. Bukan manusia yang diangkat menjadi Tuhan seperti yang selama ini disalah pahami umat Muslim.” Terang Aisha Nurramdhani.“Hal ini bukan tanpa dasar. Mereka melihat banyaknya nubuatan mengenai kedatangan Mesias, Sang Pembebas, Tuhan yang mengambil rupa manusia ini dari kitab Taurat (juga Zabur dan Kitab Para Nabi) . . .” tegasnya.\n` }, { quoted: m })
            }
            break
                                          case 'tutobot':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi  ${pushname}`,
                                                                description: `Tata cara penggunaan bot
 
CARA PENGGUNAAN BOT\n\nUntuk menggunakan bot ketik perintah yang sesuai dengan menu (kalau mau liat menu silahkan ketik "allmenu") Saat menggunakan bot, mohon tidak melakukan spam, menghindari bot slow respon dan error, Jika bot tidak merespon command anda, mohon ulangi perintah anda, pastikan tidak typo atau salah ketik *JIKA BOT TIDAK MERESPON SAMA SEKALI MOHON SEGERA HUBUNGI OWNER*\n\nCONTACT OWNER\nhttps://wa.me/6282296959969.`,
                                                                buttonText: "PERTANYAAN",
                                                                footerText: `Isa Dan Alquran`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Pertanyaan pertanyaan Umum",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "Apa itu query?",
                                                                                    "description": "Penjelasan tentang query",
                                                                                    "rowId": `${prefix}jelaskan1`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "Apa itu Usage?",
                                                                                    "description": "Penjelasan tentang usage",
                                                                                    "rowId": `${prefix}jelaskan2`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "TANYA LANGSUNG SAMA OWNER",
                                                                                    "description": "Hubungi owner",
                                                                                    "rowId": `${prefix}owner`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
    case 'jelaskan1': {
                client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/066a38926aaff19445723.jpg' }, caption: `*Hi, ${m.pushName}*\n Yang di maksud query adalah tujuan dari pencarian kita, Contohnya Jika kamu ingin mencari foto pinterest, Yang kamu ketik di kolom pencarian, itulah yg dimaksud query` }, { quoted: m })
            }
break
    case 'jelaskan2': {
                client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/066a38926aaff19445723.jpg' }, caption: `*Hi, ${m.pushName}*\n Yang Di Maksud Usage ada cara penggunaan, Sebagai contohnya Kamu mengetik tiktoknowm tanpa link tiktok otomatis bot akan mengirim hal yang di butuhkan\n` }, { quoted: m })
            }
break

                                          case 'mainmenu':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi ${pushname}`,
                                                                description: `├───[  M A I N  ]────
 
 •> Library : Baileys - Multi Device
 •> Runtime : ${runtime(process.uptime())}
 
➤ ${prefix}ping
➤ ${prefix}owner
➤ ${prefix}menu / ${prefix}help / ${prefix}?
➤ ${prefix}delete
➤ ${prefix}infochat
➤ ${prefix}quoted
➤ ${prefix}listpc
➤ ${prefix}listgc
➤ ${prefix}listonline
➤ ${prefix}chatowner
➤ ${prefix}privatechat
➤ ${prefix}rules
➤ ${prefix}speedtest
 
 ╰───[ A Y A K A - B O T   ]───`,
                                                                buttonText: "CLICK HERE",
                                                                footerText: `Ayaka BOT Multi Device 🤖 Version : 2.0.1`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Fitur Bot",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "⚡PING⚡",
                                                                                    "description": "Speed Bot",
                                                                                    "rowId": `${prefix}ping`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "📱CARI TEMAN ONLINE📱",
                                                                                    "description": "INI UNTUK CARI TEMAN",
                                                                                    "rowId": `${prefix}anonymousmenu`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
                                          case 'searchmenu':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi ${pushname}`,
                                                                description: `├───[  SEARCH  ]────
 
  •> Library : Baileys - Multi Device
 •> Runtime : ${runtime(process.uptime())}
 
➤ ${prefix}google [query]
➤ ${prefix}gimage [query]
➤ ${prefix}pinterest [query]
➤ ${prefix}wallpaper [query]
➤ ${prefix}wikimedia [query]
➤ ${prefix}ytsearch [query]
➤ ${prefix}ringtone [query]
➤ ${prefix}brainly [query]
➤ ${prefix}wikipedia [query]
➤ ${prefix}linkwa [query]
➤ ${prefix}lirik [query]
➤ ${prefix}chord [query]
➤ ${prefix}cuaca [query]
➤ ${prefix}spekhp [query]
➤ ${prefix}jadwaltv [query]
➤ ${prefix}covid [query]
➤ ${prefix}cogan
➤ ${prefix}cecan
 
 ╰───[ A Y A K A - B O T   ]───`,
                                                                buttonText: "CLICK HERE",
                                                                footerText: `Ayaka BOT Multi Device 🤖 Version : 2.0.1`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Fitur Bot",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "⚡PING⚡",
                                                                                    "description": "Speed Bot",
                                                                                    "rowId": `${prefix}ping`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "BACK TO MENU▶️",
                                                                                    "description": "Kembali Ke Menu Bot",
                                                                                    "rowId": `${prefix}menu`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
                                          case 'convertmenu':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi ${pushname}`,
                                                                description: `├───[  CONVERT  ]────
 
  •> Library : Baileys - Multi Device
 •> Runtime : ${runtime(process.uptime())}
 
➤ ${prefix}toimage
➤ ${prefix}sticker
➤ ${prefix}tovideo
➤ ${prefix}togif
➤ ${prefix}tourl
➤ ${prefix}tovn
➤ ${prefix}tomp3
➤ ${prefix}toaudio
➤ ${prefix}ebinary
➤ ${prefix}dbinary
➤ ${prefix}styletext
 
 ╰───[ A Y A K A - B O T   ]───`,
                                                                buttonText: "CLICK HERE",
                                                                footerText: `AyakaBOT Multi Device 🤖 Version : 2.0.1`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Fitur Bot",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "⚡PING⚡",
                                                                                    "description": "Speed Bot",
                                                                                    "rowId": `${prefix}ping`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "BACK TO MENU▶️",
                                                                                    "description": "Kembali Ke Menu Bot",
                                                                                    "rowId": `${prefix}menu`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
                                          case 'groupmenu':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi ${pushname}`,
                                                                description: `├───[  GROUP MENU  ]────
 
  •> Library : Baileys - Multi Device
 •> Runtime : ${runtime(process.uptime())}
 
➤ ${prefix}linkgroup
➤ ${prefix}ephemeral [option]
➤ ${prefix}setppgc [image]
➤ ${prefix}setname [text]
➤ ${prefix}setdesc [text]
➤ ${prefix}group [option]
➤ ${prefix}editinfo [option]
➤ ${prefix}add @user
➤ ${prefix}kick @user
➤ ${prefix}hidetag [text]
➤ ${prefix}tagall [text]
➤ ${prefix}antilink [on/off]
➤ ${prefix}mute [on/off]
➤ ${prefix}promote @user
➤ ${prefix}demote @user
➤ ${prefix}vote [text]
➤ ${prefix}devote
➤ ${prefix}upvote
➤ ${prefix}cekvote
➤ ${prefix}hapusvote
 
 ╰───[ A Y A K A - B O T   ]───`,
                                                                buttonText: "CLICK HERE",
                                                                footerText: `Ayaka Multi Device 🤖 Version : 2.0.1`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Fitur Bot",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "⚡PING⚡",
                                                                                    "description": "Speed Bot",
                                                                                    "rowId": `${prefix}ping`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "BACK TO MENU▶️",
                                                                                    "description": "Kembali Ke Menu Bot",
                                                                                    "rowId": `${prefix}menu`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
                                          case 'quotesmenu':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi ${pushname}`,
                                                                description: `├───[   QUOTES MENU  ]────
 
  •> Library : Baileys - Multi Device
 •> Runtime : ${runtime(process.uptime())}
 
➤ ${prefix}quotesanime
➤ ${prefix}quotesnasehat
➤ ${prefix}quotesislami
➤ ${prefix}quotesmotivasi
➤ ${prefix}quoteskehidupan
➤ ${prefix}renungan
 
 ╰───[ A Y A K A - B O T   ]───`,
                                                                buttonText: "CLICK HERE",
                                                                footerText: `Ayaka Multi Device 🤖 Version : 2.0.1`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Fitur Bot",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "⚡PING⚡",
                                                                                    "description": "Speed Bot",
                                                                                    "rowId": `${prefix}ping`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "BACK TO MENU▶️",
                                                                                    "description": "Kembali Ke Menu Bot",
                                                                                    "rowId": `${prefix}menu`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
                                          case 'islamimenu':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi ${pushname}`,
                                                                description: `├───[   ISLAMIC MENU  ]────

  •> Library : Baileys - Multi Device
 •> Runtime : ${runtime(process.uptime())}
 
➤ ${prefix}iqra
➤ ${prefix}hadist
➤ ${prefix}alquran
➤ ${prefix}juzamma
➤ ${prefix}tafsirsurah
➤ ${prefix}randomquran
➤ ${prefix}kisahnabi
➤ ${prefix}jadwalsholat
 
 ╰───[ A Y A K A - B O T   ]───`,
                                                                buttonText: "CLICK HERE",
                                                                footerText: `Ayaka Multi Device 🤖 Version : 2.0.1`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Fitur Bot",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "⚡PING⚡",
                                                                                    "description": "Speed Bot",
                                                                                    "rowId": `${prefix}ping`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "BACK TO MENU▶️",
                                                                                    "description": "Kembali Ke Menu Bot",
                                                                                    "rowId": `${prefix}menu`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
                                          case 'toolsmenu':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi ${pushname}`,
                                                                description: `├───[   TOOLS MENU  ]────
 
  •> Library : Baileys - Multi Device
 •> Runtime : ${runtime(process.uptime())}
 
➤ ${prefix}removebg
➤ ${prefix}emojimix 😇+😎
➤ ${prefix}emojimix2 😎
➤ ${prefix}shortlink
➤ ${prefix}translate
➤ ${prefix}nulis
➤ ${prefix}nulis2
➤ ${prefix}ssweb
➤ ${prefix}infogempa
➤ ${prefix}colorize
➤ ${prefix}qrencode
➤ ${prefix}qrdecode
 
 ╰───[ A Y A K A - B O T   ]───`,
                                                                buttonText: "CLICK HERE",
                                                                footerText: `Ayaka Multi Device 🤖 Version : 2.0.1`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Fitur Bot",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "⚡PING⚡",
                                                                                    "description": "Speed Bot",
                                                                                    "rowId": `${prefix}ping`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "BACK TO MENU▶️",
                                                                                    "description": "Kembali Ke Menu Bot",
                                                                                    "rowId": `${prefix}menu`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
                                          case 'databasemenu':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi ${pushname}`,
                                                                description: `├───[   DATABASE MENU  ]────
 
  •> Library : Baileys - Multi Device
 •> Runtime : ${runtime(process.uptime())}
 
➤ ${prefix}setcmd
➤ ${prefix}listcmd
➤ ${prefix}delcmd
➤ ${prefix}lockcmd
➤ ${prefix}addmsg
➤ ${prefix}listmsg
➤ ${prefix}getmsg
➤ ${prefix}delmsg
 
 ╰───[ A Y A K A - B O T   ]───`,
                                                                buttonText: "CLICK HERE",
                                                                footerText: `Ayaka Multi Device 🤖 Version : 2.0.1`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Fitur Bot",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "⚡PING⚡",
                                                                                    "description": "Speed Bot",
                                                                                    "rowId": `${prefix}ping`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "BACK TO MENU▶️",
                                                                                    "description": "Kembali Ke Menu Bot",
                                                                                    "rowId": `${prefix}menu`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
                                          case 'gameshopee':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi Saya Shopee Bot`,
                                                                description: `Ketik "3" dan "4" untuk bermain:`,
                                                                buttonText: "DISINI",
                                                                footerText: `SHOPEE BOT`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Pilih Di Bawah ini",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "Bermain Shopee",
                                                                                    "description": "Mana Hp Idaman Kalian",
                                                                                    "rowId": `${prefix}shopee3`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "Tebak²an Shopee",
                                                                                    "description": "Ayo Main",
                                                                                    "rowId": `${prefix}shopee4`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
                                          case 'rate':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi Rate Menu`,
                                                                description: `Suka Tidak Dengan Saya Silakan Berikan Rate Terbaik Mu Di Bawah Ini`,
                                                                buttonText: "DISINI",
                                                                footerText: `Thanks You Support Me`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Pilih Di Bawah ini",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "Kasih Bintang 5",
                                                                                    "description": "⭐⭐⭐⭐⭐",
                                                                                    "rowId": `${prefix}menu`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "Kasih Bintang 4",
                                                                                    "description": "⭐⭐⭐⭐",
                                                                                    "rowId": `${prefix}menu`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "Kasih Bintang 3",
                                                                                    "description": "⭐⭐⭐",
                                                                                    "rowId": `${prefix}menu`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "Saran Dan Request",
                                                                                    "description": "Akan Menuju Ke Kontak Owner 🗿",
                                                                                    "rowId": `${prefix}owner`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
    case 'shopee3':{
                client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/ca192302dfc8c5544e250.jpg' }, caption: `*Hi, ${m.pushName}*\nPilih Salah 1 Hp Idaman Owner Ku Yang Benar Nanti Dapat Jatah Tium 2x Hehehe\n` }, { quoted: m })
            }
break
    case 'shopee4':{
                client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6ee905af7b05fb906a32e.jpg' }, caption: `*Hi, ${m.pushName}*\n Pilihlah Benda Yang Tepat Untuk Benda Di Pake Oleh Choki\n` }, { quoted: m })
            }
            break
                                          case 'shopee':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi Saya Shopee Bot`,
                                                                description: `Ketik "shopee1" atau "shopee2" untuk informasi selengkapnya:`,
                                                                buttonText: "DISINI",
                                                                footerText: `SHOPEE BOT`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Pilih Di Bawah ini",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "1. Belanja promo menarik ⚡",
                                                                                    "description": "Belanja promo menarik Di Shopee",
                                                                                    "rowId": `${prefix}shopee1`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "2. Saya ingin bertanya 💬",
                                                                                    "description": "Bertanya Dengan Shopee",
                                                                                    "rowId": `${prefix}shopee2`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "Bermain Game Shopee 🎮",
                                                                                    "description": "Tebak 1 Aja 🐔",
                                                                                    "rowId": `${prefix}gameshopee`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
    case 'shopee1':{
                client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/d62602cb7c5e5880bf66f.jpg' }, caption: `*Hi, ${m.pushName}*\n 1 (satu) Voucher Gratis Ongkir berlaku untuk maks. 5 (lima) pesanan berbeda dalam 1 (satu) kali checkout. Voucher berlaku untuk pemesanan dari toko yang sama maupun berbeda.Kamu dapat melihat beberapa ketentuan terkait promo gratis ongkir yang dapat kamu nikmati di halaman ini! 👉
https://shopee.co.id/article-2c\n` }, { quoted: m })
            }
break
    case 'shopee2':{
                client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/5fac1f5de75c44f7cb35a.jpg' }, caption: `*Hi, ${m.pushName}*\n Untuk checkout di Shopee, kamu bisa cari produk di kolom pencarian > masukan dulu produknya ke keranjang, nanti dikeranjang silakan pilih produk yang ingin dicheckout ya, voucher yang ingin digunakan (jika ada), kemudian klik checkout.Di halaman checkout kamu bisa lengkapi pilihan jasa kirim dan metode bayar.Lengkapnya ada di link ini ya 👉 https://shopee.co.id/article-1c\n` }, { quoted: m })
            }
            break
                                          
                                          case 'anonymousmenu':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi ${pushname}`,
                                                                description: `├───[   ANONYMOUS BETA  ]────
 
 ➥ ${prefix}stop
 ➥ ${prefix}next
 ➥ ${prefix}start
 ➥ ${prefix}anonymous
 
 ╰───[ A Y A K A - B O T   ]───`,
                                                                buttonText: "Anonymous Chat",
                                                                footerText: `Mulai Bermain Anonymous Chat`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Click Dan Pilih",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "👻BERMAIN👻",
                                                                                    "description": "Bermain",
                                                                                    "rowId": `${prefix}start`
                                                                                },
                                                                                
                                                                                {
                                                                                    
                                                                                    "title": "🗿BERHENTI🗿",
                                                                                    "description": "Berhenti",
                                                                                    "rowId": `${prefix}stop`
                                                                                },
                                                                                {
                                                                                
                                                                                    "title": "🤔SKIP🤔",
                                                                                    "description": "Cari Yang Lain",
                                                                                    "rowId": `${prefix}next`
                                                                                },
                                                                                {
                                                                                    
                                                                                    "title": "B A C K T O M E N U▶️",
                                                                                    "description": "Kembali Ke Menu 🤖",
                                                                                    "rowId": `${prefix}menu`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
break
                                          case 'animemenu':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi ${pushname}`,
                                                                description: `├───[   ANIME MENU  ]────
 
➤ ${prefix}lolivideo 
➤ ${prefix}waifu 
➤ ${prefix}neko 
➤ ${prefix}shinobu 
➤ ${prefix}megumin 
➤ ${prefix}awoo
➤ ${prefix}bully 
➤ ${prefix}cuddle 
➤ ${prefix}hug 
➤ ${prefix}kiss 
➤ ${prefix}lick 
➤ ${prefix}pat 
➤ ${prefix}bonk 
➤ ${prefix}smug 
➤ ${prefix}yeet 
➤ ${prefix}blush 
➤ ${prefix}smile 
➤ ${prefix}wave 
➤ ${prefix}highfive 
➤ ${prefix}handhold 
➤ ${prefix}nom 
➤ ${prefix}bite 
➤ ${prefix}glomp 
➤ ${prefix}slap
➤ ${prefix}kill 
➤ ${prefix}happy
➤ ${prefix}wink 
➤ ${prefix}poke 
➤ ${prefix}dance 
➤ ${prefix}cringe
➤ ${prefix}storyanime
 
 ╰───[ A Y A K A - B O T   ]───`,
                                                                buttonText: "OTHER",
                                                                footerText: `Menu Lain Di Bot Ini`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                            "title": "Click Dan Pilih",
                                                                            "rows": [
                                                                                {
                                                                                    "title": "🔥MAKER MENU🔥",
                                                                                    "description": "Editor Foto Dan Video",
                                                                                    "rowId": `${prefix}makermenu`
                                                                                },
                                                                                
                                                                                {
                                                                                
                                                                                    "title": ",🌹DONASI🌹",
                                                                                    "description": "Hanya Menu Orang Baik 🗿",
                                                                                    "rowId": `${prefix}donasi`
                                                                                },
                                                                                {
                                                                                    
                                                                                    "title": "B A C K T O M E N U ▶️",
                                                                                    "description": "Kembali Ke Menu 🤖",
                                                                                    "rowId": `${prefix}menu`
                                                                                }
                                                                            ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        client.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
                                                        break
case 'simple' : case 'simplemenu': case 'menusimple': case 'sm': {
if (jam >= 5 && jam <= 9) {
ucapan = 'Selamat Pagi!⛅\nTerima Kasih Atas Kunjungan Anda'
} else if (jam >= 10 && jam <= 14) {
ucapan = 'Selamat Siang!☀️\nTerima Kasih Atas Kunjungan Anda'
} else if (jam >= 15 && jam <= 17) {
ucapan = 'Selamat Sore!🌄\nTerima Kasih Atas Kunjungan Anda'
} else if (jam >= 18 && jam <= 20) {
ucapan = 'Selamat Petang!🌕\nTerima Kasih Atas Kunjungan Anda'
} else if (jam >= 21 && jam <= 23) {
ucapan = 'Selamat Malam!🌘\nTerima Kasih Atas Kunjungan Anda'
} else {
ucapan = 'Sudah larut malam, Jangan lupa istirahat!😴'
} 
countDownDate = new Date(`${global.tanggal},00:00:00`).getTime();
now = new Date().getTime();
distance = countDownDate - now;
days = Math.floor(distance / (1000 * 60 * 60 * 24));
if (distance < 0) {
times = ("Terlewat");
} else {
times = (days + " Hari Lagi Menuju " + global.acara);
}
locale = 'id'
d = new Date(new Date + 3600000)
week = d.toLocaleDateString(locale, {
weekday: 'long'
})
date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
wib = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
let anu = `🔥S I M P L E M E N U🔥

${ucapan}

📢  *INFO*  📢
📍 *Bot Name* : *${global.botname}*
📍 *Jam* : *${wib}*
📍 *Tanggal* : *${week}, ${date}*
📍 *Tanggal Islam* : *${dateIslamic}*
📍 *Aktif* : *${runtime(process.uptime())}*
📍 *Prefix* : 「  *MULTI*  」
📍 *Nama* : *${pushname}*
📍 *${times}*

Baca rules bot dahulu sebelum menggunakan fitur-fitur bot agar tidak terbanned dengan cara ketik *${prefix}rules*

Ada keperluan dengan owner bot?
ketik *${prefix}chatowner* pesan kamu atau ketik *${prefix}owner* untuk mengetahui kontak owner`
let btn = [{
urlButton: {
displayText: 'S C R I P T',
url: global.sourceurl
}
}, {
callButton: {
displayText: 'O W N E R',
phoneNumber: global.phone
}
}, {
quickReplyButton: {
displayText: '⚙️ T A M P I L K A N S E M U A ⚙️',
id: `${prefix}allmenu`
}
}, {
quickReplyButton: {
displayText: '🎮 B E R M A I N G A M E 🎮',
id: `${prefix}gamemenu`
}  
}, {
quickReplyButton: {
displayText: '💸 S E W A B O T 💸',
id: 'sewabot'
}
}]
client.sendButImg(m.chat, anu, client.user.name, global.thumb, btn)
}
break
case 'payment' : case 'bayarorder': {
if (jam >= 5 && jam <= 9) {
ucapan = 'Selamat Pagi!⛅\nTerima Kasih Atas Kunjungan Anda'
} else if (jam >= 10 && jam <= 14) {
ucapan = 'Selamat Siang!☀️\nTerima Kasih Atas Kunjungan Anda'
} else if (jam >= 15 && jam <= 17) {
ucapan = 'Selamat Sore!🌄\nTerima Kasih Atas Kunjungan Anda'
} else if (jam >= 18 && jam <= 20) {
ucapan = 'Selamat Petang!🌕\nTerima Kasih Atas Kunjungan Anda'
} else if (jam >= 21 && jam <= 23) {
ucapan = 'Selamat Malam!🌘\nTerima Kasih Atas Kunjungan Anda'
} else {
ucapan = 'Sudah larut malam, Jangan lupa istirahat!😴'
} 
countDownDate = new Date(`${global.tanggal},00:00:00`).getTime();
now = new Date().getTime();
distance = countDownDate - now;
days = Math.floor(distance / (1000 * 60 * 60 * 24));
if (distance < 0) {
times = ("Terlewat");
} else {
times = (days + " Hari Lagi Menuju " + global.acara);
}
locale = 'id'
d = new Date(new Date + 3600000)
week = d.toLocaleDateString(locale, {
weekday: 'long'
})
date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
wib = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
let anu = `🔥P A Y M E N T🔥

${ucapan}

📢  *INFO*  📢
📍 *Bot Name* : *${global.botname}*
📍 *Jam* : *${wib}*
📍 *Tanggal* : *${week}, ${date}*
📍 *Tanggal Islam* : *${dateIslamic}*
📍 *Aktif* : *${runtime(process.uptime())}*
📍 *Prefix* : 「  *MULTI*  」
📍 *Nama* : *${pushname}*
📍 *${times}*

*E-WALLET* ☑️
💳 *DANA*
➤ Ahmad        =  \`\`\`082296959969\`\`\`
➤ Ahmad      =  \`\`\`082296959969\`\`\`
💳 *GOPAY*
➤ Ahmad        =  \`\`\`082296959969\`\`\`
💳 *OVO*
➤ Ahmad        =  \`\`\`BELUM TERSEDIA SAAT INI\`\`\`
➤ Ahmad      =  \`\`\`BELUM TERSEDIA SAAT INI\`\`\`
💳 *SHOPEEPAY*
➤ Ahmad           =  \`\`\`085290572120\`\`\`
━━━━━━━━━━━━━━━━━━
*ATM* ☑️
🏦 BCA
➤ Tanya Owner Dulu
━━━━━━━━━━━━━━━━━━
⛔️ *JANGAN SAMPAI SALAH INPUT!!! JIKA TERJADI KESALAHAN TRANSAKSI SELAIN NO TUJUAN DIATAS, MAKA 100% BUKAN TANGGUNG JAWAB ADMIN (HANGUS).*`
let btn = [{
urlButton: {
displayText: 'S C R I P T',
url: global.sourceurl
}
}, {
callButton: {
displayText: 'O W N E R',
phoneNumber: global.phone
}
}, {
quickReplyButton: {
displayText: '🤑 S T O R E M E N U 🤑',
id: `${prefix}menu`
}
}, {
quickReplyButton: {
displayText: '🤖 R U L E S 🤖',
id: `${prefix}rulesbot`
}  
}, {
quickReplyButton: {
displayText: '💸 S E W A B O T 💸',
id: 'sewabot'
}
}]
client.sendButImg(m.chat, anu, client.user.name, global.thumb, btn)
}
break
case 'rulesbot' : case 'peraturaan': {
if (jam >= 5 && jam <= 9) {
ucapan = 'Selamat Pagi!⛅\nTerima Kasih Atas Kunjungan Anda'
} else if (jam >= 10 && jam <= 14) {
ucapan = 'Selamat Siang!☀️\nTerima Kasih Atas Kunjungan Anda'
} else if (jam >= 15 && jam <= 17) {
ucapan = 'Selamat Sore!🌄\nTerima Kasih Atas Kunjungan Anda'
} else if (jam >= 18 && jam <= 20) {
ucapan = 'Selamat Petang!🌕\nTerima Kasih Atas Kunjungan Anda'
} else if (jam >= 21 && jam <= 23) {
ucapan = 'Selamat Malam!🌘\nTerima Kasih Atas Kunjungan Anda'
} else {
ucapan = 'Sudah larut malam, Jangan lupa istirahat!😴'
} 
countDownDate = new Date(`${global.tanggal},00:00:00`).getTime();
now = new Date().getTime();
distance = countDownDate - now;
days = Math.floor(distance / (1000 * 60 * 60 * 24));
if (distance < 0) {
times = ("Terlewat");
} else {
times = (days + " Hari Lagi Menuju " + global.acara);
}
locale = 'id'
d = new Date(new Date + 3600000)
week = d.toLocaleDateString(locale, {
weekday: 'long'
})
date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
wib = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
let anu = `🔥R U L E S T H E B O T🔥

${ucapan}

📢  *INFO*  📢
📍 *Bot Name* : *${global.botname}*
📍 *Jam* : *${wib}*
📍 *Tanggal* : *${week}, ${date}*
📍 *Tanggal Islam* : *${dateIslamic}*
📍 *Aktif* : *${runtime(process.uptime())}*
📍 *Prefix* : 「  *MULTI*  」
📍 *Nama* : *${pushname}*
📍 *${times}*

Selamat datang di menu panduan BOT. di menu ini kalian bisa mendapatkan panduan soal bot whatsapp.\nowner\n- Owner atau Pemilik Bot adalah orang yang membuat bot. OWNER BUKANLAH BOT. chat owner apabila ada kepentingan atau ada yang perlu di tanyakan soal bot whatsapp,\n- Penjelasan OWNER/PEMILIK BOT\n\nhow\n- Cara menggunakan bot adalah dengan mengetikkan command bot. List command bot ada pada menu bot. jangan lupa, untuk mengakses command harus menggunakan prefix.\nPrefix AnimeWibu Bot adalah all prefix.\nContoh penggunaan prefix dan command yang benar: *.menu*\n- Cara menggunakan bot dan prefix\n\nberlangganan\n- Layanan berlangganan AnimeWibu Bot adalah dengan menyewa bot dalam jumlah waktu ke dalam group. Untuk list harga/layanan silahkan baca pada *.sewa*\n- Berlangganan\n        \nbot\n- Bot adalah sebuah program komputer yang dijalankan di lingkungan. Bot Whatsapp adalah program komputer yang di-aplikasikan di whatsapp. Bot whatsapp diharapkan dapat membantu beberapa aktifitas maupun sekedar untuk senang senang.\n- Apa itu bot whatsapp\n\n\nPenggunaan: .join <linkgrub>\ncontoh: .sewabot

Ada keperluan dengan owner bot?
ketik *${prefix}chatowner* pesan kamu atau ketik *${prefix}owner* untuk mengetahui kontak owner`
let btn = [{
urlButton: {
displayText: 'S C R I P T',
url: global.sourceurl
}
}, {
callButton: {
displayText: 'O W N E R',
phoneNumber: global.phone
}
}, {
quickReplyButton: {
displayText: '⚙️ T A M P I L K A N S E M U A ⚙️',
id: `${prefix}allmenu`
}
}, {
quickReplyButton: {
displayText: '🎮 B E R M A I N G A M E 🎮',
id: `${prefix}gamemenu`
}  
}, {
quickReplyButton: {
displayText: '💸 S E W A B O T 💸',
id: 'sewabot'
}
}]
client.sendButImg(m.chat, anu, client.user.name, global.thumb, btn)
}
break
case 'allmenu' : case 'semuamenu': {
if (jam >= 5 && jam <= 9) {
ucapan = 'Selamat Pagi!⛅\nTerima Kasih Atas Donasinya'
} else if (jam >= 10 && jam <= 14) {
ucapan = 'Selamat Siang!☀️\nTerima Kasih Atas Donasinya'
} else if (jam >= 15 && jam <= 17) {
ucapan = 'Selamat Sore!🌄\nTerima Kasih Atas Donasinya'
} else if (jam >= 18 && jam <= 20) {
ucapan = 'Selamat Petang!🌕\nTerima Kasih Atas Donasinya'
} else if (jam >= 21 && jam <= 23) {
ucapan = 'Selamat Malam!🌘\nTerima Kasih Atas Donasinya'
} else {
ucapan = 'Sudah larut malam, Jangan lupa istirahat!😴'
} 
countDownDate = new Date(`${global.tanggal},00:00:00`).getTime();
now = new Date().getTime();
distance = countDownDate - now;
days = Math.floor(distance / (1000 * 60 * 60 * 24));
if (distance < 0) {
times = ("Terlewat");
} else {
times = (days + " Hari Lagi Menuju " + global.acara);
}
locale = 'id'
d = new Date(new Date + 3600000)
week = d.toLocaleDateString(locale, {
weekday: 'long'
})
date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
wib = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
let anu = `🔥A L L M E N U🔥

${ucapan}

📢  *INFO*  📢
📍 *Bot Name* : *${global.botname}*
📍 *Jam* : *${wib}*
📍 *Tanggal* : *${week}, ${date}*
📍 *Tanggal Islam* : *${dateIslamic}*
📍 *Aktif* : *${runtime(process.uptime())}*
📍 *Prefix* : 「  *MULTI*  」
📍 *Nama* : *${pushname}*
📍 *${times}*

Baca rules bot dahulu sebelum menggunakan fitur-fitur bot agar tidak terbanned dengan cara ketik *${prefix}rules*

Ada keperluan dengan owner bot?
ketik *${prefix}chatowner* pesan kamu atau ketik *${prefix}owner* untuk mengetahui kontak owner

*MENU*:

Main:
➤ ${prefix}ping
➤ ${prefix}owner
➤ ${prefix}menu / ${prefix}help / ${prefix}?
➤ ${prefix}delete
➤ ${prefix}infochat
➤ ${prefix}quoted
➤ ${prefix}listpc
➤ ${prefix}listgc
➤ ${prefix}listonline
➤ ${prefix}chatowner
➤ ${prefix}privatechat
➤ ${prefix}rules
➤ ${prefix}speedtest

Download:
➤ ${prefix}play
➤ ${prefix}ytmp3
➤ ${prefix}ytmp4
➤ ${prefix}tik
➤ ${prefix}ig
➤ ${prefix}umma
➤ ${prefix}fbdl (beta)
➤ ${prefix}twitter

Search:
➤ ${prefix}google [query]
➤ ${prefix}gimage [query]
➤ ${prefix}pinterest [query]
➤ ${prefix}wallpaper [query]
➤ ${prefix}wikimedia [query]
➤ ${prefix}ytsearch [query]
➤ ${prefix}ringtone [query]
➤ ${prefix}brainly [query]
➤ ${prefix}wikipedia [query]
➤ ${prefix}linkwa [query]
➤ ${prefix}lirik [query]
➤ ${prefix}chord [query]
➤ ${prefix}cuaca [query]
➤ ${prefix}spekhp [query]
➤ ${prefix}jadwaltv [query]
➤ ${prefix}covid [query]
➤ ${prefix}cogan
➤ ${prefix}cecan

Voice Changer:
➤ ${prefix}bass
➤ ${prefix}blown
➤ ${prefix}deep
➤ ${prefix}earrape
➤ ${prefix}fast
➤ ${prefix}fat
➤ ${prefix}nightcore
➤ ${prefix}reverse
➤ ${prefix}robot
➤ ${prefix}slow
➤ ${prefix}tupai
 
Convert:
➤ ${prefix}toimage
➤ ${prefix}sticker
➤ ${prefix}tovideo
➤ ${prefix}togif
➤ ${prefix}tourl
➤ ${prefix}tovn
➤ ${prefix}tomp3
➤ ${prefix}toaudio
➤ ${prefix}ebinary
➤ ${prefix}dbinary
➤ ${prefix}styletext

Group:
➤ ${prefix}linkgroup
➤ ${prefix}ephemeral [option]
➤ ${prefix}setppgc [image]
➤ ${prefix}setname [text]
➤ ${prefix}setdesc [text]
➤ ${prefix}group [option]
➤ ${prefix}editinfo [option]
➤ ${prefix}add @user
➤ ${prefix}kick @user
➤ ${prefix}hidetag [text]
➤ ${prefix}tagall [text]
➤ ${prefix}antilink [on/off]
➤ ${prefix}mute [on/off]
➤ ${prefix}promote @user
➤ ${prefix}demote @user
➤ ${prefix}vote [text]
➤ ${prefix}devote
➤ ${prefix}upvote
➤ ${prefix}cekvote
➤ ${prefix}hapusvote

Quotes:
➤ ${prefix}quotesanime
➤ ${prefix}quotesnasehat
➤ ${prefix}quotesislami
➤ ${prefix}quotesmotivasi
➤ ${prefix}quoteskehidupan
➤ ${prefix}renungan

Islamic:
➤ ${prefix}iqra
➤ ${prefix}hadist
➤ ${prefix}alquran
➤ ${prefix}juzamma
➤ ${prefix}tafsirsurah
➤ ${prefix}randomquran
➤ ${prefix}kisahnabi
➤ ${prefix}jadwalsholat

Anonymous:
➤ ${prefix}anonymous
➤ ${prefix}start
➤ ${prefix}next
➤ ${prefix}keluar
➤ ${prefix}sendkontak

Tools:
➤ ${prefix}removebg
➤ ${prefix}emojimix
➤ ${prefix}shortlink
➤ ${prefix}translate
➤ ${prefix}nulis
➤ ${prefix}nulis2
➤ ${prefix}ssweb
➤ ${prefix}infogempa
➤ ${prefix}colorize
➤ ${prefix}qrencode
➤ ${prefix}qrdecode

Maker:
➤ ${prefix}ttp
➤ ${prefix}bpink
➤ ${prefix}glitch2
➤ ${prefix}thunder
➤ ${prefix}bneon
➤ ${prefix}matrix
➤ ${prefix}ghoror
➤ ${prefix}dropwater
➤ ${prefix}devil
➤ ${prefix}glitch
➤ ${prefix}avengers
➤ ${prefix}marvel
➤ ${prefix}phlogo
➤ ${prefix}trigger
➤ ${prefix}yasin
➤ ${prefix}vampire
➤ ${prefix}spongebob
➤ ${prefix}twibonbadut
➤ ${prefix}crush
➤ ${prefix}passed
➤ ${prefix}scary
➤ ${prefix}tobecontinue
➤ ${prefix}skull
➤ ${prefix}quoteit

Anime:
➤ ${prefix}lolivideo 
➤ ${prefix}waifu 
➤ ${prefix}neko 
➤ ${prefix}shinobu 
➤ ${prefix}megumin 
➤ ${prefix}awoo
➤ ${prefix}bully 
➤ ${prefix}cuddle 
➤ ${prefix}hug 
➤ ${prefix}kiss 
➤ ${prefix}lick 
➤ ${prefix}pat 
➤ ${prefix}bonk 
➤ ${prefix}smug 
➤ ${prefix}yeet 
➤ ${prefix}blush 
➤ ${prefix}smile 
➤ ${prefix}wave 
➤ ${prefix}highfive 
➤ ${prefix}handhold 
➤ ${prefix}nom 
➤ ${prefix}bite 
➤ ${prefix}glomp 
➤ ${prefix}slap
➤ ${prefix}kill 
➤ ${prefix}happy
➤ ${prefix}wink 
➤ ${prefix}poke 
➤ ${prefix}dance 
➤ ${prefix}cringe
➤ ${prefix}storyanime

Database:
➤ ${prefix}setcmd
➤ ${prefix}listcmd
➤ ${prefix}delcmd
➤ ${prefix}lockcmd
➤ ${prefix}addmsg
➤ ${prefix}listmsg
➤ ${prefix}getmsg
➤ ${prefix}delmsg

Owner:
➤ ${prefix}chat [option]
➤ ${prefix}join [link]
➤ ${prefix}leave
➤ ${prefix}block @user
➤ ${prefix}unblock @user
➤ ${prefix}bcgroup [text]
➤ ${prefix}bcall [text]
➤ ${prefix}setppbot [image]
➤ ${prefix}setexif
➤ ${prefix}ochat
➤ ${prefix}react

THANKS TO
• Allah swt
• Adiwajshing
• Dika Ardnt
• Penyedia Layanan API
• Penyedia Modules
• Orang-orang yang Berdonasi
• Ahmad Chen Wang Xuesi
• Hans
• Nekell
• Bremana
• Irwanx
• Wifi Tetangga
      SPECIAL THANKS TO
• Limoy<3
• Bunga
`
let btn = [{
urlButton: {
displayText: 'S C R I P T',
url: global.sourceurl
}
}, {
callButton: {
displayText: 'O W N E R',
phoneNumber: global.phone
}
}, {
quickReplyButton: {
displayText: '🎈MENU AWAL🎈',
id: `${prefix}nextmenu`
}
}, {
quickReplyButton: {
displayText: '🤖 R U L E S 🤖',
id: `${prefix}rulesbot`
}  
}, {
quickReplyButton: {
displayText: '⚡CONTACT OWNER⚡',
id: 'owner'
}
}]
client.sendButImg(m.chat, anu, client.user.name, global.thumb, btn)
}
break
case 'gamemenu': {
if (jam >= 5 && jam <= 9) {
ucapan = 'Selamat Pagi!⛅\nTerima Kasih Atas Donasinya'
} else if (jam >= 10 && jam <= 14) {
ucapan = 'Selamat Siang!☀️\nTerima Kasih Atas Donasinya'
} else if (jam >= 15 && jam <= 17) {
ucapan = 'Selamat Sore!🌄\nTerima Kasih Atas Donasinya'
} else if (jam >= 18 && jam <= 20) {
ucapan = 'Selamat Petang!🌕\nTerima Kasih Atas Donasinya'
} else if (jam >= 21 && jam <= 23) {
ucapan = 'Selamat Malam!🌘\nTerima Kasih Atas Donasinya'
} else {
ucapan = 'Sudah larut malam, Jangan lupa istirahat!😴'
} 
countDownDate = new Date(`${global.tanggal},00:00:00`).getTime();
now = new Date().getTime();
distance = countDownDate - now;
days = Math.floor(distance / (1000 * 60 * 60 * 24));
if (distance < 0) {
times = ("Terlewat");
} else {
times = (days + " Hari Lagi Menuju " + global.acara);
}
locale = 'id'
d = new Date(new Date + 3600000)
week = d.toLocaleDateString(locale, {
weekday: 'long'
})
date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
wib = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
let anu = `🔥G A M E M E N U🔥

${ucapan}

📢  *INFO*  📢
📍 *Bot Name* : *${global.botname}*
📍 *Jam* : *${wib}*
📍 *Tanggal* : *${week}, ${date}*
📍 *Tanggal Islam* : *${dateIslamic}*
📍 *Aktif* : *${runtime(process.uptime())}*
📍 *Prefix* : 「  *MULTI*  」
📍 *Nama* : *${pushname}*
📍 *${times}*

Hay *${pushname}* 👋🏻, jangan lupa jaga kesehatan ya...
tetap patuhi prokes dan ikuti vaksinasi
Mari mendukung program pemerintah dalam menanggulangi COVID-19 di Indonesia🇲🇨

Baca rules bot dahulu sebelum menggunakan fitur-fitur bot agar tidak terbanned dengan cara ketik *${prefix}rules*

Ada keperluan dengan owner bot?
ketik *${prefix}chatowner* pesan kamu atau ketik *${prefix}owner* untuk mengetahui kontak owner

THANKS TO
• Allah swt
• Adiwajshing
• Dika Ardnt
• Penyedia Layanan API
• Penyedia Modules
• Orang-orang yang Berdonasi
• Ahmad Chen Wang Xuesi
• Hans
• Nekell
• Bremana
• Irwanx
• Wifi Tetangga
      SPECIAL THANKS TO
• Limoy<3
• Bunga

*MENU*:

📍 ${prefix}tonguetwister
📍 ${prefix}truth
📍 ${prefix}dare
📍 ${prefix}tictactoe
📍 ${prefix}delttt
📍 ${prefix}asahotak
📍 ${prefix}siapaaku
📍 ${prefix}lagukebangsaan
📍 ${prefix}ibukota
📍 ${prefix}susunkata
📍 ${prefix}kimia
📍 ${prefix}caklontong
📍 ${prefix}tebak kata
📍 ${prefix}tebak lirik
📍 ${prefix}tebak kalimat
📍 ${prefix}tebak bendera
📍 ${prefix}tebak gambar
📍 ${prefix}math [mode]
📍 ${prefix}suitpvp [@tag]
`
let btn = [{
urlButton: {
displayText: 'S C R I P T',
url: global.sourceurl
}
}, {
callButton: {
displayText: 'O W N E R',
phoneNumber: global.phone
}
}, {
quickReplyButton: {
displayText: '⚙️ D A S H B O A R D ⚙️',
id: `${prefix}menu`
}
}, {
quickReplyButton: {
displayText: '🤖 R U L E S 🤖',
id: `${prefix}rules`
}  
}, {
quickReplyButton: {
displayText: '💸 S E W A B O T 💸',
id: 'sewabot'
}
}]
client.sendButImg(m.chat, anu, client.user.name, global.thumb, btn)
}
                                                        break
default:
if (buddy.includes(`curhat`)) {
m.reply(`Ada apa sih kawan, sini dong cerita apa masalahnya`)
}

if (buddy.includes(' cok')) {
m.reply('Piye cok');
}

if (budy.includes('tiktok.com/')) {
let anu = await findUrl(budy)
anu.forEach(async(taut, i) => {
setTimeout(async() => {
tikt = await tiktok(taut);
if (tikt.result.nowatermark == undefined) return
client.sendMessage(m.chat, {video: {url: tikt.result.nowatermark}}, {quoted: m})
}, 3000 * i)
})   
}

if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('->')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(`async function start() { 
  ${budy.slice(3)}
}
start()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('-')) {
if (budy.includes('->')) return
m.reply('Type *' + budy.slice(1) + '* without -\nor use another prefix!')
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
client.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
