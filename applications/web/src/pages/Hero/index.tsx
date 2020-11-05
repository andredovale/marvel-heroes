import React, { useMemo } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import useAxios from "axios-hooks";

import Hero from "@marvel-heroes/design-system/src/templates/Hero";
import { useSearch } from "@marvel-heroes/utils/src/Search";
import { useFavorite } from "@marvel-heroes/utils/src/Favorites";
import { getTokens } from "@marvel-heroes/utils/src/MarvelHash";

import { API, FAVORITES_LIMIT } from "contants";

const hulk =
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dcms8q0-782bfe57-6cfc-40a5-a96d-4db390d0180d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWI4ZDJiMTItMjFlOC00OTMxLThhNmQtZmI5ZWNkZDYwMzgzXC9kY21zOHEwLTc4MmJmZTU3LTZjZmMtNDBhNS1hOTZkLTRkYjM5MGQwMTgwZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.iw-isL2nElIjiymCT6KgzVwA2D1FAM9ZYFzU0bipqak";

type Comic = {
	urls: { type: string; url: string }[];
	id: number;
	thumbnail: {
		path: string;
		extension: string;
	};
	title: string;
	dates: { type: string; date: string }[];
};

const App = () => {
	const { savedValue, onChange, onSubmit } = useSearch(useHistory);

	const { uid } = useParams<{ uid: string }>();

	/** URL config and axios hook to fetch heroes */
	const url = useMemo(() => {
		const tokensQuery = getTokens(
			process.env.REACT_APP_MARVEL_PUBLIC as string,
			process.env.REACT_APP_MARVEL_PRIVATE as string
		);

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

	/** URL config and axios hook to fetch last comics from hero */
	const comicUrl = useMemo(() => {
		const comicsQuery = new URLSearchParams({
			orderBy: "-onsaleDate",
			limit: "10",
		}).toString();

		const tokensQuery = getTokens(
			process.env.REACT_APP_MARVEL_PUBLIC as string,
			process.env.REACT_APP_MARVEL_PRIVATE as string
		);

		return `${API}v1/public/characters/${uid}/comics?${comicsQuery}&${tokensQuery}`;
	}, [uid]);

	const [{ data: { data: { results: comics = [] } = {} } = {} }] = useAxios({
		url: comicUrl,
		timeout: 5000,
	});

	const { favorites, onFavorite } = useFavorite(FAVORITES_LIMIT);

	const lastComicDate = () => {
		if (!comics.length) return "N/A";

		const dateFinded = (comics as Comic[])[0].dates.find(
			(date) => date.type === "onsaleDate"
		)?.date;

		if (dateFinded)
			return new Date(dateFinded).toLocaleDateString("pt-BR", {
				day: "numeric",
				month: "short",
				year: "numeric",
			});

		return "N/A";
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
				moviesCount: "N/A", // Marvel API is comic only
				ratingTitle: "Rating:",
				ratingValue: 5, // Marvel API don't have this info
				lastComicTitle: "Último quadrinho:",
				lastComicDate: lastComicDate(),
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
				String(hero.id) === "1009351" ? hulk : undefined
			}
			comicBooksTitle="Últimos lançamentos"
			comicBooksGridProps={{
				comics: comics.map((comic: Comic) => ({
					href: comic.urls.find((url) => url.type === "detail")?.url,
					target: "_blank",
					uid: String(comic.id),
					imageSrc: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
					name: comic.title,
				})),
			}}
		/>
	);
};

export default App;
