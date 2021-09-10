import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
	color: {
		brand: "blue",
		bg: "pink",
	},
	font: {
		body: "arial",
	},
});

export const buttonStyles = style({
	backgroundColor: vars.color.bg,
	fontFamily: "arial",
	color: vars.color.brand,
	padding: 10,
});
