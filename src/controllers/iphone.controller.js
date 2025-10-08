const Iphone = require('../models/Iphone');

async function getAllIphones(req, res) {
    try {
        const iphones = await Iphone.findAll();
        res.status(200).json(iphones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createIphone(req, res) {
    try {
        const { model, color, storage, price } = req.body;
        const newIphone = await Iphone.create({ model, color, storage, price });
        res.status(201).json(newIphone);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateIphone(req, res) {
    try {
        const { id } = req.params;
        const { model, color, storage, price } = req.body;
        const iphone = await Iphone.findByPk(id);
        if (!iphone) {
            return res.status(404).json({ error: 'iPhone not found' });
        }
        if (!model || !color || !storage || !price) {
            return res.status(400).json({ error: 'Campos obrigatorios' });
        }
        await iphone.save();
        res.status(200).json(iphone);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllIphones,
    createIphone,
    updateIphone
};
