// @ts-nocheck
import React from "react";

import Home from "@marvel-heroes/design-system/src/templates/Home";

const App = () => (
	<Home
		headerProps={{
			title: "Explore o universo",
			subtitle:
				"Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!",
			// eslint-disable-next-line no-console
			onSubmit: (_, value) => console.log({ value }),
			searchFieldProps: {
				inputTextProps: {
					value: "lorem ipsum",
				},
			},
		}}
		noContentText="Nenhum herói encontrado"
		searchHeaderProps={{
			title: "Encontrados 20 heróis",
			toggleText: "Ordenar por nome - A/Z",
			onToggle: (event) =>
				// eslint-disable-next-line no-console
				console.log({ onToggle: event.currentTarget.checked }),
			buttonIcons: { active: "Heart", unactive: "EmptyHeart" },
			onButtonClick: (event) =>
				// eslint-disable-next-line no-console
				console.log({ onButtonClick: event.currentTarget.value }),
			buttonState: "unactive",
			buttonText: "Somente favoritos",
		}}
		heroesGridProps={{
			heroes: [
				{
					href: "https://www.google.com/",
					target: "_blank",
					uid: "123",
					imageSrc: "https://picsum.photos/400/600",
					name: "Star-Lord",
					isFavorited: false,
				},
				{
					href: "https://www.google.com/",
					target: "_blank",
					uid: "456",
					imageSrc: "https://picsum.photos/400/600",
					name: "Star-Lord",
					isFavorited: false,
				},
			],
			// eslint-disable-next-line no-console
			onFavorite: (uid) => console.log({ uid }),
		}}
	/>
);

export default App;
