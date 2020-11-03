import React from "react";
import { Story, Meta } from "@storybook/react";

import { default as Source, Props } from ".";

export default {
	title: "Organisms/HeroDetails",
	component: Source,
} as Meta;

const style = { width: 282 };

export const HeroDetails: Story<Props> = (args) => (
	<div style={style}>
		<Source {...args} />
	</div>
);

HeroDetails.args = {
	name: "Hulk",
	isFavorited: false,
	description:
		"O Hulk, por vezes referido como O incrível Hulk é um personagem de quadrinhos/banda desenhada do gênero super-herói, propriedade da Marvel Comics, editora pela qual as histórias do personagem são publicados desde sua criação, nos anos 1960.",
	comicBooksTitle: "Quadrinhos",
	comicBooksCount: 3000,
	moviesTitle: "Filmes",
	moviesCount: 40,
	ratingTitle: "Rating:",
	ratingValue: 5,
	lastComicTitle: "Último quadrinho:",
	lastComicDate: "13 fev. 2020",
};

HeroDetails.parameters = {
	layout: "centered",
};
