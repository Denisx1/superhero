const { Hero } = require('../database')

module.exports = {
    createHero: async (req, res, next) => {
        try {
            await Hero.create({
                ...req.body
            })

            res.redirect('/')

        } catch (e) {
            next
        }
    },

    getAllHero: async (req, res, next)=>{
        try{
            const { limit = 2, page = 1} = req.query
            const skip = (page-1)*limit

            const heroes = await Hero.find().skip(skip)
            const count = await Hero.count({})

            // res.json({
            //     page,
            //     parPage: limit,
            //     data: heroes,
            //     count
            // })
            res.render('index',{
                title: 'Hero list',
                isIndex: true,
                heroes,
                count
            })
        }catch(e){
            next(e)
        }
    },

    getHeroById: async(req, res, next)=>{
        try{
            const { id } = req.params
            const hero = await Hero.findById(id)
            if(!hero){
                next(new Error('111'))
                return
            }
            res.json(hero)
        }catch(e){
            next(e)
        }
    },

    updateHero: async (req, res, next) => {
        try{
            const { id } = req.params
            const heroUpdate = await Hero.updateOne(
                {_id: id},
                {image: true}
            )
            res.json(heroUpdate)
        }catch(e){
            next(e)
        }
        
    },

    deleteHeroById: async (req, res, next)=>{
        try{
            const { id } = req.params
            const deleteHero = await Hero.deleteOne({_id: id})
            res.json({
                _id: id,
                deleteHero
            })
        }catch(e){
            next(e)
        }
    },

    getStaticPage:  (req, res) => {
        try {
            
            res.render('index',{
                title: 'Hero list',
                isIndex: true
            })
        } catch (e) {
            console.error(e)
        }
    },

    getStaticCreate: (req, res, next)=>{
        try{
            res.render('create',{
                title: 'Create Hero',
                isCreate: true})
        }catch(e){
            next(e)
        }
    }
}