import WdBox from "@/theme/WdBox";
import WdTypography from "@/theme/WdTypography";
import WdPortalTitle from "@/theme/WdTypography/WdPortalTitle";

const PortalHeader = ({title}) => {
    return <WdBox sx={{padding: "40px 0px 10px 0px"}}>
        <WdPortalTitle>
            {title}
        </WdPortalTitle>
    </WdBox>
}

export default PortalHeader;