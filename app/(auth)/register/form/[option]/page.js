'use client'
import WdSubTitle from "@/theme/WdTypography/WdSubTitle";
import style from "../../../auth.module.css";
import globalStyle from "../../../../globals.module.css";
import WdTextField from "@/theme/WdTextField";
import WdButton from "@/theme/WdButton/WdButton";
import WdPText from "@/theme/WdTypography/WdPText";
import WdLink from "@/theme/WdLink";
import {useRouter} from "next/navigation";
import WdContainer from "@/theme/WdContainer";
import WdInputContainer from "@/theme/WdInputContainer";

export default function Form({params}) {

    const router = useRouter()

    function submit() {
        router.push("/register/verify")
    }
    return <>
        <WdContainer maxWidth="sm">
            <WdSubTitle className={style.title}>Register Form </WdSubTitle>
            <WdInputContainer>
                <WdTextField placeholder={"NAME"}></WdTextField>
            </WdInputContainer>
            <WdInputContainer>
                <WdTextField placeholder={"EMAIL ADDRESS"}></WdTextField>
            </WdInputContainer>
            <WdInputContainer>
                <WdTextField placeholder={"PASSWORD"}></WdTextField>
            </WdInputContainer>
            <WdInputContainer>
                <WdTextField placeholder={"MOBILE"}></WdTextField>
            </WdInputContainer>
            <div className={style.title}>
                <WdButton variant="contained" sx={{padding: "8px 70px"}} onClick={submit}>Submit</WdButton>
            </div>
            <div className={`${style.title} ${globalStyle.pt_20}`}>
                <WdPText>{"Already Have a Account?"} </WdPText>
                <WdLink link={"/login"} text={"LOGIN NOW"} sx={{paddingLeft: "0px"}}/>
            </div>
        </WdContainer>
    </>
}