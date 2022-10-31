import { createGreyScale } from "../utils/themeMethod";

export const theme = {
    colors: {
        primary: {
            Default: "hsla(14, 88%, 65%, 1)",
            Dark: "hsla(238, 29%, 16%, 1)",
        },
        secondary: {
            Default: "hsla(240, 6%, 50%, 1)",
            Dark: "hsla(237, 12%, 33%, 1)",
        },
        backgroundGradients: {
            Default: "hsla(273, 75%, 66%, 1)",
            Dark: "hsla(240, 73%, 65%, 1)",
        },
        Dividers: "hsla(240, 5%, 91%, 1)",
        greyScale: createGreyScale(10),
    },
};
