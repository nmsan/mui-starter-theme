'use client'
import PropTypes from "prop-types";
import WdDialog from "../../../../theme/WdDialog";
import WdButton from "../../../../theme/WdButton/WdButton";
import {useState} from "react";
import {Add} from "@mui/icons-material";
import WdTextField from "../../../../theme/WdTextField";
import ImageDropZone from "../../../tools/ImageDropZone";
import WdStack from "../../../../theme/WdStack";
import WdFab from "../../../../theme/WdFab";
import WdSelect from "../../../../theme/WdSelect";
import {router} from "next/client";
import {useRouter} from "next/navigation";


const serviceOptions = [
    {value: "Photography", text: "Photography"},
    {value: "BridalDressing", text: "Bridal Dressing"},
    {value: "Catering", text: "Catering"},
]
const businessOptions = [
    {value: "Photography", text: "Laka Photography"},
    {value: "BridalDressing", text: "Tush Bridal Dressing"},
    {value: "Catering", text: "Jayani Catering"},
]
const ServiceCreateButton = () => {

    const router = useRouter();

    const [open, setOpen] = useState(false)
    const [serviceType, setServiceType] = useState()
    const [business, setBusiness] = useState()
    const onClose = () => {
        setOpen(false)
    }
    const openDialog = () => {
        setOpen(true)
    }
    const submit = () => {
        router.push("services/1/manage");
    }
    const action = () => {
        return <div style={{display: "flex", justifyContent: "space-between"}}>
            <WdButton variant="outlined"  color="secondary" onClick={onClose}>Cancel</WdButton>
            <WdButton variant="outlined" onClick={submit}>Submit</WdButton>

        </div>
    }
    return <>
        <WdFab color="primary" aria-label="New" size={"small"} onClick={() => openDialog(true)}>
            <Add/>
        </WdFab>
        <WdDialog
            title="Create Service"
            open = {open}
            setOpen = {setOpen}
            onClose = {onClose}
            actions = {action()}
        >
            <WdStack sx={{margin: "12px 0px"}}>
                <WdTextField required id="service-name" label="Service Name" placeholder="Enter the service name"/>
                <WdSelect labelText="Business" id="business_select" options={serviceOptions} setValue={setServiceType} required={true}/>
                <WdSelect labelText="Service Type" id="service_type_select" options={businessOptions} setValue={setBusiness} required={true}/>
                <WdTextField
                    id="service-description"
                    label="Service Description"
                    placeholder="Enter the description"
                ></WdTextField>
                <ImageDropZone isRequired={true} labelText={"Service Thumbnail"}/>
            </WdStack>
        </WdDialog>
    </>
}

ServiceCreateButton.prototype = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export default ServiceCreateButton;