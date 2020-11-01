import { sum, sumClosure } from "../tests";

test("sum", () => {
	expect(sum(1, 2)).toBe(3);
});

test("sumClosure", () => {
	expect(sumClosure(1, 2)).toBe(4);
});
