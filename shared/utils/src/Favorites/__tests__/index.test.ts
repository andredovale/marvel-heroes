import { renderHook, act } from "@testing-library/react-hooks";

import { useFavorite } from "..";

test("useFavorite", async () => {
	window.alert = jest.fn();

	const limit = 2;

	const { result } = renderHook(() => useFavorite(limit));

	expect(result.current.onlyFavorites).toBe("unactive");

	let expected = "active";
	await act(async () => {
		await result.current.onOnlyFavoritesClick();
	});
	expect(result.current.onlyFavorites).toBe(expected);

	expected = "unactive";
	await act(async () => {
		/** Toggle */
		await result.current.onOnlyFavoritesClick();
	});
	expect(result.current.onlyFavorites).toBe(expected);

	expect(result.current.favorites.length).toBe(0);

	await act(async () => {
		await result.current.onFavorite("123", false);
	});
	expect(result.current.favorites.length).toBe(1);

	await act(async () => {
		/**
		 * Toggle: The same id as the previous call
		 */
		await result.current.onFavorite("123", false);
	});
	expect(result.current.favorites.length).toBe(0);

	await act(async () => {
		await result.current.onFavorite("123", false);
		await result.current.onFavorite("456", false);
	});
	expect(result.current.favorites.length).toBe(2);

	await act(async () => {
		await result.current.onFavorite("789", false);
	});
	expect(result.current.favorites.length).toBe(2);
	expect(window.alert).toBeCalled();
});
