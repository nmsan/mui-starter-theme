'use client'
import {useEffect} from "react";
import {useRouter} from "next/navigation";

const Portal = props => {
    const router=  useRouter();
    useEffect(() => {
        router.push("/portal/business")
    }, []);
}

export default Portal;
