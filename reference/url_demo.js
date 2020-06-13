const url = require('url');

const myUrl = new URL('https://mywebsite.com/hello.html?id=100&status=active');

// Serailized URL
console.log(myUrl.href);		// https://mywebsite.com/hello.html?id=100&status=active
console.log(myUrl.toString());	// https://mywebsite.com/hello.html?id=100&status=active

// Host (root name)
console.log(myUrl.host);	// mywebsite.com

// Hostname (does not get port number)
console.log(myUrl.hostname);	// mywebsite.com

// Pathname
console.log(myUrl.pathname);	// hello.html

// Serailized query
console.log(myUrl.search);	// ?id=100&status=active

// Params object
console.log(myUrl.searchParams)	// URLSearchParams {'id' => '100', 'status' => 'active'}

// Add Param
myUrl.searchParams.append('abc', '1230');
console.log(myUrl.searchParams);	// URLSearchParams {'id' => '100', 'status' => 'active', 'abc' => '123'}

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));