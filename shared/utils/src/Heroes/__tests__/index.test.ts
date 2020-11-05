import { abstractHeroes } from "..";
import mock from "../__mocks__/heroes";

test("abstractHeroes empty", () => {
	const result = abstractHeroes([]);

	expect(result.length).toBe(0);
});

test("abstractHeroes valid character", () => {
	const result = abstractHeroes([], mock);

	expect(result.length).toBe(1);
});

test("abstractHeroes valid character, but previous favorited", () => {
	const result = abstractHeroes([String(mock[0].id)], mock);

	expect(result[0].isFavorited).toBe(true);
});
