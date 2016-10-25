var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();

app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(__dirname + '/public'));

app.post('/upload', upload.single('file_size'), function(req, res){	
	res.type('json');
	res.send({size: req.file.size});
});

app.get('*', function(req, res){
	res.type('json');
	res.send({error: 'page not found'});
});


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));    
});