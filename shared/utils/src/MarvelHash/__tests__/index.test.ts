import { generateHash } from "..";

test("generateHash", () => {
	const result = generateHash("A", "B");

	expect(typeof result).toBe("string");
	expect(result.length).toBeGreaterThan(0);
});
