const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="aidenstudios84@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348124030911" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348124030911";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348124030911";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2348124030911";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2348124030911";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348124030911,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""SUHAIL_19_40_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyLFxuICAgICAgICAzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDUxLFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1LFxuICAgICAgICA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA5LFxuICAgICAgICA4MCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyLFxuICAgICAgICA5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5LFxuICAgICAgICA3NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE3LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTczLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDUyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmMVVrdFZCWDhaTUU3V3pFNEVEOFhsTU1Sa1RRSUpnVVVQQit5Rkp6SXNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrb3VmWUVXSlJBLWxHQzN2dWlWRXZRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRiNDI5MTBkLWU5NjItNDhkMS04YWJiLWJiMjlmODRkZDNjYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDM3LFxuICAgICAgMjU0LFxuICAgICAgMzEsXG4gICAgICAyMTEsXG4gICAgICAxOSxcbiAgICAgIDIwMixcbiAgICAgIDc4LFxuICAgICAgMTg4LFxuICAgICAgMTgzLFxuICAgICAgMTY4LFxuICAgICAgMTI1LFxuICAgICAgOCxcbiAgICAgIDIzMCxcbiAgICAgIDE2NSxcbiAgICAgIDIyMCxcbiAgICAgIDIyMSxcbiAgICAgIDIwMyxcbiAgICAgIDg2LFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDE1MSxcbiAgICAgIDE0LFxuICAgICAgMjEsXG4gICAgICAyNTIsXG4gICAgICAyMzUsXG4gICAgICAzMixcbiAgICAgIDE2OSxcbiAgICAgIDIyLFxuICAgICAgMjI0LFxuICAgICAgMjI5LFxuICAgICAgMjQ4LFxuICAgICAgNzAsXG4gICAgICAxODYsXG4gICAgICAxMCxcbiAgICAgIDQyLFxuICAgICAgNjMsXG4gICAgICAxNTEsXG4gICAgICAzOSxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSisraTdRSEVKM2duN1VHR0JFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCOVpEdGFLTnhmWHcyZDhPVkpYZ2Zzc2xObHl3djNEejBKaEZHRGdzSUJvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVseUhpRmZESlBNTGc0TjZBTFJNaTYyWjgrU1R0OXgyQjg3ampPbnVCUGs1b3RVS0NkT0NJYzNRNUxXRkhDSTQ2WnRQaGZrUklvVUhCWEUzNTd0bkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlIcTd3bmFraUVteCtKV3pEMEI4R1pyTFRUVlh6bkJpQ1VhbGxuaU9zdFJPZDJycmxUWThoNVJvZGo3Q1NYR01jRkUwMm1ncFZJZ3lMZ3NyQTJoN0J3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyNDAzMDkxMToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFpZGVuX29mOTk5XCIsXG4gICAgXCJsaWRcIjogXCIyMjA2NTQzNjQyOTkzMjM6MjZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTI0MDMwOTExOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI4MjAxOFxufSIKfQ==  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
