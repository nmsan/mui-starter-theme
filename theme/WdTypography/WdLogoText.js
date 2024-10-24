import Typography from "@mui/material/Typography";
import * as React from "react";
import WdTypography from "@/theme/WdTypography/index";

export default function WdLogoText({text, href, sx, align}) {
    return <Typography
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
    </Typography>
}