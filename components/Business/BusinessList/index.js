
import * as React from 'react';
import WdImageCard from "@/theme/WdCard/WdImageCard";
import banquetImage from "@/resources/images/banquet.png"
import photographer from "@/resources/images/photo-grapher.png";
import flower from "@/resources/images/flower.png";

const rows = [
    { id: 1, name: 'Dark Room', description: "",image: flower },
    { id: 2, name: 'Dark Flowers',description: "", image: photographer },
    { id: 3, name: 'Dark Banquet ', description: "", image: banquetImage },
];

const BusinessList = props => {
    return (
        <div style={{ height: 300, width: '100%' }}>
            {
                rows.map((id,name, desciption, image) => {
                    return <WdImageCard key={id} title={name} image description />
                })
            }
        </div>
    );
}

export default  BusinessList;