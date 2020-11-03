import React, { forwardRef } from "react";

import { ComicBookCard } from "molecules";
import { Props as ComicBookCardProps } from "molecules/ComicBookCard";

import { Container } from "./styled";

export interface Props {
	comics: Omit<ComicBookCardProps, "onFavorite">[];
}

const ComicBooksGrid = forwardRef<any, Props>(({ comics }: Props, ref) => (
	<Container ref={ref}>
		{comics.map((comic) => (
			<ComicBookCard key={comic.uid} {...comic} />
		))}
	</Container>
));

export default ComicBooksGrid;
