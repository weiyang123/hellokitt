var express = require('express');
var router = express.Router();

router.get('/:name',function(req,res){   //res.render 渲染ejs模板，第一个参数对应模板名称
	res.render('user', {
	    name: req.params.name
	  });
});

module.exports = router;
