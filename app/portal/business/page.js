import BusinessList from "@/components/Business/BusinessList";
import PortalHeader from "@/components/PortalHeader";
import PortalActionBar from "@/components/PortalActionBar";
import WdButton from "@/theme/WdButton/WdButton";

const Business = props => {

    return <>
        <PortalHeader title="My Busicesses"/>
        <PortalActionBar>
            <WdButton>New</WdButton>
        </PortalActionBar>
        <BusinessList/>
    </>
}

export default Business;
