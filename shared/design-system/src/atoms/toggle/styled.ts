import styled from "styled-components";
import { rgba } from "polished";

const Checkbox = styled("input").attrs({
	type: "checkbox",
})`
	display: none;
`;

const FakeCheckbox = styled("label").attrs({
	backgroundColor: "silver",
	innerCheckedColor: "scarlet",
	innerUncheckedColor: "scarlet",
})`
	input + & {
		background-color: ${({ backgroundColor, theme }) =>
			rgba(theme.colors[backgroundColor], 0.35)};
		border-radius: calc(2.4375em / 2);
		cursor: pointer;
		display: flex;
		height: 2.4375em;
		position: relative;
		width: 4.6875em;

		::before {
			background-color: ${({ innerUncheckedColor, theme }) =>
				theme.colors[innerUncheckedColor]};
			border-radius: 100%;
			box-shadow: 0 -0.1875em 0.5em ${({ innerUncheckedColor, theme }) => rgba(theme.colors[innerUncheckedColor], 0.6)};
			content: "";
			height: 1.3125em;
			left: 0.5625em;
			position: absolute;
			top: 0.5625em;
			transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
			width: 1.3125em;
		}
	}

	input:checked + & {
		::before {
			background-color: ${({ innerCheckedColor, theme }) =>
				theme.colors[innerCheckedColor]};
			box-shadow: 0 -0.1875em 0.5em ${({ innerCheckedColor, theme }) => rgba(theme.colors[innerCheckedColor], 0.6)};
			transform: translateX(171.4285%) rotate(-180deg);
		}
	}
`;

export { Checkbox, FakeCheckbox };
