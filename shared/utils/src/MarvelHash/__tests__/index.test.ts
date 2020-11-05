import { generateHash } from "..";

test("generateHash", () => {
	const result = generateHash("1", "1234", "abcd");

	/** This value?
	 * See: https://developer.marvel.com/documentation/authorization
	 */
	expect(result).toBe("ffd275c5130566a2916217b101f26150");
});
