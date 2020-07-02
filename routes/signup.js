const express =require('express')
const router = express.Router()
const Signup = require('./../modals/signup/db')

router.get('/',(req,res)=>{
    res.render('signup/index')
})

router.get('/:id',(req,res)=>{
    res.render('main/welcome')
})

router.post('/',async (req,res)=>{
    let signup =await new Signup({
        username:req.body.username,
        password:req.body.password
    })
    try{
        signup = await signup.save()
        res.redirect(`signup/${signup.id}`)
    }
    catch(e){
        res.render('signup/index')
    }
})

module.exports =router