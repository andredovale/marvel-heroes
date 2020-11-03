import React, { forwardRef, useState } from "react";

import { LogoWithSlogan, SearchField } from "molecules";
import { Props as LogoWithSloganProps } from "molecules/LogoWithSlogan";
import { Props as SearchFieldProps } from "molecules/SearchField";

import { Container, Title, Subtitle, Form } from "./styled";

export interface HeaderTheme {
	variant: "small" | "large";
}

export interface Props extends Partial<HeaderTheme> {
	logoWithSloganProps?: Omit<LogoWithSloganProps, "variant">;
	title?: string;
	subtitle?: string;
	searchFieldProps?: Omit<SearchFieldProps, "variant">;
	onSubmit: (event: React.FormEvent<HTMLFormElement>, value: string) => void;
}

const Header = forwardRef<any, Props>(
	(
		{
			variant = "small",
			logoWithSloganProps,
			title,
			subtitle,
			searchFieldProps: { inputTextProps, ...searchFieldProps } = {},
			onSubmit,
		}: Props,
		ref
	) => {
		const [value, setValue] = useState("");

		const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			setValue(event.currentTarget.value);
		};

		const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			onSubmit(event, value);
		};

		return (
			<Container ref={ref} variant={variant}>
				<LogoWithSlogan {...logoWithSloganProps} variant={variant} />
				{title && variant === "large" && <Title>{title}</Title>}
				{subtitle && variant === "large" && (
					<Subtitle>{subtitle}</Subtitle>
				)}
				<Form onSubmit={handlerSubmit} variant={variant}>
					<SearchField
						{...searchFieldProps}
						inputTextProps={{ ...inputTextProps, onChange, value }}
						variant={variant}
					/>
				</Form>
			</Container>
		);
	}
);

export default Header;
