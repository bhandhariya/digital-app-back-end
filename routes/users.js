var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/test', function(req, res, next) {
 var data=req.body;
 console.log(data)

});



module.exports = router;
