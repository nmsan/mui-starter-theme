import WdTypography from "@/theme/WdTypography";

export default function SubTitle(props)
{
    return <WdTypography variant={"h3"} color={"primary"} {...props} >{props.children}</WdTypography>

}