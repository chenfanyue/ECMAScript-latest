/* legacy style
function User(name,email) {
	this.name=name;
	this.email=email;
}
User.prototype.changeEmail = function(newEmail) {
	this.email=newEmail;
};
var user=new User('Peter','a@b.c');
user.changeEmail('second@y.z');
console.dir(user);*/

class User{
	constructor(name,email){
		this.name=name;
		this.email=email;
	}
	// static register(name,email){
	// 	return new User(name,email);
	// }
	static register(...args){
		return new User(...args);
	}
	changeEmail(newEmail) {
		this.email=newEmail;
	}
	get foo(){
		return 'this is from foo() method.';
	}
}

// let user=new User('Peter','a@b.c');
let user=User.register('Peter','a@b.c');

user.changeEmail('second@y.z');

console.log(user);
console.log(user.foo);
