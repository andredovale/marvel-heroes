import styled from "styled-components";

import { SearchFieldTheme } from ".";

const Container = styled("div")<SearchFieldTheme>`
	align-items: center;
	display: inline-flex;
	position: relative;
	width: 100%;

	> :first-child {
		left: ${({ variant }) =>
			variant === "small" ? "1.5810em" : "1.5789em"};
		position: absolute;
	}
`;

export { Container };
