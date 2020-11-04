import React, { forwardRef } from "react";

import { Header, HeroesGrid, SearchHeader } from "organisms";
import { Props as HeaderProps } from "organisms/Header";
import { Props as HeroesGridProps } from "organisms/HeroesGrid";
import { Props as SearchHeaderProps } from "organisms/SearchHeader";

import {
	Container,
	Wrapper,
	Header as LocalHeader,
	Content,
	Spacer,
	NoContent,
	Footer,
} from "./styled";

export interface Props {
	headerProps: Omit<HeaderProps, "variant">;
	noContentText: string;
	searchHeaderProps: SearchHeaderProps;
	heroesGridProps: HeroesGridProps;
}

const Home = forwardRef<any, Props>(
	(
		{
			headerProps,
			noContentText,
			searchHeaderProps,
			heroesGridProps,
		}: Props,
		ref
	) => (
		<Container ref={ref}>
			<Wrapper>
				<LocalHeader>
					<Header {...headerProps} variant="large" />
				</LocalHeader>
				{!!headerProps?.searchFieldProps?.inputTextProps?.value && (
					<Content>
						{!heroesGridProps.heroes ||
						!heroesGridProps.heroes.length ? (
							<NoContent>{noContentText}</NoContent>
						) : (
							<>
								<SearchHeader {...searchHeaderProps} />
								<Spacer />
								<HeroesGrid {...heroesGridProps} />
							</>
						)}
					</Content>
				)}
			</Wrapper>
			<Footer
				noValue={!headerProps?.searchFieldProps?.inputTextProps?.value}
			/>
		</Container>
	)
);

export default Home;
