const email = require('@sendgrid/mail');
const EMAIL_IPHONE_ADDED_TEMPLATE = require('../utils/emails-templates');
const juice = require('juice');
require('dotenv').config();

email.setApiKey(process.env.SENDGRID_API_KEY)

async function sendAddIphoneEmail() {
    const emailContent = {
        to: 'denilson.bezerra.dev@gmail.com',
        from: 'denilsonbezerra.10@hotmail.com',
        subject: 'Um iPhone foi adicionado ao carrinho!',
        html: juice(EMAIL_IPHONE_ADDED_TEMPLATE),
    }

    await email.send(emailContent)
}

module.exports = {
    sendAddIphoneEmail
}