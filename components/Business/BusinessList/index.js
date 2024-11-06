import * as React from 'react';
import WdImageCard from "@/theme/WdCard/WdImageCard";
import banquetImage from "@/resources/images/banquet.png"
import photographer from "@/resources/images/photo-grapher.png";
import avatar from "@/resources/images/avatar.png";

import flower from "@/resources/images/flower.png";
import WdGrid from "@/theme/WdGrid";
const rows = [
    {id: 1, name: 'Dark Room', description: "", image: flower},
    {id: 2, name: 'Dark Flowers', description: "", image: photographer},
    {id: 3, name: 'Dark Banquet ', description: "", image: banquetImage},
    {id: 4, name: 'Dark Groom ', description: "", image: avatar},
];

function actions() {
    return <>
    </>
}
const BusinessList = props => {
    return (
        <WdGrid container spacing={2} sx={{height: 300, width: '100%', cursor: "pointer"}}>
            {
                rows.map(({id, name, description, image}) => {
                    return <WdGrid key={id} size={{xs: 12, sm: 4, md: 3, xl: 3}}>
                        <WdImageCard key={id} title={name} image={image} description={description}/>
                    </WdGrid>
                })
            }
        </WdGrid>
    );
}

export default BusinessList;