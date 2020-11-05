import { Props as HeroCardProps } from "@marvel-heroes/design-system/src/molecules/HeroCard";

import { useLocalStorage } from "Storage";

const useFavorite = (limit: number) => {
	const [
		onlyFavorites = "unactive",
		{ set: setOnlyFavorites },
	] = useLocalStorage("marvelHeroes.search.settings.onlyFavorites");

	const onOnlyFavoritesClick = () => {
		setOnlyFavorites(onlyFavorites === "unactive" ? "active" : "unactive");
	};

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
			if (favorites.length >= limit) {
				alert(`Limite de ${limit} heróis favoritos atingido`);
			} else {
				setFavorites([...favorites, uid]);
			}
		}
	};

	return { onlyFavorites, onOnlyFavoritesClick, favorites, onFavorite };
};

export { useFavorite };
