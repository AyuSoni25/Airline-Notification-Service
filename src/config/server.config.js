const dotenv = require('dotenv');

dotenv.config();

module.exports={
    PORT: process.env.PORT,
    GMAIL_ID: process.env.GMAIL_ID,
    GMAIL_PASS: process.env.GMAIL_PASS
}