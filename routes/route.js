const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const path=require('path')
const exp = require('constants')
const { log } = require('console')

router.use(express.urlencoded({extended:true}))
router.use(bodyParser.urlencoded({extended:true}))


router.get('/',(req,res)=>{
    res.render('arpit')
})


module.exports=router