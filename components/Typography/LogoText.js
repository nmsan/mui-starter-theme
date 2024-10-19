import Typography from "@mui/material/Typography";
import * as React from "react";
import WdTypography from "@/theme/WdTypography";

export default function LogoText({text, href, sx, align}) {
    return <WdTypography
        align={align || "left"}
        variant="h3"
        noWrap
        component="a"
        href={href||"#"}
        color={"primary"}
        sx={{
            mr: 2,
            textDecoration: 'none',
            fontFamily: "Montez",
            ...sx
        }}
    >
        {text}
    </WdTypography>
}