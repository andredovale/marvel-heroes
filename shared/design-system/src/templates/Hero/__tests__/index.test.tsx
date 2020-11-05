import React from "react";
import { render, screen, fireEvent } from "custom/@testing-library/react";

import Hero from "..";
import mock from "../__mock__";
import userEvent from "@testing-library/user-event";

test("<Hero /> render", () => {
	jest.spyOn(console, "log").mockImplementation(jest.fn());

	const { container, rerender } = render(<Hero {...mock} />);

	expect(container.querySelector("header")).toBeInTheDocument();
	expect(container.querySelector("main")).toBeInTheDocument();
	expect(container.querySelector("footer")).toBeInTheDocument();

	const input = screen.getByRole("textbox");
	fireEvent.submit(input);

	expect(window.console.log).toBeCalledWith({
		value: mock.headerProps.searchFieldProps?.inputTextProps?.value,
	});

	expect(screen.getAllByText(mock.heroDetailsProps.name).length).toBeTruthy();

	userEvent.click(screen.getByTitle(/heart/i));

	expect(mock.heroDetailsProps.onFavorite).toBeCalled();

	rerender(
		<Hero
			{...mock}
			heroDetailsProps={{
				...mock.heroDetailsProps,
				name: (undefined as unknown) as string,
			}}
		/>
	);

	expect(
		screen.queryByText(mock.heroDetailsProps.name)
	).not.toBeInTheDocument();

	rerender(<Hero {...mock} error />);

	expect(screen.getByText(mock.errorText)).toBeInTheDocument();

	rerender(<Hero {...mock} loading />);

	expect(screen.getByText(mock.loadingText)).toBeInTheDocument();
});
