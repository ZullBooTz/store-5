const fs = require('fs')

global.namabot = "Latina - Mdོ"
global.namaowner = "༄ᶜZull - Modz☆࿐"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6289603792741','6289525772874']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `*LIST PAYMENT😊*
     💰  DANA             | 089603792741✅
     💰  OVO               | 089603792741❌
     💰  SHOPEPAY      ㅤ| 089525772874✅
      💰 QRIS               | Wajib SS Detail Transaksinya ⚠️❌ 
         
           _*PENGINGAT*_
*TERSEDIA : ✅*
*TIDAK TERSEDIA : ❌*
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`» /owner
» /addsewa
» /delsewa
» /ceksewa
» /listsewa
» /pay
» /setpay
» /list
» /addlist
» /updatelist
» /renamelist
» /dellist
» /jeda
» /tambah
» /kurang
» /kali
» /bagi
» /setproses
» /changeproses
» /delsetproses
» /setdone
» /changedone
» /delsetdone
» /proses
» /done
» /welcome
» /goodbye
» /setwelcome
» /changewelcome
» /delsetwelcome
» /setleft
» /changeleft
» /delsetleft
» /antiwame
» /antiwame2
» /antilink
» /antilink2
» /open
» /close
» /hidetag
» /add
» /kick
» /stiker
» /ffid
» /mlid
» /setppgc
» /setnamegc
» /setdesgc
» /linkgc
» /resetlinkgc
» /promote
» /demote
» /setbot
» /updatesetbot
» /delsetbot
» /bot
\`\`\`

📝 *NOTE*: 
 Selamat Hari Raya Idul Fitri 1444 Hijriah
Jika Bot Dan Owner Punya Salah 
Mohon Di Maafkan

*_Minal Aidzin Wal Faidzin_*
*_Mohon Maaf Lahir Dan Batin 😁🙏_*

*_Jangan Lupa Thr Nya:v_*

_*Tf Dana 6289603792741*_

`
}