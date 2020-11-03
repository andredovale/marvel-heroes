import { typography } from "quarks";
import styled from "styled-components";

const Container = styled("button")`
	align-items: center;
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: inline-flex;
	${typography["normal"]};
	padding: 0;

	> :first-child {
		margin-right: 2em;
	}
`;

export { Container };
