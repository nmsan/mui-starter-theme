import PropTypes from "prop-types";
import WdStack from "../../../theme/WdStack";
import WdTextField from "../../../theme/WdTextField";
import ImageDropZone from "../ImageDropZone";
import WdDialog from "../../../theme/WdDialog";
import localStyle from "../../app/Business/BusinessCreateButton/BusinessCreateButton.module.css";
import WdButton from "../../../theme/WdButton/WdButton";

const ConfirmDialog = props => {

    const {
        open,
        onClose,
        onYes,
        onNo,
        message
    } = props;

    const action = () => {
        return <div style={{display: "flex", justifyContent: "space-between"}}>
            <WdButton variant="outlined"  color="secondary" onClick={onNo}>No</WdButton>
            <WdButton variant="outlined" onClick={onYes}>Yes</WdButton>

        </div>
    }
    return <WdDialog
        title="Create Business"
        open={open}
        onClose={onClose}
        actions={action()}
    >
        <WdStack sx={{margin: "12px 0px"}}>
            {message}
        </WdStack>
    </WdDialog>
}

ConfirmDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onYes: PropTypes.func.isRequired,
    onNo: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
}
export default ConfirmDialog;