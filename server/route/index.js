const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async(req,res)=>{

    try {
        let result = await db.all();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

})

module.exports = router;