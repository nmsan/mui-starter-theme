import WdGrid from "../../../../theme/WdGrid";
import WdSubTitle from "../../../../theme/WdTypography/WdSubTitle";
import WdInputContainer from "../../../../theme/WdInputContainer";
import ImageDropZone from "../../../tools/ImageDropZone";
import WdTextField from "../../../../theme/WdTextField";
import WdFab from "../../../../theme/WdFab";
import {Add, Cancel, Save} from "@mui/icons-material";
import WdStack from "../../../../theme/WdStack";
import WdCard from "../../../../theme/WdCard";
import WdActionButton from "../../../../theme/WdActionButton";
import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import WdSelect from "../../../../theme/WdSelect";
import ServiceMediaList from "../ServiceMediaList";

const businessOptions = [
    {value: "Photography", text: "Laka Photography"},
    {value: "BridalDressing", text: "Tush Bridal Dressing"},
    {value: "Catering", text: "Jayani Catering"},
]
const ServiceManage = props => {
    const {id} = useParams();
    const [business, setBusiness] = useState()
    const [serviceType, setServiceType] = useState()
    const route = useRouter();

    const [openTestimonialForm, setOpenTestimonialForm] = useState()

    useEffect(() => {
        console.log("id", id)
    }, [id]);

    const onCancel = () => {
        route.back();
    }
    return <>
        <WdGrid container spacing={6} sx={{marginBottom: "20px"}}>
            <WdGrid size={4}>
                <WdSubTitle>Basic details</WdSubTitle>
                <WdInputContainer>
                    <ImageDropZone isRequired={true} labelText={"Service Thumbnail"}/>
                </WdInputContainer>
                <WdTextField multiline id="service-description" label="Service Description"
                             placeholder="Enter the service name"/>
                <WdInputContainer>
                    <WdTextField
                        value={"Service name"}
                        required
                        id="service-name"
                        label="Service Name"
                        placeholder="Enter the name of the service"
                    ></WdTextField>
                </WdInputContainer>
                <WdInputContainer>
                    <WdSelect labelText={"Service Type"} id={"service-type"} options={businessOptions}
                              setValue={setServiceType}/>
                </WdInputContainer>
                <WdInputContainer>
                    <WdSelect labelText={"Business"} id={"business"} options={businessOptions} setValue={setBusiness}/>
                </WdInputContainer>
                <WdInputContainer>
                    <WdTextField
                        value={"Promotion notes"}
                        id="promotion-note"
                        label="Promotion Note"
                        placeholder="Enter the promotion notes"
                    ></WdTextField>
                </WdInputContainer>
            </WdGrid>
            <WdGrid size={8}>
                <div style={{paddingBottom: "10px", display: "flex", justifyContent: "space-between"}}>
                    <WdSubTitle>Service Banners</WdSubTitle>
                    <WdFab color="primary" aria-label="add" size={"small"} onClick={() => setOpenTestimonialForm(true)}>
                        <Add/>
                    </WdFab>
                </div>
                <WdStack>
                   <ServiceMediaList/>
                </WdStack>
            </WdGrid>
        </WdGrid>
        <WdCard sx={{padding: "8px", display: "flex", justifyContent: "right"}}>
            <WdStack direction="row" spacing={2}>
                <WdActionButton text={"Cancel"} icon={<Cancel/>} color={"secondary"} onClick={onCancel}/>
                <WdActionButton text={"Save"} icon={<Save/>}/>
            </WdStack>
        </WdCard>
    </>
}

export default ServiceManage;
