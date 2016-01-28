/**
 * Created by CTE Consultants on 1/22/2016.
 */
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(reg, res, next){
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', function(reg,res){
res.send('Birds home page');
});
// define the about route
router.get('/about', function(req,res){
res.send('About birds');
});

module.exports = router;