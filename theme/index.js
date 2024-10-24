'use client'
import {createTheme} from "@mui/material";
import {green, purple} from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#8636d6',
        },
        secondary: {
            main: green[500],
        },
    },
});