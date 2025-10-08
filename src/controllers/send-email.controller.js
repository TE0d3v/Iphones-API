const { sendAddIphoneEmail } = require("../services/email");

async function sendEmail(req, res) {
    try {
        await sendAddIphoneEmail();
        res.status(200).send({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

module.exports = { sendEmail };