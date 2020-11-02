import styled from "styled-components";

import { colors } from "quarks";

const Card = styled("a")`
	display: flex;
	flex-direction: column;
	text-decoration: none;
`;

const Photo = styled("div")`
	border-bottom: solid 0.25em ${colors["alizarin-crimson"]};
	overflow: hidden;
	padding-top: 97.0954%;
	position: relative;

	> img {
		height: 100%;
		left: 0;
		object-fit: cover;
		position: absolute;
		top: 0;
		width: 100%;
	}
`;

const Footer = styled("div")`
	display: flex;
	justify-content: space-between;
	margin-top: 1.6875em;
	position: relative;

	> :last-child {
		margin-top: -0.125em;
	}
`;

export { Card, Photo, Footer };
