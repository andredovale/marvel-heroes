import styled from "styled-components";

import { Typography } from "atoms";

import { HeaderTheme } from ".";

const Container = styled("div")<HeaderTheme>`
	align-items: center;
	display: flex;
	flex-direction: ${({ variant }) =>
		variant === "small" ? "row" : "column"};
`;

const Title = styled(Typography).attrs({
	variant: "head-2",
})`
	margin-top: 1.4375em;
	text-transform: uppercase;
`;

const Subtitle = styled(Typography).attrs({
	variant: "small-2-medium",
})`
	margin-top: 0.5714em;
`;

const Form = styled("form")<HeaderTheme>`
	margin-top: ${({ variant }) => (variant === "small" ? "0" : "3.25em")};
	margin-left: ${({ variant }) => (variant === "small" ? "5.4375em" : "0")};
	width: ${({ variant }) => (variant === "small" ? "48.6395%" : "76.1863%")};
`;

export { Container, Title, Subtitle, Form };
