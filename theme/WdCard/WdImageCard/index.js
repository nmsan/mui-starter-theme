import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Divider from "@mui/material/Divider";
import {CardActionArea} from "@mui/material";

export default function WdImageCard({image, title, description}) {
    return (
        <Card sx={{maxWidth: 345}} variant="outlined">
            <CardActionArea>
                <Typography gutterBottom variant="h5" component="div" align={"center"}>
                    {title}
                </Typography>
                <Divider/>
                <div style={{display: "flex", justifyContent: "center", padding:"20px"}}>
                    <Image src={image} alt={"image"} width={200}/>
                </div>
                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    {description}
                </Typography>
            </CardActionArea>
        </Card>
    );
}
// <Card sx={{padding: "20px", display: "flex", justifyContent: "center"}} variant="outlined" >
//     <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//             {title}
//         </Typography>
//         <div style={{display: "flex", justifyContent: "center"}}>
//             <Image src={image} alt={"image"}/>
//         </div>
//         <Typography variant="body2" sx={{color: 'text.secondary'}}>{description}</Typography>
//     </CardContent>
//     <CardActions>
//         {children}
//     </CardActions>
// </Card>