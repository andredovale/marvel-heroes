import { useEffect, useState } from "react";
import _get from "lodash/get";
import _set from "lodash/set";
import _unset from "lodash/unset";

import { Path, Storage } from "./types";

const pathRoot = (path: Path) =>
	Array.isArray(path) ? path[0] : path.split(".")[0];

const pathRest = (path: Path) => {
	let newPath;
	if (Array.isArray(path)) {
		newPath = path.slice(1).join(".");
	} else {
		const pathToArray = path.split(".");
		pathToArray.shift();

		newPath = pathToArray.join(".");
	}
	return newPath;
};

const useStorage = (path: Path, storage: Storage) => {
	const [root, setRoot] = useState(pathRoot(path));
	const [rest, setRest] = useState(pathRest(path));

	useEffect(() => {
		setRoot(pathRoot(path));
		setRest(pathRest(path));
	}, [path]);

	const [state, setState] = useState(
		_get(JSON.parse(window[storage].getItem(root) || "{}"), rest)
	);

	const set = (value: any) => {
		setState(value);

		const currentStorage = JSON.parse(
			window[storage].getItem(root) || "{}"
		);

		_set(currentStorage, rest, value);

		window[storage].setItem(root, JSON.stringify(currentStorage));
	};

	const remove = () => {
		setState(undefined);

		const currentStorage = JSON.parse(
			window[storage].getItem(root) || "{}"
		);

		_unset(currentStorage, rest);

		window[storage].setItem(root, JSON.stringify(currentStorage));
	};

	return [
		state,
		{
			set,
			remove,
		},
	];
};

export { useStorage as default, useStorage };
