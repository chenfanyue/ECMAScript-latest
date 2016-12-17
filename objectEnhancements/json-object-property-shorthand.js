function getPerson() {
	let name='John';
	let age=25;
	return {
		/* legacy style
		name:name,
		age:age*/
		name,
		age
	}
}
alert(getPerson().name);
console.log(getPerson());
