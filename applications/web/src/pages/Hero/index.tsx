// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";

import Hero from "@marvel-heroes/design-system/src/templates/Hero";
import mock from "@marvel-heroes/design-system/src/templates/Hero/__mock__";

const App = () => (
	<Hero
		{...mock}
		headerProps={{
			...mock.headerProps,
			logoWithSloganProps: {
				logoProps: {
					as: Link,
					to: "/",
				},
			},
		}}
	/>
);

export default App;
