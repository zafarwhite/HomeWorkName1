
const BestMark    = 'A';
const BetterMark  = 'B';
const GoodMark    = 'C';
const BadMark     = 'D';
const VeryBadMark = 'E';
const WorstMark   = 'F';


const Rate = (rate) => {
	if(0<rate && rate<19){
		console.log(`Your mark is ${WorstMark}`);
	}else if(20<rate && rate<39){
		console.log(`Your mark is ${VeryBadMark}`);
	}else if(40<rate && rate<59){
		console.log(`Your mark is ${BadMark}`);
	}else if(60<rate && rate<74){
		console.log(`Your mark is ${GoodMark}`);
	}else if(75<rate && rate<89){
		console.log(`Your mark is ${BetterMark}`);
	}else if(90<rate && rate<100){
		console.log(`Your mark is ${BestMark}`);
	}
};

Rate(25);

