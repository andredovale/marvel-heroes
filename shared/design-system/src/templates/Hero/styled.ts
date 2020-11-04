import styled from "styled-components";
import { darken } from "polished";

import { Typography } from "atoms";
import { colors } from "quarks";

import { HeroTheme } from ".";

const Container = styled("div")<HeroTheme>`
	background-color: ${({ backgroundColor }) => backgroundColor};
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: hidden;
`;

const Wrapper = styled("div")`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 86.0908vw;
	width: 100%;
`;

const Header = styled("header")`
	padding: 2.9283vw 0 9.0776vw;
`;

const Content = styled("main")`
	flex: 1 0 auto;
	padding: 0 5.3571% 0 2.551%;
`;

const Article = styled("article")`
	padding: 0 72.6685% 0 1.2927%;
	position: relative;
	z-index: 1;

	> * {
		position: relative;
		z-index: 1;
	}
`;

const BigHero = styled(Typography).attrs({
	color: "white",
	lineHeight: 1,
	opacity: 0.5,
	variant: "hero-bg",
})`
	left: 59.5238%;
	position: absolute;
	text-transform: uppercase;
	top: -2.2694vw;
	transform: translateX(-50%);
	z-index: -1;
`;

const MovieThumbnail = styled("img")<HeroTheme>`
	box-shadow: 0 0 3.125em
		${({ backgroundColor }) => darken(0.3, backgroundColor)};
	left: 39.8892%;
	position: absolute;
	top: 6.1493vw;
	width: 24.3767%;
	z-index: 1;
`;

const HighDefinitionPhoto = styled("img")`
	left: 45.2447%;
	position: absolute;
	top: -10.3953vw;
	width: 52.6316%;
	z-index: 2;
`;

const ComicBooksTitle = styled(Typography).attrs({
	variant: "head-3",
})`
	margin-top: 6.375em;
	margin-bottom: 2.7917em;
`;

const NoContent = styled(Typography).attrs({
	color: "scarlet",
	variant: "head-3",
})`
	margin: 4em auto;
	text-align: center;
`;

const Footer = styled("footer")`
	background: ${colors.scarlet};
	height: 5em;
	margin-top: 9.25em;
`;

export {
	Container,
	Wrapper,
	Header,
	Content,
	Article,
	BigHero,
	MovieThumbnail,
	HighDefinitionPhoto,
	ComicBooksTitle,
	NoContent,
	Footer,
};
