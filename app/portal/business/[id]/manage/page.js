'use client'
import PortalHeader from "@/components/PortalHeader";
import {useEffect} from "react";
import {useParams, useRouter} from "next/navigation";
import WdTextField from "../../../../../theme/WdTextField";
import ImageDropZone from "../../../../../components/ImageDropZone";
import WdStack from "../../../../../theme/WdStack";

const BusinessManage = () => {

    const {id} = useParams();

    const route = useRouter();

    useEffect(() => {
        console.log("id", id)
    }, [id]);

    return <>
        <PortalHeader title="Manage Business"/>
        <WdStack sx={{margin: "12px 0px"}}>
            <WdTextField
                required
                id="business-name"
                label="Business Name"
                placeholder="Enter your the name of the business"
            ></WdTextField>
            <ImageDropZone isRequired={true} labelText={"Business Logo"}/>
        </WdStack>
    </>
}

export default BusinessManage;