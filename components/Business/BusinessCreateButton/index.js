'use client'
import PropTypes from "prop-types";
import WdDialog from "../../../theme/WdDialog";
import WdButton from "../../../theme/WdButton/WdButton";
import {useState} from "react";
import {AddBox} from "@mui/icons-material";
import WdActionButton from "../../../theme/WdActionButton";
import WdBox from "../../../theme/WdBox";
import WdTextField from "../../../theme/WdTextField";

const BusinessCreateButton =  () => {

    const [open, setOpen] = useState(false)
    const onClose = () => {
        setOpen(false)
    }
    const openDialog = () => {
        setOpen(true)
    }
    const action = () => {
        return <div style={{display: "flex", justifyContent: "space-between", width:"100%"}}>
            <WdButton variant="outlined"  color="secondary">Cancel</WdButton>
            <WdButton variant="outlined" >Submit</WdButton>

        </div>
    }
    return <>
        <WdActionButton icon={<AddBox/>} text={"New"} onClick={() => openDialog(true)}/>
        <WdDialog
            title="Create Business"
            open = {open}
            setOpen = {setOpen}
            onClose = {onClose}
            actions = {action()}
        >
            <WdBox>
                <WdTextField
                    required
                    id="business-name"
                    label="Business Name"
                    placeholder="Enter your the name of the business"
                ></WdTextField>
            </WdBox>
        </WdDialog>
    </>
}

BusinessCreateButton.prototype = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export default BusinessCreateButton;