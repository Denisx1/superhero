const { Schema, model } = require('mongoose')

const Hero = new Schema({
    nickname: { type: String, trim: true, lowercase: true, unique: true, required: true },
    realname: { type: String, trim: true, required: true},
    origin_description: { type: String, trim: true, required: true},
    superpowers: { type: String, trim: true, required: true},
    catch_phrase: { type: String, trim: true, required: true},
    image: { type: Boolean, default: true}
},
    {timestamps: true}
)

module.exports = model('Hero', Hero)