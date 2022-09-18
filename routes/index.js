const express = require('express');
const Host  = require('../models/Host');
const Score  = require('../models/Score');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hosts', (req, res)=>{
  Host.find()
    .then((result)=>{
      console.log(result);
      res.send(result);
    })
    .catch((err)=>{
      res.send(err);
    })
});

router.post('/scores', (req,res)=>{
  const { taste, presentation } = req.body;
  Score.create({ taste, presentation })
    .then((result)=>{
      res.send(result);
    })
    .catch((err)=>{
      res.send(err)
    })
})

module.exports = router;
