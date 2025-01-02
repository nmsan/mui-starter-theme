'use client'
import BusinessList from "@/components/app/Business/BusinessList";
import PortalHeader from "@/components/layout/PortalHeader";
import PortalActionBar from "@/components/layout/PortalActionBar";
import BusinessCreateButton from "@/components/app/Business/BusinessCreateButton";

const Business = props => {

    return <>
        <PortalHeader title="My Busicesses"/>
        <PortalActionBar >
            <span></span>
            <BusinessCreateButton/>
        </PortalActionBar>
        <BusinessList/>
    </>
}

export default Business;
