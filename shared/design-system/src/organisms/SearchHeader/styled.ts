import styled from "styled-components";

import { Typography } from "atoms";
import { ToggleWithAdornment, TypographyWithIcon } from "molecules";

const Container = styled("div")`
	align-items: center;
	display: flex;
	flex-direction: row;
`;

const Title = styled(Typography).attrs({
	color: "silver",
	variant: "head-4",
})`
	margin-right: auto;
`;

const Toggle = styled(ToggleWithAdornment)``;

const Button = styled(TypographyWithIcon).attrs(
	({ typographyProps, ...props }) => ({
		...props,
		variant: "button",
		typographyProps: {
			...typographyProps,
			color: "scarlet",
			variant: "small-3",
		},
	})
)`
	margin-left: 1.875em;
`;

export { Container, Title, Toggle, Button };
