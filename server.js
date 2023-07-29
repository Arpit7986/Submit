const express=require('express')
const app=express()
const mongoose=require('mongoose')
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

app.listen(8080,()=>{
    console.log("Server Connected Sucessfully at 8080");
})

