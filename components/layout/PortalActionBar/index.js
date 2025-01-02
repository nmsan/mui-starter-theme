import WdBox from "@/theme/WdBox";

const PortalActionBar = props => {
    return <WdBox
        sx={{
            padding: "30px 0px",
            display: "flex",
            justifyContent: "space-between"
        }}
        {...props}/>
}

export default PortalActionBar;