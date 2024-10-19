import Typography from "@mui/material/Typography";
import * as React from "react";
import WdTypography from "@/theme/WdTypography";
import {grey} from "@mui/material/colors";

export default function Paragraph({children}) {
    return <WdTypography
        primary
        variant="p"
        noWrap
        sx={{
            mr: 2,
            textDecoration: 'none',
        }}
    >
        {children}
    </WdTypography>
}