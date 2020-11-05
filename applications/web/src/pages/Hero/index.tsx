import React, { InputHTMLAttributes, useCallback, useMemo } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import _debounce from "lodash/debounce";
import useAxios from "axios-hooks";

import { Props as HeroCardProps } from "@marvel-heroes/design-system/src/molecules/HeroCard";
import { Props as HeaderProps } from "@marvel-heroes/design-system/src/organisms/Header";
import Hero from "@marvel-heroes/design-system/src/templates/Hero";
import mock from "@marvel-heroes/design-system/src/templates/Hero/__mock__";
import { generateHash } from "@marvel-heroes/utils/src/MarvelHash";
import { useLocalStorage } from "@marvel-heroes/utils/src/Storage";

import { API, FAVORITES_LIMIT } from "contants";

const App = () => {
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

	const { uid } = useParams<{ uid: string }>();

	/** URL config and axios hook to fetch heroes */
	const url = useMemo(() => {
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

		return `${API}v1/public/characters/${uid}?${tokensQuery}`;
	}, [uid]);

	const [
		{
			data: {
				data: {
					results: [hero] = [{ comics: {}, thumbnail: {} }],
				} = {},
			} = {},
			loading,
			error,
		},
	] = useAxios({ url, timeout: 5000 });

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

	return (
		<Hero
			error={!!error}
			errorText="Erro ao carregar herói"
			loading={loading}
			loadingText="Carregando herói"
			heroDetailsProps={{
				uid: String(hero.id),
				name: hero.name,
				isFavorited: favorites.includes(String(hero.id)),
				onFavorite,
				description: hero.description,
				comicBooksTitle: "Quadrinhos",
				comicBooksCount: hero.comics.available,
				moviesTitle: "Filmes",
				moviesCount: "N/A",
				ratingTitle: "Rating:",
				ratingValue: 5,
				lastComicTitle: "Último quadrinho:",
				lastComicDate: "13 fev. 2020",
			}}
			headerProps={{
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
			movieThumbnail={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
			highDefinitionPhoto={
				hero.id === 1009351 ? mock.highDefinitionPhoto : undefined
			}
			comicBooksTitle="Últimos lançamentos"
			comicBooksGridProps={{
				comics: [
					{
						href: "https://www.google.com/",
						target: "_blank",
						uid: "123",
						imageSrc: "https://picsum.photos/400/600",
						name: "Lorem Ipsum Dolor Sit.",
					},
				],
			}}
		/>
	);
};

export default App;
