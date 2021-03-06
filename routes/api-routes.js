const express = require("express")
const router = express.Router()
const Article = require('../models/Article')

router.get("/api",(req, res) =>{
    res.send("<h1>Api Route</h1>")
})

router.get('/api/all', (res, req)=>{
    Article.find().then(res=> {
        res.send(res)
    }).catch(err=> console.log(err))
})

router.post('/api/new', (req, res)=>{
    console.log('server:', req.body)
    Article.create({
        title: req.body.title,
        description: req.body.description
    }).then(result=>{
        console.log(result)
        res.send(result)
    }).catch(err=>console.log(err));
})

module.exports = router;