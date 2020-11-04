// @ts-nocheck
import React, { useState } from "react";

import { useLocalStorage } from "@marvel-heroes/utils/src/Storage";
import Home from "@marvel-heroes/design-system/src/templates/Home";

const frozen = {
	headerProps: {
		title: "Explore o universo",
		subtitle:
			"Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!",
	},
	noContentText: "Nenhum herói encontrado",
	searchHeaderProps: {
		toggleText: "Ordenar por nome - A/Z",
		buttonIcons: { active: "Heart", unactive: "EmptyHeart" },
		buttonText: "Somente favoritos",
	},
};

const App = () => {
	const [
		onlyFavorites = "unactive",
		{ set: setOnlyFavorites },
	] = useLocalStorage("marvelHeroes.search.settings.onlyFavorites");

	const onButtonClick = (event) => {
		setOnlyFavorites(onlyFavorites === "unactive" ? "active" : "unactive");
	};

	const [orderByName = false, { set: setOrderByName }] = useLocalStorage(
		"marvelHeroes.search.settings.orderByName"
	);

	const onToggle = (event) => {
		setOrderByName(event.currentTarget.checked);
	};

	const [savedValue = "", { set: setSavedValue }] = useLocalStorage(
		"marvelHeroes.search.input.value"
	);
	const [value, setValue] = useState(savedValue);
	const onChange = (event) => {
		setValue(event.currentTarget.value);

		// TODO: debounce this and search
		// setSavedValue(event.currentTarget.value);
	};

	const [favorites = [], { set: setFavorites }] = useLocalStorage(
		"marvelHeroes.heroes.favorites"
	);
	// eslint-disable-next-line no-console
	console.log("App -> favorites", favorites);
	const onFavorite = (uid) => {
		if (favorites.includes(uid)) {
			const index = favorites.findIndex(
				(favoritedUid) => uid === favoritedUid
			);
			setFavorites([
				...favorites.slice(0, index),
				...favorites.slice(index + 1),
			]);
		} else {
			setFavorites([...favorites, uid]);
		}
	};
	const heroes = [
		{
			href: "https://www.google.com/",
			target: "_blank",
			uid: "123",
			imageSrc: "https://picsum.photos/400/600",
			name: "Star-Lord",
			isFavorited: favorites.includes("123"),
		},
		{
			href: "https://www.google.com/",
			target: "_blank",
			uid: "456",
			imageSrc: "https://picsum.photos/400/600",
			name: "Star-Lord",
			isFavorited: favorites.includes("456"),
		},
	];

	return (
		<Home
			headerProps={{
				...frozen.headerProps,
				// eslint-disable-next-line no-console
				onSubmit: (_, value) => console.log({ value }),
				searchFieldProps: {
					inputTextProps: {
						onChange,
						value: value,
					},
				},
			}}
			noContentText={frozen.noContentText}
			searchHeaderProps={{
				...frozen.searchHeaderProps,
				title:
					heroes.length === 1
						? "Encontrado um herói"
						: `Encontrados ${heroes.length} heróis`,
				toggleChecked: orderByName,
				onToggle,
				onButtonClick,
				buttonState: onlyFavorites,
			}}
			heroesGridProps={{
				heroes:
					onlyFavorites === "active"
						? heroes.filter(({ isFavorited }) => isFavorited)
						: heroes,
				// eslint-disable-next-line no-console
				onFavorite,
			}}
		/>
	);
};

export default App;
