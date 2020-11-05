import { InputHTMLAttributes, useCallback } from "react";
import { useHistory } from "react-router-dom";
import _debounce from "lodash/debounce";

import { Props as HeaderProps } from "@marvel-heroes/design-system/src/organisms/Header";

import { useLocalStorage } from "Storage";

const useSearch = () => {
	const [savedValue = "", { set: setSavedValue }] = useLocalStorage(
		"marvelHeroes.search.input.value"
	);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedSetSavedValue = useCallback(
		_debounce(setSavedValue, 300),
		[]
	);

	const onChange: InputHTMLAttributes<HTMLInputElement>["onChange"] = (
		event
	) => {
		debouncedSetSavedValue(event.currentTarget.value);
	};

	const { push } = useHistory();

	const onSubmit: HeaderProps["onSubmit"] = (_, value) => {
		if (value !== savedValue) {
			debouncedSetSavedValue(value);
		}

		push("/");
	};

	return {
		savedValue,
		debouncedSetSavedValue,
		onChange,
		onSubmit,
	};
};

export { useSearch };
