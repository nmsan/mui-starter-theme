import WdTypography from "@/theme/WdTypography/index";

export default function WdSubTitle(props) {
    return <WdTypography variant={"h4"}
                         color={"primary"}
                         sx={{textTransform: "uppercase", fontWeight: 800}}
                         {...props}>{props.children}</WdTypography>

}