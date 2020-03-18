const express = require("express")
const app = express()
const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/", require("./routes/api-routes"))

app.listen(PORT, ()=> {
    console.log(`listening on http://localhost:${PORT}`)
})