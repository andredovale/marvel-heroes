import { renderHook, act } from "@testing-library/react-hooks";

import { useSearch } from "..";

test("useSearch", async () => {
	const push = jest.fn();

	// @ts-ignore
	const { result } = renderHook(() => useSearch(() => ({ push })));

	expect(result.current.savedValue).toBe("");

	const expected = "teste";
	await act(async () => {
		await result.current.debouncedSetSavedValue(expected);

		await new Promise((resolve) => setTimeout(resolve, 300));
	});

	expect(result.current.savedValue).toBe(expected);

	const expectedOnChange = "teste";
	await act(async () => {
		await result.current.onChange({
			// @ts-ignore
			currentTarget: { value: expectedOnChange },
		});

		await new Promise((resolve) => setTimeout(resolve, 300));
	});

	expect(result.current.savedValue).toBe(expectedOnChange);

	await act(async () => {
		// @ts-ignore
		await result.current.onSubmit({}, "teste");
	});

	expect(push).toBeCalledWith("/");

	await act(async () => {
		/**
		 * Submitted with the same value stored on browser
		 */
		// @ts-ignore
		await result.current.onSubmit({}, "teste2");

		await new Promise((resolve) => setTimeout(resolve, 300));
	});

	expect(result.current.savedValue).toBe("teste2");
});
