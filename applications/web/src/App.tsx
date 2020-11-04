import React from "react";

import { Props as Hero } from "@marvel-heroes/design-system/src/molecules/HeroCard";
import Home from "@marvel-heroes/design-system/src/templates/Home";
import mock from "@marvel-heroes/design-system/src/templates/Home/__mock__";

const newHeroes = mock.heroesGridProps.heroes.map((hero: Hero) => ({
	...hero,
	href: hero.name,
	target: "_self",
}));

function App() {
	return (
		<>
			<Home
				{...mock}
				heroesGridProps={{ ...mock.heroesGridProps, heroes: newHeroes }}
			/>
		</>
	);
}

export default App;
