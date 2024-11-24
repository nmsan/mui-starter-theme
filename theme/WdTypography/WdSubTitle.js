import WdTypography from "@/theme/WdTypography/index";

export default function WdSubTitle(props) {
    return <WdTypography variant={"h6"}
                         color={"primary"}
                         sx={{textTransform: "uppercase", fontWeight: 800}}
                         {...props}/>

}