import WdGrid from "../../../../theme/WdGrid";
import WdImageCardX from "../../../../theme/WdCard/WdImageCardX";
import WdIconButton from "../../../../theme/WdIconButton";
import {Dashboard, Delete} from "@mui/icons-material";
import WdTypography from "../../../../theme/WdTypography";
import {useState} from "react";
import ConfirmDialog from "../../../tools/ConfirmDialog";
import {useRouter} from "next/navigation";


const rows = [
    {
        id: 1,
        thumbnail: '/images/flower.png',
        serviceName: 'Flower decoration',
        description: 'We provide flower for your weddings, Birthdays and any function',
        serviceType: "Rent",
        visibility: "show"
    }, {
        id: 2,
        thumbnail: '/images/photo-grapher.png',
        serviceName: 'Flower decoration',
        description: 'We provide flower for your weddings, Birthdays and any function',
        serviceType: "Rent",
        visibility: "show"
    },
];
const ServiceCards = props => {
    const router = useRouter();
    const [deleteId, setDeleteId] = useState()
    const actions = ({id}) => {
        return <>
            <WdIconButton aria-label="play/pause" size="small">
                <Delete onClick={() => {
                    setDeleteId(id)
                }}/>
            </WdIconButton>
            <WdIconButton aria-label="play/pause" size="small">
                <Dashboard onClick={() => router.push("services/" +id + "/manage")}/>
            </WdIconButton>
        </>
    }
    const content = () => {
        return <><WdTypography>Text </WdTypography></>
    }
    const onDeleteConfirmationClosed = () => {
        setDeleteId(null);
    }
    const onDelete = () => {
        console.log('delete id', deleteId)
    }
    return <>
        <WdGrid container>

            {
                rows.map(r => {
                    return <WdGrid size={{xs: 12, md: 6, lg: 4}}>
                        <WdImageCardX key={r.id} image={r.thumbnail} actions={actions(r)} content={content(r)}/>
                    </WdGrid>
                })
            }
        </WdGrid>
        <ConfirmDialog open={deleteId && deleteId > 0} onClose={onDeleteConfirmationClosed} onYes={onDelete}
                       onNo={onDeleteConfirmationClosed} message="Dou want to delete this service"/>
        </>
        }

export default ServiceCards;