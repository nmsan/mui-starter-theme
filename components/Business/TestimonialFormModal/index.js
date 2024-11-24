import PropTypes from "prop-types";
import WdDialog from "../../../theme/WdDialog";
import WdStack from "../../../theme/WdStack";
import WdInputContainer from "../../../theme/WdInputContainer";
import WdTextField from "../../../theme/WdTextField";
import {useState} from "react";
import ImageDropZone from "../../ImageDropZone";
import WdButton from "../../../theme/WdButton/WdButton";

const TestimonialFormModal = props => {

    const {open, setOpen} = props;

    const onClose = () => {
        setOpen(false)
    }
    const action = () => {
        return <WdStack direction="row" spacing={2}>
            <WdButton variant="outlined"  color="secondary" onClick={onClose}>Cancel</WdButton>
            <WdButton variant="outlined" onClick={onClose}>Submit</WdButton>

        </WdStack>
    }
    return <WdDialog
        title={"Testimonial Form"}
        open={open}
        onClose={onClose}
        actions={action()}
    >
        <WdStack space={2}>
            <ImageDropZone isRequired={true} labelText={"User Image"}/>
            <WdTextField label={"Name"}/>
            <WdTextField label={"Testimonial"}  multiline={true} maxRows={4}/>
        </WdStack>
    </WdDialog>
}

TestimonialFormModal.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}
export default TestimonialFormModal;