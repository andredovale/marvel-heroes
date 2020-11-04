import { renderHook, act } from "@testing-library/react-hooks";

import { useStorage } from "../useStorage";

test("useStorage with localStorage", async () => {
	const { result } = renderHook(() =>
		useStorage("lorem.ipsum", "localStorage")
	);

	expect(result.current[0]).toBeUndefined();

	const expected = "Lorem ipsum";
	await act(async () => {
		await result.current[1].set(expected);
	});
	expect(result.current[0]).toBe(expected);

	await act(async () => {
		await result.current[1].remove();
	});
	expect(result.current[0]).toBeUndefined();
});

test("useStorage with array as path", async () => {
	const { result } = renderHook(() =>
		useStorage(["dolor", "sit"], "localStorage")
	);

	expect(result.current[0]).toBeUndefined();

	const expected = "Lorem ipsum";
	await act(async () => {
		await result.current[1].set(expected);
	});
	expect(result.current[0]).toBe(expected);
});

test("useStorage try to remove without value", async () => {
	const { result } = renderHook(() => useStorage("0.lorem", "localStorage"));

	expect(result.current[0]).toBeUndefined();

	await act(async () => {
		await result.current[1].remove();
	});
	expect(result.current[0]).toBeUndefined();
});
