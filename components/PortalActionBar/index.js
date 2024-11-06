import WdBox from "@/theme/WdBox";

const PortalActionBar = props => {
    return <WdBox
        sx={{
            padding: "30px 0px",
            display: "flex",
            justifyContent: "end"
        }}
        {...props}/>
}

export default PortalActionBar;