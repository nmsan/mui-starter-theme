'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Register() {
    const router = useRouter();
    useEffect(() => {
        router.push("register/userType")
    }, [])
    return <>
    </>
}