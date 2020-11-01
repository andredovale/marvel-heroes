import React from "react";
import { addDecorator } from "@storybook/react";

import { Provider } from "theme";

addDecorator((...args) => <Provider>{args[0]()}</Provider>);

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
};
