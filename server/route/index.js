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


router.get('/:id',async(req,res)=>{
    
    try {
        let result = await db.one(req.params.id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.post('/',async(req,res)=>{

    
    try {
        let result = await db.add(req.body.username,req.body.gpa);
        res.json(result);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.put('/:id',async(req,res)=>{

    
    try {
        let result = await db.update(req.body.id,req.body.username,req.body.gpa);
        res.json(result);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})
module.exports = router;