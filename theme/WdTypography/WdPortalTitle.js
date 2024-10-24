import WdTypography from "@/theme/WdTypography/index";

export default function WdPortalTitle(props)
{
    return <WdTypography variant={"h5"}
                         color={"textSecondary"}
                         sx={{textTransform: "uppercase", fontWeight: 800}}
                         {...props}>{props.children}</WdTypography>
}