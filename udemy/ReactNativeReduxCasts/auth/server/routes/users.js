const express = require('express');
const router = express.Router();
const CreateUser = require('../actions/CreateUser')

router.post('', function (req, res, next) {
   const { email, password } = req.body
   CreateUser({ email, password })
      .then((created) => {
         res.json({ data: created });
      })
      .catch((pErr) => {
          res.status(400).json({error: pErr.message});
      })
});

module.exports = router;
