import styled from "styled-components";

import { SearchFieldTheme } from ".";

const Container = styled("div")<SearchFieldTheme>`
	align-items: center;
	display: flex;
	position: relative;

	> :first-child {
		left: ${({ variant }) =>
			variant === "small" ? "1.5810em" : "1.5789em"};
		position: absolute;
	}
`;

export { Container };
