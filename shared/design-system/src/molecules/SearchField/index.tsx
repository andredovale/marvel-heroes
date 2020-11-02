import React, { forwardRef } from "react";

import { Icon, InputText } from "atoms";
import { Props as IconProps } from "atoms/Icon";
import { Props as InputTextProps } from "atoms/InputText";

import { Container } from "./styled";

export interface SearchFieldTheme {
	variant: InputTextProps["variant"];
}

export interface Props extends Partial<SearchFieldTheme> {
	placeholder?: InputTextProps["placeholder"];
	iconProps?: Omit<IconProps, "fill" | "icon" | "size">;
	inputTextProps?: Omit<
		InputTextProps,
		| "backgroundColor"
		| "caretColor"
		| "paddingLeft"
		| "placeholder"
		| "textColor"
		| "variant"
	>;
}

const SearchField = forwardRef<any, Props>(
	(
		{
			placeholder = "Procure por heróis",
			variant = "small",
			iconProps,
			inputTextProps,
		}: Props,
		ref
	) => (
		<Container ref={ref} variant={variant}>
			<Icon
				{...iconProps}
				fill="red"
				icon="Magnifier"
				size={variant === "small" ? 20 : 30}
			/>
			<InputText
				{...inputTextProps}
				backgroundColor={variant === "small" ? "narvik" : "wisp-pink"}
				caretColor={variant === "small" ? "tundora" : "scarlet"}
				paddingLeft={variant === "small" ? "5.3755em" : "5.4737em"}
				placeholder={placeholder}
				textColor={variant === "small" ? "tundora" : "scarlet"}
				variant={variant}
			/>
		</Container>
	)
);

export default SearchField;
