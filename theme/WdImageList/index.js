import PropTypes from "prop-types";
import ImageList from "@mui/material/ImageList";
import {theme} from "../index";
import {useMediaQuery} from "@mui/material";

const WdImageList = props => {
    let {xs, sm, md, lg, xl, cols} = props;
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));
    const isSM = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const isMD = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isLG = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    if (!cols) {
        // Use media queries to adjust the number of columns based on screen size
         cols = isXS ? 1 : isMD ? 4 : 6;
    }
    // Determine the number of columns
    return <ImageList cols={cols} {...props}/>
}
WdImageList.propTypes = {
    cols: PropTypes.number,
    children: PropTypes.node,
}
export default WdImageList;