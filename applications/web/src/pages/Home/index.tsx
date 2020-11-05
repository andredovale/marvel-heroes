import React, {
	InputHTMLAttributes,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import _debounce from "lodash/debounce";
import useAxios from "axios-hooks";

import { Props as ToggleProps } from "@marvel-heroes/design-system/src/atoms/Toggle";
import { Props as HeroCardProps } from "@marvel-heroes/design-system/src/molecules/HeroCard";
import { Props as HeaderProps } from "@marvel-heroes/design-system/src/organisms/Header";
import Home from "@marvel-heroes/design-system/src/templates/Home";
import { abstractHeroes } from "@marvel-heroes/utils/src/Heroes";
import { generateHash } from "@marvel-heroes/utils/src/MarvelHash";
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

	/** Search value, change and submit */
	/** Value in browser storage */
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

		const ts = String(+new Date());
		const tokensQuery = new URLSearchParams({
			ts,
			apikey: process.env.REACT_APP_MARVEL_PUBLIC as string,
			hash: generateHash(
				ts,
				process.env.REACT_APP_MARVEL_PUBLIC as string,
				process.env.REACT_APP_MARVEL_PRIVATE as string
			),
		}).toString();

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

	/** Favorites button (toggle mode) */
	const [
		onlyFavorites = "unactive",
		{ set: setOnlyFavorites },
	] = useLocalStorage("marvelHeroes.search.settings.onlyFavorites");

	const onButtonClick = () => {
		setOnlyFavorites(onlyFavorites === "unactive" ? "active" : "unactive");
	};

	/** Favorites heroes collection on browser storage */
	const [favorites = [], { set: setFavorites }] = useLocalStorage(
		"marvelHeroes.heroes.favorites"
	);

	const onFavorite: HeroCardProps["onFavorite"] = (uid) => {
		if (favorites.includes(uid)) {
			const index = (favorites as string[]).findIndex(
				(favoritedUid) => uid === favoritedUid
			);
			setFavorites([
				...favorites.slice(0, index),
				...favorites.slice(index + 1),
			]);
		} else {
			if (favorites.length >= FAVORITES_LIMIT) {
				alert(`Limite de ${FAVORITES_LIMIT} heróis favoritos atingido`);
			} else {
				setFavorites([...favorites, uid]);
			}
		}
	};

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
