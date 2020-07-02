const express =require('express')
const router = express.Router()
const Login = require('./../modals/signup/db')

router.get('/',(req,res)=>{
    res.render('login/index')
})

router.get('/:id',(req,res)=>{
    res.render('main/welcome')
})

router.post('/',async (req,res)=>{
    const login =await Login.find({username:req.body.username,password:req.body.password})
    if(login.length > 0)
    {
        res.redirect(`login/${login[0].id}`)
    }
    else
    {
        res.render('login/index')
    }
})

module.exports =router