'use client'
import PropTypes from "prop-types";
import WdDialog from "../../../theme/WdDialog";
import WdButton from "../../../theme/WdButton/WdButton";
import {useState} from "react";
import {AddBox} from "@mui/icons-material";
import WdActionButton from "../../../theme/WdActionButton";
import WdTextField from "../../../theme/WdTextField";
import ImageDropZone from "../../ImageDropZone";
import WdStack from "../../../theme/WdStack";
import localStyle from "./BusinessCreateButton.module.css";

const BusinessCreateButton = () => {
    const [open, setOpen] = useState(false)

    const onClose = () => {
        setOpen(false)
    }
    const openDialog = () => {
        setOpen(true)
    }

    const action = () => {
        return <div className={localStyle.actionBtnContainer}>
            <WdButton variant="outlined"  color="secondary" onClick={onClose}>Cancel</WdButton>
            <WdButton variant="outlined" onClick={onClose}>Submit</WdButton>

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
            <WdStack sx={{margin: "12px 0px"}}>
                <WdTextField
                    required
                    id="business-name"
                    label="Business Name"
                    placeholder="Enter your the name of the business"
                ></WdTextField>
                <ImageDropZone isRequired={true} labelText={"Business Logo"}/>
            </WdStack>
        </WdDialog>
    </>
}

BusinessCreateButton.prototype = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export default BusinessCreateButton;