'use client'
import PortalHeader from "@/components/layout/PortalHeader";
import PortalActionBar from "@/components/layout/PortalActionBar";
import ServiceList from "../../../components/app/Services/ServiceList";
import ServiceCards from "../../../components/app/Services/SreviceCards";
import WdSubTitle from "../../../theme/WdTypography/WdSubTitle";
import ServiceCreateButton from "../../../components/app/Services/ServiceCreateButton";

const Business = props => {

    return <>
        <PortalHeader title="Services"/>
        <PortalActionBar >
            <span></span>
            <ServiceCreateButton/>
        </PortalActionBar>
        <ServiceList/>
    </>
}

export default Business;
