import { generateHash, getTokens } from "..";

test("generateHash", () => {
	const result = generateHash("1", "1234", "abcd");

	/** This value?
	 * See: https://developer.marvel.com/documentation/authorization
	 */
	expect(result).toBe("ffd275c5130566a2916217b101f26150");
});

test("getTokens", () => {
	const mockedDate = new Date(1);
	//@ts-ignore
	jest.spyOn(global, "Date").mockImplementation(() => mockedDate);

	const result = getTokens("1234", "abcd");

	expect(result).toBe(
		"ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150"
	);
});
