import React from "react";
import { render, screen } from "custom/@testing-library/react";
import { Props as RatingProps } from "molecules/Rating";

import HeroDetails, { Props } from "..";
import userEvent from "@testing-library/user-event";

test("<HeroDetails /> render", () => {
	const props: Props = {
		uid: "123",
		name: "Hulk",
		isFavorited: false,
		onFavorite: jest.fn(),
		description:
			"O Hulk, por vezes referido como O incrível Hulk é um personagem de quadrinhos/banda desenhada do gênero super-herói, propriedade da Marvel Comics, editora pela qual as histórias do personagem são publicados desde sua criação, nos anos 1960.",
		comicBooksTitle: "Quadrinhos",
		comicBooksCount: 3000,
		moviesTitle: "Filmes",
		moviesCount: 40,
		ratingTitle: "Rating:",
		ratingValue: 5 as RatingProps["value"],
		lastComicTitle: "Último quadrinho:",
		lastComicDate: "13 fev. 2020",
	};

	const { rerender } = render(<HeroDetails {...props} />);

	const stringProps: (keyof Props)[] = [];
	for (const key in props) {
		if (Object.prototype.hasOwnProperty.call(props, key)) {
			const element = props[key as keyof Props];
			if (typeof element !== "string" || key === "uid") continue;

			stringProps.push(key as keyof Props);
		}
	}

	for (const prop of stringProps) {
		expect(screen.getByText(props[prop] as string)).toBeInTheDocument();
	}

	expect(screen.getByTitle(/emptyheart/i)).toBeInTheDocument();

	rerender(<HeroDetails {...props} isFavorited={true} />);
	expect(screen.queryByTitle(/emptyheart/i)).not.toBeInTheDocument();

	userEvent.click(screen.getByTitle(/heart/i));

	expect(props.onFavorite).toBeCalled();
});
