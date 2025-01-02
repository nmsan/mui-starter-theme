import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import {CardActionArea} from "@mui/material";
import PropTypes from "prop-types";
import {Delete, Edit} from "@mui/icons-material";
import WdIconButton from "@/theme/WdIconButton";
import WdDivider from "@/theme/WdDivider";
import WdBox from "../../WdBox";
import Box from "@mui/material/Box";

const WdImageCard = props =>  {
    const {image, title, actions, imageHeight="250px"} = props;
    return (
        <Card variant="outlined">
            <CardActionArea>
                <Typography gutterBottom variant="h5" component="div" align={"center"} sx={{marginTop: '12px'}}>
                    {title}
                </Typography>
                <WdDivider/>
                <Box sx={{display: "flex", justifyContent: "center", padding:"20px", height: imageHeight}}>
                    <Image src={image} alt={"image"} width={200} style={{padding: "20px"}}/>
                </Box>
                <WdDivider/>
                <div style={{display: "flex", justifyContent: "right"}}>
                    {actions}
                </div>
            </CardActionArea>
        </Card>
    );
}
WdImageCard.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string,
    imageHeight: PropTypes.string,
    actions: PropTypes.element,

}
export default  WdImageCard;