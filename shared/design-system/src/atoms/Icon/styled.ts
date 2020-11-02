import styled from "styled-components";
import { rgba } from "polished";

import { IconTheme } from ".";

const Container = styled("div")<IconTheme>`
	color: ${({ fill, opacity, theme }) => rgba(theme.colors[fill], opacity)};
	display: flex;
	height: calc(${({ size }) => size} / 16 * 1em);
	width: calc(${({ size }) => size} / 16 * 1em);

	svg {
		height: 100%;
		width: 100%;
	}
`;

export { Container };
