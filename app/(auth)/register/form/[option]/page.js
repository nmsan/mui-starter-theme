'use client'
import SubTitle from "@/components/Typography/SubTitle";
import style from "../../../auth.module.css";
import globalStyle from "../../../../globals.module.css";
import WdTextField from "@/theme/WdTextField";
import WdInputContainer from "@/theme/WdInputContainer";
import WdButton from "@/theme/WdButton/WdButton";
import P from "@/components/Typography/P";
import WdLink from "@/theme/WdLink";
import WdContainer from "@/theme/WdContainer";
import {useRouter} from "next/navigation";

export default function Form({params}) {

    const router = useRouter()

    function submit() {
        router.push("/register/verify")
    }
    return <>
        <WdContainer maxWidth="sm">
            <SubTitle className={style.title}>Register Form </SubTitle>
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
                <P>{"Already Have a Account?"} </P>
                <WdLink link={"/login"} text={"LOGIN NOW"} sx={{paddingLeft: "0px"}}/>
            </div>
        </WdContainer>
    </>
}