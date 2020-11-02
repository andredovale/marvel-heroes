import React from "react";
import { addDecorator } from "@storybook/react";
import { createGlobalStyle } from "styled-components";

import { Provider } from "theme";

const GlobalStyle = createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&display=swap");

	#root * {
		font-family: "Work Sans", sans-serif;
	}
`;

addDecorator((...args) => {
	return (
		<>
			<GlobalStyle />
			<Provider>{args[0]()}</Provider>
		</>
	);
});

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
};
