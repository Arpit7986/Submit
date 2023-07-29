const express=require('express')
const app=express()
const ejs=require('ejs')
const mongoose=require('mongoose')
app.set('view engine','ejs')

mongoose.connect('mongodb://127.0.0.1:27017/Maruti')
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
app.get('/',(req,res)=>{
    
    User.find().then((user)=>{
        res.render('index',{
            userList:user
        })})
     
       
})
   
    // res.redirect('/')
    app.get('/jain',(req,res)=>{
    
        User.find().then((user)=>{
            res.render('main',{
                userList:user
            })})
         
           
    })
    app.get('/j',(req,res)=>{
    
        User.find().then((user)=>{
            res.render('arpit',{
                userList:user
            })})
         
           
    })



    const bodyParser=require('body-parser')
    const path=require('path')
    const exp = require('constants')
    const { log } = require('console')
    
    app.use(express.urlencoded({extended:true}))
    app.use(bodyParser.urlencoded({extended:true}))
    
    mongoose.connect('mongodb://127.0.0.1:27017/Maruti')
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
    
    const router=require('./routes/route')

app.use('/ajay',router)

app.listen(8000,()=>{
    console.log("Server Connected Successfully");
})