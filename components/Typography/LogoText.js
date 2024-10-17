import Typography from "@mui/material/Typography";
import * as React from "react";
import WdTypography from "@/theme/WdTypography";

export default function LogoText({text, href, sx}) {
    return <WdTypography
        variant="h6"
        noWrap
        component="a"
        href={href||"#"}
        sx={{
            mr: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            ...sx
        }}
    >
        {text}
    </WdTypography>
}