var express = require('express');
var router = express.Router();

/* GET users listing. */
times =0

router.get('/', function(req, res, next) {
  times = times+1
  res.send(`User accesses are: ${times}`);
});

module.exports = router;
