import Typography from "@mui/material/Typography";
import * as React from "react";
import WdTypography from "@/theme/WdTypography";
import {grey} from "@mui/material/colors";

export default function P(props) {
    return <WdTypography
        primary
        variant="p"
        noWrap
        sx={{
            mr: 2,
            textDecoration: 'none',
        }}
        {...props}
    >
    </WdTypography>
}