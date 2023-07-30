require('dotenv').config()
const express=require('express')
const app=express()
const ejs=require('ejs')
const mongoose=require('mongoose')
app.set('view engine','ejs')

mongoose.connect(process.env.DB_URL)
var db=mongoose.connection
db.on('error',()=>{
    console.log("Error in connection");
})
db.once('open',()=>{
    console.log("Connected successful");
})

const userSchema={
    title:String,
    content:String
}


const User=mongoose.model('User',userSchema)



app.get('/',(req,res)=>{
    
    User.find().then((user)=>{
        res.render('index',{
            userList:user
        })})
     
       
})
   
    // res.redirect('/')
    app.get('/ranjana',(req,res)=>{
    
        User.find().then((user)=>{
            res.render('main',{
                userList:user
            })})
         
           
    })
    // app.get('/j',(req,res)=>{
    
    //     User.find().then((user)=>{
    //         res.render('arpit',{
    //             userList:user
    //         })})
         
           
    // })



    const bodyParser=require('body-parser')
    const path=require('path')
    const exp = require('constants')
    const { log } = require('console')
    
    app.use(express.urlencoded({extended:true}))
    app.use(bodyParser.urlencoded({extended:true}))
    
    mongoose.connect(process.env.DB_URL)
    var db=mongoose.connection
    db.on('error',()=>{
        console.log("Error in connection");
    })
    db.once('open',()=>{
        console.log("Connected successful");
    })
     
    
    app.use('/',express.static(path.join(__dirname,'New')))
    
    app.post('/',(req,res)=>{
        const title=req.body.title;
        const content=req.body.content
    
        const data={
            "title":title,
            "content":content
        }
    
    
        db.collection('users').insertOne(data,(err,collection)=>{
            if(err){
                throw err
            }
            console.log("Successful");
        })
    
    
    
    
        res.redirect('/')
    })
    
    // app.get('/ajay',(req,res)=>{
    //     res.render('arpit')
    // })


    const router=require('./routes/route')

app.use('/ajay',router)
const port=process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Server Connected Successfully ${port}`);
})