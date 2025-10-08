const Iphone = require('../models/Iphone');

async function createIphone(req, res) {
    try {
        const { model, color, storage, price } = req.body;
        const newIphone = await Iphone.create({ model, color, storage, price });
        res.status(201).json(newIphone);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllIphones(req, res) {
    try {
        const iphones = await Iphone.findAll();
        res.status(200).json(iphones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createIphone,
    getAllIphones,
};
