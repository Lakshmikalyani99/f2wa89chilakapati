var express = require('express');
var router = express.Router();
var url = require('url')
var querystring = require('querystring');
/*
21. Math.acos()
22. Math.sin()
23. Math.sinh()
*/
/* GET users listing. */

router.get('/', function (req, res, next) {
  queryparams = (url.parse(req.url)).query
  values = new URLSearchParams(queryparams)
  x = values.get('x')
  console.log(x);
  rand = Math.floor(Math.random() * 1000)
  console.log(rand);
  if (x) {

    output = `
   Math.sinh() applied to ${x} is ${Math.sinh(x)} `

    res.render('computation', { title: 'Bonus', heading: 'Computation', output: output })
  }
  else {
    output = `
      Math.sinh() applied to ${rand} is ${Math.sinh(rand)} `

    res.render('computation', { title: 'Bonus', heading: 'Computation', output: output })
  }


});

module.exports = router;
