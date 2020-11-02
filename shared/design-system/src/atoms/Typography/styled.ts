import styled from "styled-components";
import { rgba } from "polished";

import { TypographyTheme } from ".";

const Text = styled("p")<TypographyTheme>`
	${({ theme, variant }) => theme.typography[variant]};
	color: ${({ color, opacity, theme }) => rgba(theme.colors[color], opacity)};
	line-height: ${({ lineHeight }) => lineHeight};
`;

export { Text };
