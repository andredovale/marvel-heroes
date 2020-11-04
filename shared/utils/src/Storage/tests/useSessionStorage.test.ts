import { renderHook, act } from "@testing-library/react-hooks";

import { useSessionStorage } from "../useSessionStorage";

test("useSessionStorage with localStorage", async () => {
	const { result } = renderHook(() => useSessionStorage("lorem.ipsum"));

	expect(result.current[0]).toBeUndefined();

	const expected = "Lorem ipsum";
	await act(async () => {
		await result.current[1].set(expected);
	});
	expect(result.current[0]).toBe(expected);
});
