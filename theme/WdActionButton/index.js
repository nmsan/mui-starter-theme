import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const WdActionButton = (props) => {
    return <Button  size="large" variant="outlined" startIcon={props.icon} {...props}>{props.text}</Button>
}

WdActionButton.propType = {
    icon: PropTypes.element,
    text: PropTypes.string
}
export default WdActionButton;