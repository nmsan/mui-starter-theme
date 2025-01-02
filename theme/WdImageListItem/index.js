import ImageListItem from "@mui/material/ImageListItem";
import PropTypes from "prop-types";

const WdImageListItem = props => {
    return <ImageListItem {...props}/>
}
WdImageListItem.prototype = {
    cols: PropTypes.number,
    rows: PropTypes.number,
    sx: PropTypes.object
}
export default WdImageListItem;