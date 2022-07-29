const { Router } = require('express')
const herroMiddlewares = require('../middlewares/superMiddlewares') 
const herroControllers = require('../controllers/heroController') 


const superRouter = Router()

superRouter.post('/create', herroMiddlewares.newHeroicValidator, herroMiddlewares.checkNickNameIsDublicate, herroControllers.createHero)

superRouter.patch('/:id',herroControllers.getHeroById )

superRouter.delete('/:id', herroControllers.deleteHeroById)

superRouter.put('/:id/up',herroControllers.updateHero )

superRouter.get('/all', herroControllers.getAllHero)



module.exports = superRouter