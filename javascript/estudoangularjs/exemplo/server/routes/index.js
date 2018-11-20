exports.index = function(req, res) {
	console.log('index.html solicitado');
	res.render('index.html');
};