import React, { forwardRef } from "react";
import cuid from "cuid";

import { Icon } from "atoms";

import { Container } from "./styled";

export interface Props {
	value: 0 | 1 | 2 | 3 | 4 | 5;
}

const stars = [...Array(5)].map(() => cuid());

const Rating = forwardRef<any, Props>(({ value }: Props, ref) => (
	<Container ref={ref}>
		{stars.map((uid, index) => (
			<Icon
				key={uid}
				icon="Star"
				fill="red"
				opacity={value > index ? 1 : 0.25}
				size={16}
			/>
		))}
	</Container>
));

export default Rating;
