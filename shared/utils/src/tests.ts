const sum = (a: number, b: number) => a + b;

const sumClosure = (a: number, b: number) => {
	const c = a + b;

	return sum(c, 1);
};

export { sum, sumClosure };
