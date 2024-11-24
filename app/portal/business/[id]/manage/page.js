'use client'
import PortalHeader from "@/components/PortalHeader";
import {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import WdTextField from "../../../../../theme/WdTextField";
import ImageDropZone from "../../../../../components/ImageDropZone";
import WdGrid from "../../../../../theme/WdGrid";
import WdInputContainer from "../../../../../theme/WdInputContainer";
import WdSubTitle from "../../../../../theme/WdTypography/WdSubTitle";
import TestimonialCard from "../../../../../components/Business/TestimonialCard";
import WdStack from "../../../../../theme/WdStack";
import {Fab} from "@mui/material";
import {Add, Cancel, Save} from "@mui/icons-material";
import WdActionButton from "../../../../../theme/WdActionButton";
import WdCard from "../../../../../theme/WdCard";
import TestimonialFormModal from "../../../../../components/Business/TestimonialFormModal";

const BusinessManage = () => {

    const {id} = useParams();

    const route = useRouter();

    const [openTestimonialForm, setOpenTestimonialForm] = useState()

    useEffect(() => {
        console.log("id", id)
    }, [id]);

    const onCancel = () => {
        route.back();
    }
    return <>
        <PortalHeader title="Manage Business"/>
        <WdGrid container spacing={6} sx={{marginBottom: "20px"}}>
            <WdGrid size={4}>
                <WdSubTitle>Basic details</WdSubTitle>
                <WdInputContainer>
                    <ImageDropZone isRequired={true} labelText={"Business Logo"}/>
                </WdInputContainer>
                <WdInputContainer>
                    <WdTextField
                        value={"Sample business name"}
                        required
                        id="business-name"
                        label="Business Name"
                        placeholder="Enter your the name of the business"
                    ></WdTextField>
                </WdInputContainer>
                <WdInputContainer>
                    <WdTextField
                        value={"Sample location"}
                        required
                        id="business-location"
                        label="Location"
                        placeholder="Enter the business location"
                    />
                </WdInputContainer>
            </WdGrid>
            <WdGrid size={8}>
                <div style={{paddingBottom: "10px", display: "flex", justifyContent: "space-between"}}>
                    <WdSubTitle>Testimonials</WdSubTitle>
                    <Fab color="primary" aria-label="add" size={"small"} onClick={() => setOpenTestimonialForm(true)}>
                        <Add/>
                    </Fab>
                </div>
               <WdStack>
                   <TestimonialCard/>
                   <TestimonialCard/>
                   <TestimonialCard/>
               </WdStack>
            </WdGrid>
        </WdGrid>
        <WdCard sx={{padding: "8px", display: "flex", justifyContent: "right"}} >
            <WdStack direction="row" spacing={2}>
                <WdActionButton text={"Cancel"} icon={<Cancel/>} color={"secondary"} onClick={onCancel}/>
                <WdActionButton text={"Save"} icon={<Save/>}/>
            </WdStack>
        </WdCard>
        <TestimonialFormModal open={openTestimonialForm} setOpen={setOpenTestimonialForm}/>
    </>
}

export default BusinessManage;