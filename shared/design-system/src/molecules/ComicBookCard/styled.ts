import styled from "styled-components";

const Card = styled("a")`
	display: flex;
	flex-direction: column;
	text-decoration: none;
`;

const Photo = styled("div")`
	margin-bottom: 1.4375em;
	overflow: hidden;
	padding-top: 141.4063%;
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

export { Card, Photo };
