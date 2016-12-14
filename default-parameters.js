function applyDiscount(cost, discount = 0.10){
	console.log(discount);
	return cost*(1-discount);
}

alert(applyDiscount(100,0.50));
alert(applyDiscount(100));

/*
function defaultValue(){
	return 0.10;
}

function applyDiscount(cost, discount = defaultValue()){
	console.log(discount);
	return cost*(1-discount);
}

alert(applyDiscount(100,0.50));
alert(applyDiscount(100));
*/
