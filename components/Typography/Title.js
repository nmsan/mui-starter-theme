import WdTypography from "@/theme/WdTypography";

export default function SubTitle(props)
{
    return <WdTypography color={"primary"} {...props} >{props.children}</WdTypography>
}