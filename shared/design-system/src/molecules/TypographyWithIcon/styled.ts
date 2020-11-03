import styled from "styled-components";

const Container = styled("div")`
	align-items: center;
	display: inline-flex;

	> :first-child {
		margin-right: 0.875em;
	}

	button& {
		background-color: transparent;
		border: none;
		cursor: pointer;
		font-size: 16px;
		padding: 0;
	}
`;

export { Container };
