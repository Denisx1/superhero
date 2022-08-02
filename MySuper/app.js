const mongoose = require('mongoose')
const express = require('express')
const exphbs = require('express-handlebars')
const superRouter = require('./routes/superRouter')
const { PORT, MONGO_URL } = require('./config/config')


const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))

app.use(superRouter)

app.use(express.json())
app.use(express.urlencoded({extended:true}))

async function start(){
    try{
        await mongoose.connect(MONGO_URL).then(()=>{
            console.log('data base success')    
        })

        app.listen(PORT, ()=>{
            console.log(`Example app listening on port ${PORT}`)
        })
        
    }catch(e){
        console.log('Server Error')
    }
}

start()

