import { Props } from ".";

const mock: Props = {
	headerProps: {
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
	},
	error: false,
	errorText: "Erro ao solicitar a lista de heróis",
	loading: false,
	loadingText: "Buscando pelos heróis",
	noFavorite: false,
	noFavoriteText: "Nenhum herói favorito dentre a lista de encontrados",
	noDataText: "Nenhum herói encontrado",
	searchHeaderProps: {
		title: "Encontrados 20 heróis",
		toggleText: "Ordenar por nome - A/Z",
		toggleChecked: false,
		onToggle: (event) =>
			// eslint-disable-next-line no-console
			console.log({ onToggle: event.currentTarget.checked }),
		buttonIcons: { active: "Heart", unactive: "EmptyHeart" },
		onButtonClick: (event) =>
			// eslint-disable-next-line no-console
			console.log({ onButtonClick: event.currentTarget.value }),
		buttonState: "unactive",
		buttonText: "Somente favoritos",
	},
	heroesGridProps: {
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
	},
};

export default mock;
