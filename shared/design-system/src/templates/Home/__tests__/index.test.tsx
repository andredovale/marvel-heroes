import React from "react";
import { render, screen, fireEvent } from "custom/@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "..";
import mock from "../__mock__";

test("<Home /> render", () => {
	jest.spyOn(console, "log").mockImplementation(jest.fn());

	const { container, rerender } = render(<Home {...mock} />);

	expect(container.querySelector("header")).toBeInTheDocument();
	expect(container.querySelector("main")).toBeInTheDocument();
	expect(container.querySelector("footer")).toBeInTheDocument();
	expect(screen.getAllByRole("button").length).toBeTruthy();

	const input = screen.getByRole("textbox");
	fireEvent.submit(input);

	expect(window.console.log).toBeCalledWith({
		value: mock.headerProps.searchFieldProps?.inputTextProps?.value,
	});

	const label = screen.getByText(mock.searchHeaderProps.toggleText);
	userEvent.click(label);

	expect(window.console.log).toBeCalledWith({ onToggle: true });

	const favorite = screen.getByText(mock.searchHeaderProps.buttonText);
	userEvent.click(favorite);

	expect(window.console.log).toBeCalledWith({ onButtonClick: "" });

	const lastHeroEmptyHeart = screen.getAllByRole("button").pop();
	userEvent.click(lastHeroEmptyHeart as HTMLElement);

	expect(window.console.log).toBeCalledWith({
		uid: mock.heroesGridProps.heroes[1].uid,
	});

	rerender(
		<Home
			{...mock}
			headerProps={{
				...mock.headerProps,
				searchFieldProps: {
					...mock.headerProps.searchFieldProps,
					inputTextProps: { value: "" },
				},
			}}
		/>
	);

	expect(container.querySelector("main")).not.toBeInTheDocument();

	rerender(<Home {...mock} error />);

	expect(screen.queryByText(mock.errorText)).toBeInTheDocument();

	rerender(<Home {...mock} loading />);

	expect(screen.queryByText(mock.loadingText)).toBeInTheDocument();

	rerender(<Home {...mock} noFavorite />);

	expect(screen.queryByText(mock.noFavoriteText)).toBeInTheDocument();

	rerender(
		<Home
			{...mock}
			heroesGridProps={{ ...mock.heroesGridProps, heroes: [] }}
		/>
	);

	expect(screen.queryByText(mock.noDataText)).toBeInTheDocument();
});
