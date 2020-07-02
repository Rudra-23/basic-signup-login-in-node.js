const express =require('express')
const app =express()
const signupRouter = require('./routes/signup')
const loginRouter = require('./routes/login')
const mongoose = require('mongoose')

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render('main/index')
})
app.use('/signup',signupRouter)
app.use('/login',loginRouter)
mongoose.connect('mongodb://localhost/signup',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})

const db = mongoose.connection

db.on('error',error=>console.error(error))
db.once('open',()=>console.log('db connected'))

app.listen(3000,()=> console.log('server started at port 3000'))