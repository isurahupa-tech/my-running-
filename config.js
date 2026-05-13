const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3csSnTQD#OtP5E85nzpuIZVCPhw81TVA3pCWc6Rydc_8yz3JIFSo",
ALIVE_IMG : process.env.ALIVE_IMG || "https://upld.zone.id/uploads/d4i0x5iq/sandes-md-v2.webp",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", 
};
