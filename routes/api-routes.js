const express = require("express")
const router = express.Router()

router.get("/api", (req, res) => {
    res.send("<h1>Welcome to the Api page</h1>")
})
