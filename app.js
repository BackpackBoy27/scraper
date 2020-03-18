const express = require("express")
const app = express()
const PORT = process.env.PORT || 7000
const mongoose = require("mongoose")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/", require("./routes/api-routes"))

app.listen(PORT, ()=> {
    console.log(`listening on http://localhost:${PORT}`)
})

mongoose.connect("mongodb+srv://ghost:catpaws@cluster0-h508y.mongodb.net/DinoDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log("Error: ", err));









