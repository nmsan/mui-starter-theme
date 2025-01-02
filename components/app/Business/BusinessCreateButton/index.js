'use client'
import PropTypes from "prop-types";
import WdDialog from "../../../../theme/WdDialog";
import WdButton from "../../../../theme/WdButton/WdButton";
import {useState} from "react";
import {Add} from "@mui/icons-material";
import WdTextField from "../../../../theme/WdTextField";
import ImageDropZone from "../../../tools/ImageDropZone";
import WdStack from "../../../../theme/WdStack";
import localStyle from "./BusinessCreateButton.module.css";
import WdFab from "../../../../theme/WdFab";

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
        <WdFab color="primary" aria-label="New" size={"small"} onClick={() => openDialog(true)}>
            <Add/>
        </WdFab>
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