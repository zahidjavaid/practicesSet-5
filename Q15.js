for(let prmNum=1; prmNum<=1000; prmNum++){
	let primeNumber = true;
	for(let j=2; j=prmNum-1; j++){
		if(prmNum%2===0){
			primeNumber = false;
		}
	}
	if(primeNumber===true){
	console.log(prmNum);
}
}

// for(let primeNumber=1; primeNumber<=1000; primeNumber++){
// 	let prime = true;
// 	for(let j=2; j<=primeNumber-1; j++){
// 		if(primeNumber%j===0){
// 			prime = false;
// 		}
// 	}
// 	if(prime === true){
// 		console.log(primeNumber);
// 	}
// }