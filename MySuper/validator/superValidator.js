const Joi = require('joi')

const newHeroicJoiSchema = Joi.object({
    nickname: Joi.string().alphanum().min(2).max(50).trim(),
    realname: Joi.string().min(2).max(50).trim(),
    origin_description: Joi.string().min(2).max(600).trim(),
    superpowers: Joi.string().min(2).max(200).trim(),
    catch_phares: Joi.string().trim(),
    images: Joi.boolean()
})

module.exports = {
    newHeroicJoiSchema
}