import styled from "styled-components";

import { Typography } from "atoms";
import { colors } from "quarks";

const Container = styled("div")`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const Wrapper = styled("div")`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 83.3089vw;
	width: 100%;
`;

const Header = styled("header")`
	padding: 4.5388vw 0 5.8565vw;
`;

const Content = styled("main")`
	flex: 1 0 auto;
	padding: 0 1.7575% 0 2.1968%;
`;

const Spacer = styled("hr")`
	border: none;
	color: transparent;
	height: 2.4375em;
	margin: 0;
`;

const Warning = styled(Typography).attrs({
	color: "scarlet",
	variant: "head-3",
})`
	margin: 4em auto;
	text-align: center;
`;

const Footer = styled("footer")<{ noValue: boolean }>`
	background: ${colors.scarlet};
	height: 5.8565vw;
	margin-top: ${({ noValue }) => (noValue ? "auto" : "11.0541vw")};
`;

export { Container, Wrapper, Header, Content, Spacer, Warning, Footer };
