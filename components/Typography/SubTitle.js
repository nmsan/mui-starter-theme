import WdTypography from "@/theme/WdTypography";

export default function SubTitle(props) {
    return <WdTypography variant={"h4"}
                         color={"primary"}
                         sx={{textTransform: "uppercase", fontWeight: 800}}
                         {...props}>{props.children}</WdTypography>

}