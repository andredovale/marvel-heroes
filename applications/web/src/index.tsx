import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "@marvel-heroes/design-system/src/theme";

import "./index.css";

import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<Provider>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
