import {FormControl, TextField} from "@mui/material";

const  WdTextField = props => {

    return <FormControl fullWidth><TextField  fullWidth {...props} /></FormControl>
}
WdTextField.propTypes = {

}
export default WdTextField;