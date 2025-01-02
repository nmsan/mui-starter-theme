'use client'
import PortalHeader from "@/components/layout/PortalHeader";
import {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import ServiceManage from "../../../../../components/app/Services/ServiceManage";

const BusinessManage = () => {


    return <>
        <PortalHeader title="Manage Service"/>
        <ServiceManage/>
    </>
}

export default BusinessManage;