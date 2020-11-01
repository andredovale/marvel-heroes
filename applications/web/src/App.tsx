import React from "react";

import { A, B } from "@marvel-heroes/design-system/src/tests";

function App() {
	return (
		<>
			<div>
				<A
					lorem="ipsum"
					dolor="sit"
					et={1}
					amet={{ consectur: "adiscipining" }}
					lament={[1, 2, 3]}
				/>
			</div>
			<hr />
			<div>
				<B />
			</div>
		</>
	);
}

export default App;
