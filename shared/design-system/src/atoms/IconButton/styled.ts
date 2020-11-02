import styled from "styled-components";

const Button = styled("button")`
	${({ theme }) => theme.typography.normal};
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: flex;
	padding: 0;
`;

export { Button };
