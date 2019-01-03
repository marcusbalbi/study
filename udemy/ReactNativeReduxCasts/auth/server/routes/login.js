const express = require('express');
const router = express.Router();
const LoginUser = require('../actions/LoginUser')

router.post('', function (req, res, next) {
  const { email, password } = req.body
  LoginUser({ email, password })
    .then((pRes) => {
      res.json({ data: pRes });
    })
    .catch((pErr) => {
      res.status(400).json({ error: pErr.message });
    })
});

module.exports = router;
