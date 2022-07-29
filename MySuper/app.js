const mongoose = require('mongoose')
const express = require('express')
const superRouter = require('./routes/superRouter')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

async function start(){
    try{
        await mongoose.connect('mongodb+srv://user:user@cluster0.mf9jjpr.mongodb.net/?retryWrites=true&w=majority').then(()=>{
            console.log('data base success')    
        })

        app.listen(5000, ()=>{
            console.log(`Example app listening on port 5000`)
        })
        
    }catch(e){
        console.log('Server Error')
    }
}

start()

app.use('/super', superRouter)