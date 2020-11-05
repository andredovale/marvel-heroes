import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import useAxios from "axios-hooks";

import { Props as ToggleProps } from "@marvel-heroes/design-system/src/atoms/Toggle";
import { Props as HeaderProps } from "@marvel-heroes/design-system/src/organisms/Header";
import Home from "@marvel-heroes/design-system/src/templates/Home";
import { useSearch } from "@marvel-heroes/utils/src/Search";
import { useFavorite } from "@marvel-heroes/utils/src/Favorites";
import { abstractHeroes } from "@marvel-heroes/utils/src/Heroes";
import { getTokens } from "@marvel-heroes/utils/src/MarvelHash";
import { useLocalStorage } from "@marvel-heroes/utils/src/Storage";

import { API, FAVORITES_LIMIT } from "contants";

const frozen = {
	headerProps: {
		title: "Explore o universo",
		subtitle:
			"Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!",
	},
	searchHeaderProps: {
		buttonIcons: { active: "Heart", unactive: "EmptyHeart" },
		buttonText: "Somente favoritos",
	},
};

const App = () => {
	/** URL reset */
	const { replace } = useHistory();
	const { pathname } = useLocation();
	useEffect(() => {
		if (pathname !== "/") replace("/");
	}, [pathname, replace]);

	const { savedValue, debouncedSetSavedValue, onChange } = useSearch(
		useHistory
	);

	/** Order by name toggle config;
	 * Before onSubmit to use refetch
	 * Before URL config because cause impact in the fetch params
	 */
	const [orderByName = false, { set: setOrderByName }] = useLocalStorage(
		"marvelHeroes.search.settings.orderByName"
	);

	const onToggle: ToggleProps["onChange"] = (event) => {
		setOrderByName(event.currentTarget.checked);
	};

	/** URL config and axios hook to fetch heroes */
	const url = useMemo(() => {
		const charactersQuery = new URLSearchParams({
			...(orderByName === true ? { orderBy: "-name" } : {}),
			nameStartsWith: savedValue,
			limit: "20",
		}).toString();

		const tokensQuery = getTokens(
			process.env.REACT_APP_MARVEL_PUBLIC as string,
			process.env.REACT_APP_MARVEL_PRIVATE as string
		);

		return `${API}v1/public/characters?${charactersQuery}&${tokensQuery}`;
	}, [orderByName, savedValue]);

	const [{ data, loading, error }, execute] = useAxios(
		{ url, timeout: 5000 },
		{ manual: true }
	);

	/** This approach is necessary, because on consecutives submits,
	 * the useEffect don't run
	 */
	const onSubmit: HeaderProps["onSubmit"] = (_, value) => {
		if (value === savedValue) return execute();

		debouncedSetSavedValue(value);
	};

	/** Only run when change the value on browser storage */
	useEffect(() => {
		!!savedValue && execute();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [savedValue, orderByName]);

	const {
		onlyFavorites,
		onOnlyFavoritesClick: onButtonClick,
		favorites,
		onFavorite,
	} = useFavorite(FAVORITES_LIMIT);

	/** Local data of heroes (based on result of fetch) on needed format */
	const [heroes, setHeroes] = useState(
		abstractHeroes(favorites, data?.data.results)
	);

	useEffect(() => {
		if (!data) return;

		const {
			data: { results },
		} = data;

		setHeroes(abstractHeroes(favorites, results));
	}, [data, favorites]);

	return (
		<Home
			headerProps={{
				...frozen.headerProps,
				onSubmit,
				searchFieldProps: {
					inputTextProps: {
						onChange,
						value: savedValue,
					},
				},
				logoWithSloganProps: {
					logoProps: {
						as: Link,
						to: "/",
					},
				},
			}}
			searchHeaderProps={{
				...frozen.searchHeaderProps,
				toggleText: `Ordenar por nome - ${orderByName ? "Z/A" : "A/Z"}`,
				title:
					heroes.length === 1
						? "Encontrado um herói"
						: `Encontrados ${heroes.length} heróis`,
				toggleChecked: orderByName,
				onToggle,
				onButtonClick,
				buttonState: onlyFavorites,
			}}
			error={!!error}
			errorText="Erro ao solicitar a lista de heróis"
			loading={loading}
			loadingText="Buscando pelos heróis"
			noFavorite={
				onlyFavorites === "active" &&
				!heroes.some(({ isFavorited }) => isFavorited)
			}
			noFavoriteText="Nenhum herói favorito dentre a lista de encontrados"
			noDataText="Nenhum herói encontrado"
			heroesGridProps={{
				heroes:
					onlyFavorites === "active"
						? heroes.filter(({ isFavorited }) => isFavorited)
						: heroes,
				onFavorite,
				error,
				loading,
			}}
		/>
	);
};

export default App;
