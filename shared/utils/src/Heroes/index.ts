import { Link } from "react-router-dom";
import { Character } from "./types";

const abstractHeroes = (favorites: string[], results?: Character[]) =>
	results
		? results.map((character) => ({
				as: Link,
				to: String(character.id),
				uid: String(character.id),
				imageSrc: `${character.thumbnail.path}.${character.thumbnail.extension}`,
				name: character.name,
				isFavorited: favorites.includes(String(character.id)),
		  }))
		: [];

export { abstractHeroes };
