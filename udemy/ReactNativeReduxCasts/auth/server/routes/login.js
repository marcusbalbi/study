const express = require('express');
const router = express.Router();
const LoginUser = require('../actions/LoginUser')
const LogoutUser = require('../actions/LogoutUser')

router.post('', function (req, res, next) {
  const { email, password } = req.body
  LoginUser({ email, password })
    .then((pRes) => {
      if (!pRes) {
        throw new Error('Email or Password Incorrect!')
      }
      res.json({ data: pRes });
    })
    .catch((pErr) => {
      res.status(400).json({ error: pErr.message });
    })
});

router.delete('', function (req, res, next) {
  const { userID } = req.body
  LogoutUser(userID)
    .then((pRes) => {
      if (!pRes) {
        throw new Error('User did not exists')
      }
      res.json({ data: true });
    })
    .catch((pErr) => {
      res.status(400).json({ error: pErr.message });
    })
});

module.exports = router;
