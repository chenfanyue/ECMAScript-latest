function log(strategy) {
	strategy.handle();
}
log(new class {
	handle(){
		console.log('console strategy logger.');
	}
});
