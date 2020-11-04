import styled from "styled-components";

import { LogoWithSloganTheme } from ".";

const Container = styled("div")<LogoWithSloganTheme>`
	align-items: center;
	display: inline-flex;
	text-decoration: none;

	> :first-child {
		margin-right: ${({ variant }) =>
			variant === "small" ? "1.25em" : "0.8125em"};
	}
`;

export { Container };
