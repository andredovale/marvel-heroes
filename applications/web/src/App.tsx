import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Hero from "./pages/Hero";
import Home from "./pages/Home";

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/:uid">
				<Hero />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	</Router>
);

export default App;
