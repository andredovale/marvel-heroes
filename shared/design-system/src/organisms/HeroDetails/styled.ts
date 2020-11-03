import styled from "styled-components";

import { Typography } from "atoms";

const Container = styled("div")`
	display: flex;
	flex-direction: column;
`;

const Header = styled("div")`
	align-items: center;
	display: flex;
	justify-content: space-between;

	> :last-child {
		margin-top: -0.375em;
		margin-right: 0.625em;
	}
`;

const Name = styled(Typography).attrs({
	variant: "head-1",
})`
	text-transform: uppercase;
`;

const Description = styled(Typography).attrs({
	color: "gray",
	lineHeight: 1.9,
})`
	margin-top: 1.7em;
`;

const Counters = styled("div")`
	display: flex;
	justify-content: space-between;
	margin-top: 2em;
	margin-bottom: 1.8125em;
	padding-right: 2.625em;
`;

const Counter = styled("div")`
	display: inline-flex;
	flex-direction: column;
`;

const CounterTitle = styled(Typography).attrs({
	variant: "small-1",
})`
	margin-bottom: 1.0833em;
	padding-left: 0.1667em;
`;

const RatingTitle = styled(Typography).attrs({
	variant: "small-2-semibold",
})`
	display: inline-flex;
	margin-right: 0.9286em;
	padding-left: 0.1429em;
`;

const LastComic = styled(Typography).attrs({
	variant: "small-2",
})`
	margin-top: 2.3571em;
	padding-left: 0.1429em;

	strong {
		font-weight: 600;
		margin-right: 0.5em;
	}
`;

export {
	Container,
	Header,
	Name,
	Description,
	Counters,
	Counter,
	CounterTitle,
	RatingTitle,
	LastComic,
};
