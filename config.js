const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_47_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDYxLFxuICAgICAgICA2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDExLFxuICAgICAgICA5MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDc0LFxuICAgICAgICA5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTE2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgNyxcbiAgICAgICAgODEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDc3LFxuICAgICAgICA1NixcbiAgICAgICAgMjMwLFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY5LFxuICAgICAgICA5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1OCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwLFxuICAgICAgICA5MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDc3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZwV3F4aElYK3Y3NzAxMnFydG01aStaaHFMQjdFUStvSjlBOFhuaHBHdzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl92N1NPZjVRVHItZEo3NWFkVUZmcVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjUxYTg0M2EtM2M2ZC00MDM0LWE4YjEtYzM4MGQwNTBlNmZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICAxMzksXG4gICAgICAxNjYsXG4gICAgICAxMjksXG4gICAgICA5NyxcbiAgICAgIDEzMSxcbiAgICAgIDE0MCxcbiAgICAgIDM1LFxuICAgICAgMTgyLFxuICAgICAgODYsXG4gICAgICAxNzIsXG4gICAgICAxOTUsXG4gICAgICA0NixcbiAgICAgIDcyLFxuICAgICAgMTc4LFxuICAgICAgMTQ5LFxuICAgICAgMTM1LFxuICAgICAgMTI2LFxuICAgICAgMjI3LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY3LFxuICAgICAgMjQ0LFxuICAgICAgMjE4LFxuICAgICAgMTQ0LFxuICAgICAgNDIsXG4gICAgICAxMixcbiAgICAgIDI4LFxuICAgICAgNzksXG4gICAgICA3LFxuICAgICAgMTc4LFxuICAgICAgMjQ1LFxuICAgICAgMTk2LFxuICAgICAgNzcsXG4gICAgICAzNyxcbiAgICAgIDE0MCxcbiAgICAgIDQzLFxuICAgICAgOTYsXG4gICAgICA4OCxcbiAgICAgIDIyMixcbiAgICAgIDE1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGOTlZTkxLNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMzE1NTQ3NjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM3MTQ3MTM5NDA0MDI0OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lMRDlZRUVFTWY1MmJzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ09mMWY1dTVPQ2E5YXIzeVhreThmS0RUdU51RWpGUFRUZXNaZ0FpVWRHaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4VU5rZDBGMnR1VU0za241T2Z5MHhEL0gyM1ZBeGtuKzNWUFdiYThMTDNFenc0ZWN3WXU5Y1FrQkR2R2NqOUs1VWMwS05ScURlNkloUWpURUFYcmNBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBUEpVNG5TT2xWQlR0VjZlT1Jlak9kSGtOaHZWbU1QSWVHTk9TYVY2aDFDWW1sd0JCR3BrcHVQdjV2TjhqQjVoWmJSTFBTUzNDVVU5WVRvZWxHM09pQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDEzMTU1NDc2OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTgxODQ0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA3MlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDcyLmpzb24iOiAie1wia2V5RGF0YVwiOlwidmMwd3pmS21iV3JvSEFSUy9ETlVqVUJKblFmV29NYmpMWUhkSFJ3ODBuRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDc3NzY0NDc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
