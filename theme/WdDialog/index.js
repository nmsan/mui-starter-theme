'use client'
import PropTypes from "prop-types";
import {Dialog, DialogActions, DialogContent, DialogTitle, Divider} from "@mui/material";

const WdDialog = (props) => {
    const {title, open, onClose, children, actions, width} = props;
    return <>
        <Dialog
            fullWidth={true}
            maxWidth={width}
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <Divider/>
            <DialogContent>
                {children}
            </DialogContent>
            <Divider/>
            <DialogActions>
                {actions}
            </DialogActions>
        </Dialog>
    </>
}

WdDialog.prototype = {
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    action: PropTypes.func.isRequired,
    width: PropTypes.string
}

export default WdDialog;