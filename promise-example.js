let timer = function(time) {
	return new Promise((resolve, reject)=>{
		setTimeout(function () {
			resolve();
		}, time);
	});
};

timer(2000).then(function () {
	alert('the promise resolved msg.');
});
