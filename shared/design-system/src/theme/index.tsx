import React from "react";
import { colors } from "quarks";
import { ThemeProviderProps, ThemeProvider } from "styled-components";

const theme = {
	colors,
};

const Provider = ({
	theme: _,
	...args
}: Partial<ThemeProviderProps<any, any>>) => (
	<ThemeProvider theme={theme} {...args} />
);

export { theme as default, Provider };
