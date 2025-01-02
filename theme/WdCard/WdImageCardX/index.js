import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from "prop-types";
import WdCard from "../index";

const WdImageCardX = props => {
    const {image, content, actions} = props;

    return (
        <WdCard sx={{ display: 'flex', padding: "0px" }}>
            <CardMedia
                component="img"
                sx={{ width: 151, height: 200 }}
                alt="Live from space album cover"
                src={image}
            />
            <Box display="flex"
                 flex={1}
                 flexDirection= "column" >
                <CardContent sx={{ flex: '1 0 auto' }}>
                    {content}
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: "end", pl: 1, pb: 1 }}>
                    {actions}
                </Box>
            </Box>

        </WdCard>
    );
}

WdImageCardX.propTypes = {
    image: PropTypes.string.isRequired,
    content: PropTypes.node,
    actions: PropTypes.node,
}
export default WdImageCardX;