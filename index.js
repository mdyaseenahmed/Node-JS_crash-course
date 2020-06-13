// console.log('Hello From Node.js...')

// const Person = require('./person')

// const person1 = new Person('Md Yaseen',20);

// person1.greetings();

// Logger
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called Listener: ',data));

// logger.log('Hello World');		// Called Listener: {id: 'ddsass-asssff12323-ads213', msg: 'Hello World'}
// logger.log('Hi');				// Called Listener: {id: 'sdgfdj-13nk23-1nkj231-adss1', msg: 'Hi'}


const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
	// if(req.url === '/'){
	// 	fs.readFile(path.join(__dirname,'public','index.html'), (err, content) => {
	// 		if (err) throw err;
	// 		res.writeHead(200, {'Content-Type': 'text.html'});
	// 		res.end(content);	
	// 	});
	// }

	// if(req.url === '/about'){
	// 	fs.readFile(path.join(__dirname,'public','about.html'), (err, content) => {
	// 		if (err) throw err;
	// 		res.writeHead(200, {'Content-Type': 'text.html'});
	// 		res.end(content);	
	// 	});
	// }

	// if(req.url === '/api/users'){
	// 	const users = [
	// 		{ name: 'Yaseen', age: 20},
	// 		{ name: 'Ahmed', age: 19}
	// 	];
	// 	res.writeHead(200, {'Content-Type': 'application/json'});
	// 	res.end(JSON.stringify(users));		
	// }

	// Build File Path
	let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

	// Extension of File
	let extname = path.extname(filePath);

	// Initial content Type
	let contentType = 'text/html';

	// Check ext and set content type
	switch(extname) {
		case '.js': 
			contentType = 'text/javascript';
			break;

		case '.css':
			contentType = 'text/css';
			break;

		case '.json':
			contentType = 'application/json';
			break;

		case '.png':
			contentType	= 'image/png';
			break;

		case '.jpg':
			contentType = 'image.jpg';
			break;		 	
	}

	// Read File
	fs.readFile(filePath, (err, content) => {
		if(err) {
			if(err.code == 'ENOENT') {
				// Page Not Found
				fs.readFile(path.join(__dirname, 'public', '404.html'),(err, content) => {
					res.writeHead(200, { 'Content-Type': 'text/html' });
					res.end(content, 'utf8');
				})
			} else {
				// Some Server Error
				res.writeHead(500);
				res.end('Server Error: ',err.code);
			}
		} else {
			// Success
			res.writeHead(200, {'Content-Type': contentType});
			res.end(content, 'utf8');
		}
	})

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server is Running on Port',PORT));
