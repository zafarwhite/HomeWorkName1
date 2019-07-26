factorial = (n) => {
	return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(9)); // 362880
console.log(factorial(3)); // 6