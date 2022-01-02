const State = require('../models/State');

module.exports = {
    getStates: async (req, res) => {
        const states = await State.find();
        res.json({ states });
    },
    signin: async (req, res) => {

    },
    signup: async (req, res) => {

    },
    info: async (req, res) => {

    },
    edit: async (req, res) => {

    }
}