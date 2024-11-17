'use client'
import {createTheme} from "@mui/material";
import {grey} from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#8636d6',
        },
        secondary: {
            main: grey[800],
        },
    },
});