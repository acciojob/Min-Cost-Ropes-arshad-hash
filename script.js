function mincost(arr)
{ 
//write your code here
// return the min cost
	// I have sorted the array
	arr.sort((a, b)=>a-b);

	//creating a variable for storing total cost
	const total=0;

	//need loop for iterate

	while (arr.length>1) {
		let min1=arr.shift();
		let min2=arr.shift();

		let costOfTwo= min1+min2;

		// i nead to add this total
		total=total+costOfTwo;

		//need to push this total into the arr
		arr.push(costOfTwo);

		arr.sort((a, b)=>a-b);
		
		
	}
	return total;
  
}

mincost(arr);
