import React, { forwardRef } from "react";

import { HeroCard } from "molecules";
import { Props as HeroCardProps } from "molecules/HeroCard";

import { Container } from "./styled";

export interface Props {
	heroes: Omit<HeroCardProps, "onFavorite">[];
	onFavorite: HeroCardProps["onFavorite"];
}

const HeroesGrid = forwardRef<any, Props>(
	({ heroes, onFavorite }: Props, ref) => (
		<Container ref={ref}>
			{heroes.map((hero) => (
				<HeroCard key={hero.uid} {...hero} onFavorite={onFavorite} />
			))}
		</Container>
	)
);

export default HeroesGrid;
