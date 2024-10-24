import * as React from "react";
import WdTypography from "@/theme/WdTypography/index";

export default function WdPText(props) {
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