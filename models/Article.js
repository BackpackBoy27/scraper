const mongoose = require("mongoose")
const articleSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = Article = mongoose.model("Article", articleSchema)