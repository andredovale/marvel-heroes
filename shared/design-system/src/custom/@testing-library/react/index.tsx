import { ReactElement } from "react";
import { render, RenderResult, RenderOptions } from "@testing-library/react";

import { Provider } from "theme";

type CustomRender = (
	component: ReactElement,
	options?: Omit<RenderOptions, "queries">
) => RenderResult;

const customRender: CustomRender = (component, options) =>
	render(component, { wrapper: Provider, ...options });

export * from "@testing-library/react";
export { customRender as render };
