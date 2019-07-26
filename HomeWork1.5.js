const bestMark    = 'A';
const betterMark  = 'B';
const goodMark    = 'C';
const badMark     = 'D';
const veryBadMark = 'E';
const worstMark   = 'F';
const getMarkByRate = (rate) => {
	if(0 < rate && rate < 19) {
		return `Your mark is ${WorstMark}`;
	}else if(20 < rate && rate < 39) {
		return `Your mark is ${VeryBadMark}`;
	}else if(40 < rate && rate < 59) {
		return `Your mark is ${BadMark}`;
	}else if(60 < rate && rate < 74) {
		return `Your mark is ${GoodMark}`;
	}else if(75 < rate && rate < 89) {
		return `Your mark is ${BetterMark}`;
	}else if(90 < rate && rate < 100) {
		return `Your mark is ${BestMark}`;
	};
};

