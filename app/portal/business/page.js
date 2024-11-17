'use client'
import BusinessList from "@/components/Business/BusinessList";
import PortalHeader from "@/components/PortalHeader";
import PortalActionBar from "@/components/PortalActionBar";
import BusinessCreateButton from "../../../components/Business/BusinessCreateButton";

const Business = props => {

    return <>
        <PortalHeader title="My Busicesses"/>
        <PortalActionBar >
            <span>&nbsp</span>
            <BusinessCreateButton/>
        </PortalActionBar>
        <BusinessList/>
    </>
}

export default Business;
