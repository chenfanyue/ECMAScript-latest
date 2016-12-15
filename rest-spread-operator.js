// rest operator
function sum(...numbers){
	console.log('numbers ', numbers);
	return numbers.reduce(function(prev, current){
		console.log(prev, current);
		return prev + current;
	});
}

console.log('result ', sum(1,2,3,4));


// spread operator
function sum(x, y){
	return x+y;
}

let numbers=[1,2];

console.log(sum(...numbers));
