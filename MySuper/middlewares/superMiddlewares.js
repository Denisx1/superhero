const { validHero } = require('../validator')
const { Hero } = require('../database')


const newHeroicValidator = (req, res, next) => {
    try {
        const { error, value } = validHero.newHeroicJoiSchema.validate(req.body)
        
        if (error) {
            next(new Error('111'))
            return
        }

        req.body = value

        next()
    } catch (e) {
        next(e)
    }
}

const checkNickNameIsDublicate = async(req, res, next)=>{
    try{
        const { nickname = '' } = req.body
       
        if(!nickname){
            next(new Error('your are no nickname'))
        }
        
        const heroSee = await Hero.findOne({nickname: nickname.toLowerCase().trim()})

        if(heroSee){
            next(new Error ('This Hero is Exists'))
        }
        next()
    }catch(e){
        next(e)
    }
}

module.exports = {
    newHeroicValidator,
    checkNickNameIsDublicate,
}