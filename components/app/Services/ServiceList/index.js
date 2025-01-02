import * as React from 'react';
import WdImageList from "../../../../theme/WdImageList";
import WdImageListItem from "../../../../theme/WdImageListItem";
import WdImageListItemBar from "../../../../theme/WdImageListItemBar";
import {Dashboard, Delete} from "@mui/icons-material";
import {useRouter} from "next/navigation";
import {useState} from "react";
import WdIconButton from "../../../../theme/WdIconButton";
import flower from "@/resources/images/flower.png";
import {theme} from "../../../../theme";
export default function ServiceMedia() {

    const router = useRouter();
    const [deleteId, setDeleteId] = useState()
    const actions = ({id}) => {
        return <>

            <WdIconButton aria-label="play/pause" size="small" >
                <Delete onClick={() => {
                    setDeleteId(id)
                }}/>
            </WdIconButton>
            <WdIconButton aria-label="play/pause" size="small" >
                <Dashboard onClick={() => router.push("services/" +id + "/manage")}/>
            </WdIconButton>
        </>
    }
    // sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
    return (
        <WdImageList>
            {itemData.map((item) => (
                <WdImageListItem key={item.img} sx={{border: "1px solid #dfdfdf", padding: "2px",}}>
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <WdImageListItemBar
                        sx={{"background": theme.palette.grey[300], paddingLeft: "6px"}}
                        title={item.title}
                        actionIcon={
                            actions(item.id)
                        }
                        position={"below"}
                    />
                </WdImageListItem>
            ))}
        </WdImageList>
    );
}

const itemData = [
    {
        id: 1,
        img: "/images/flower.png",
        title: 'Breakfast',
        description: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },

    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        description: '@helloimnik',
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        description: '@nolanissac',
        cols: 2,
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        description: '@hjrc33',
        cols: 2,
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        description: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },

    {
        id: 7,
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        description: '@tjdragotta',
    },
    {
        id: 8,
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        description: '@katie_wasserman',
    },
    {
        id: 9,
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        description: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        id: 2,
        img: '/images/photo-grapher.png',
        title: 'Burger',
        description: '@rollelflex_graphy726',
    }
];
