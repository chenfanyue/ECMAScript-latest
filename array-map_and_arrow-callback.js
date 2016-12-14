let names=['a','b','c'];

names=names.map(function(name){
	return name+' is cool';
});

// names=names.map(name=>name + ' is cool');

// names=names.map(name=>`${name} is cool`);

console.log(names);
