'use client'
import {createTheme} from "@mui/material";
import {green, grey, purple} from "@mui/material/colors";
import {gray} from "next/dist/lib/picocolors";

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