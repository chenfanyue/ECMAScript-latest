var promise = this.$http.get('/some/url');

promise.then(function(data) {

}, function(err) {

});

// or
promise.then(function(data) {

}).catch(function(err) {

});

// or
promise.then(function(data) {

});
promise.catch(function(err) {

});
