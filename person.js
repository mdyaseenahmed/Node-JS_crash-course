// const person = {
// 	name: 'Md Yaseen',
// 	age: 20
// }

// Module Wrapper Function
// (function (exports, require, __filename, __dirname)){

//	})

// console.log('Directory Name : ')
// console.log(__dirname);

// console.log('File Name : ')
// console.log(__filename);

class Person{
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greetings() {
		console.log(`My name is ${this.name} and I am ${this.age}`);
	}
}


module.exports = Person