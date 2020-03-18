const express = require('expresss');
const router = express.Router();
const path = require('path');

router.get('/', (res, res)=>{
    res.sendFile(path.join(__dirname, '../views'));
})

module.exports = router