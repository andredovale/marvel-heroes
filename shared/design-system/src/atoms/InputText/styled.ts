import styled from "styled-components";
import { rgba } from "polished";

import { InputTextTheme } from ".";

const getByVariant = (whenSmall: any, whenLarge: any) => ({
	variant,
}: InputTextTheme) => (variant === "small" ? whenSmall : whenLarge);

const Input = styled("input")<InputTextTheme>`
	background-color: ${({ backgroundColor, theme }) =>
		theme.colors[backgroundColor]};
	border: none;
	border-radius: ${getByVariant("calc(3.4782em / 2)", "calc(3.5263em / 2)")};
	caret-color: ${({ caretColor, theme }) => theme.colors[caretColor]};
	color: ${({ textColor, theme }) => theme.colors[textColor]};
	font-size: ${getByVariant("0.7906em", "1.1875em")};
	line-height: ${getByVariant("1.3439", "1.2105")};
	height: ${getByVariant("3.4782em", "3.5263em")};
	padding-left: ${({ paddingLeft, variant }) =>
		paddingLeft ||
		getByVariant("2.2134em", "2.3157em")({ variant } as InputTextTheme)};
	padding-right: ${getByVariant("2.2134em", "2.3157em")};
	width: 100%;

	::placeholder {
		color: ${({ textColor, theme, variant }) =>
			rgba(
				theme.colors[textColor],
				getByVariant(0.7, 0.5)({ variant } as InputTextTheme)
			)};
	}
`;

export { Input };
