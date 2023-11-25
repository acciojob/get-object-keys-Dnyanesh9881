//your JS code here. If required.
const student={
	name:'gaju',
}
Object.prototype.getKeys=function (student) {
	let arr=[];
	let j=0;
	for(let i in student){
		arr[j]=i;
		
		j++;
	}
	return arr;
}