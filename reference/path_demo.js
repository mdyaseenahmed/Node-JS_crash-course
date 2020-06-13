const path = require('path');

// Base file name
console.log(path.basename(__filename));		// path.demo.js

// Directory name
console.log(path.dirname(__filename));

// File Extension
console.log(path.extname(__filename));		// .js

// Create a path object
console.log(path.parse(__filename))

// The Above line of code Outputs: 
	//	{
	// 	root: '/',
	// 	dir: '/Users/Yaseen/node-crash-course/reference',
	// 	base: 'path_demo.js',
	// 	ext: 'js',
	// 	name: 'path_demo'
	// }

console.log(path.parse(__filename).base)	// path_demo.js
console.log(path.parse(__filename).ext)		// js

// concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'))		// C:\Users\Yaseen\node-crash-course\reference\test\hello.html
