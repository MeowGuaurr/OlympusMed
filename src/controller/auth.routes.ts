const express = require('express');
const router =  express.Router();


router.post('/register', (req, res) => {
  res.send(req.body)
})

router.post('/login', (req, res) => {

  const {username, password} = req.body

  if (!username) {
    return res.status(400).json({message : "Invalid username or password"})

  }

  res.send({username, password})
})

module.exports = router

