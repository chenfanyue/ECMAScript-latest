class TaskCollection {
	constructor(tasks=[]){
		this.tasks=tasks;
	}
	log(){
		this.tasks.forEach((task,index)=>
			console.log(task,index)
		);
	}
	prepare(){
		this.tasks.forEach(task=>{
			console.log(this);
		});
		/*
		this.tasks.forEach(function(task){
			console.log(this); // undefined!
		});
		*/
	}
}
class Task{
	toGulp(){
		console.log('converting to Gulp');
	}
}
new TaskCollection([
	new Task, new Task, new Task
]).prepare();
