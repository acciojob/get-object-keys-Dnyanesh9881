//your JS code here. If required.
const student={
	name:'gaju',
}
Object.prototype.getKeys=function () {
	let arr=[];
	let j=0;
	for(let i in this){
		arr[j]=i;
		j++;
	}
	return arr;
}