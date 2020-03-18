const express = require("express")
const router = express.Router()
const Article = require('../models/Article')

router.get("/api",(req, res) =>{
    Article.find().then(res=> {
        res.send(res)
    }).catch(err=> console.log(err))
})

router.get('/api/all', (res, req)=>{

})

module.exports = router;