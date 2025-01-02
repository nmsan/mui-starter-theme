import ImageListItemBar from "@mui/material/ImageListItemBar";
import PropTypes from "prop-types";

const WdImageListItemBar = props => {

    return <ImageListItemBar {...props}/>
}

WdImageListItemBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    actionIcon: PropTypes.element,
    actionPosition: PropTypes.string,
    position:PropTypes.string || PropTypes.oneOf(['below' | 'top' | 'bottom'])
}
export default WdImageListItemBar;