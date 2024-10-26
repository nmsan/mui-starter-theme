import * as React from 'react';
import WdImageCard from "@/theme/WdCard/WdImageCard";
import banquetImage from "@/resources/images/banquet.png"
import photographer from "@/resources/images/photo-grapher.png";
import flower from "@/resources/images/flower.png";
import WdGrid from "@/theme/WdGrid";
const rows = [
    {id: 1, name: 'Dark Room', description: "", image: flower},
    {id: 2, name: 'Dark Flowers', description: "", image: photographer},
    {id: 3, name: 'Dark Banquet ', description: "", image: banquetImage},
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
                    return <WdGrid key={id} size={{xs: 6, md: 4, xl: 3}}>
                        <WdImageCard key={id} title={name} image={image} description={description}/>
                    </WdGrid>
                })
            }
        </WdGrid>
    );
}

export default BusinessList;