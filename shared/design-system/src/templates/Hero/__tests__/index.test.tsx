import React from "react";
import { render, screen, fireEvent } from "custom/@testing-library/react";

import Hero from "..";
import mock from "../__mock__";

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
});
