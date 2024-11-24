import {Grid2} from "@mui/material";
import PropTypes from "prop-types";

const WdGrid = (props) => {

    return <Grid2 spacing={2} {...props}></Grid2>
}

WdGrid.prototype = {
    container: PropTypes.bool,
    spacing: PropTypes.number,
    size: PropTypes.number,
}
export default WdGrid;