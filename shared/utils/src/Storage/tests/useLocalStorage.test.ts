import { renderHook, act } from "@testing-library/react-hooks";

import { useLocalStorage } from "../useLocalStorage";

test("useLocalStorage with localStorage", async () => {
	const { result } = renderHook(() => useLocalStorage("lorem.ipsum"));

	expect(result.current[0]).toBeUndefined();

	const expected = "Lorem ipsum";
	await act(async () => {
		await result.current[1].set(expected);
	});
	expect(result.current[0]).toBe(expected);
});
