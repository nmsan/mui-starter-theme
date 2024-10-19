'use client'
import {createTheme} from "@mui/material";
import {green, purple} from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: purple[800],
        },
        secondary: {
            main: green[500],
        },
    },
});