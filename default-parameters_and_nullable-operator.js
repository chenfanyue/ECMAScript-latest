function applyDiscount(cost, discount){
	console.log(discount);
	discount=discount||.10; // nullable operator.
	return cost-(cost*discount);
}

alert(applyDiscount(100,0.50));
alert(applyDiscount(100));
