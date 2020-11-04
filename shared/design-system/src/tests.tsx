import React, { useEffect, useState } from "react";

import { sum, sumClosure } from "@marvel-heroes/utils/src/tests";

const A = (props: Record<string, any>) => {
	if (!Object.keys(props).length) return null;

	return (
		<pre>
			<code>{JSON.stringify(props, null, 4)}</code>
		</pre>
	);
};

const B = () => {
	const [a, setA] = useState(1);
	const [b, setB] = useState(2);
	const [total, setTotal] = useState(a + b);

	useEffect(() => {
		setTotal(sum(a, b));
		// eslint-disable-next-line no-console
		console.log("sumClosure", sumClosure(a, b));
	}, [a, b]);

	return (
		<>
			<input
				type="number"
				value={a}
				onChange={(event) => setA(Number(event.target.value))}
			/>
			<input
				type="number"
				value={b}
				onChange={(event) => setB(Number(event.target.value))}
			/>
			<input type="number" disabled value={total} />
		</>
	);
};

export { A, B };
