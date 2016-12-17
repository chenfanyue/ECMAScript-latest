function getPerson() {
	let name='John';
	let age=25;
	return {
		name,
		age,
		/*
		greet:function() {
			return 'hi '+this.name;
		}*/
		greet() {
			// return 'hi '+this.name;
			return `hi ${this.name}`;
		}
	}
}
console.log(getPerson().greet());
