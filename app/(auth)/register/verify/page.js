'use client'
import style from "@/app/(auth)/auth.module.css";
import globalStyle from "../../../globals.module.css";

import WdTextField from "@/theme/WdTextField";
import WdContainer from "@/theme/WdContainer";
import WdPText from "@/theme/WdTypography/WdPText";
import WdButton from "@/theme/WdButton/WdButton";
import WdLink from "@/theme/WdLink";
import {useRouter} from "next/navigation";
import WdInputContainer from "@/theme/WdInputContainer";

const Verify = () => {
    const router = useRouter();


    const  submit = () => {
        router.push("/")
    }
    return <>
        <WdContainer maxWidth="sm">
            <div className={globalStyle.center}>
                <WdPText className={style.title}>Verification code is send to 7770506078</WdPText>
            </div>
            <WdInputContainer>
                <WdTextField placeholder={"CODE"}></WdTextField>
            </WdInputContainer>
            <div className={`${style.title}`}>
                <WdPText>{"Don't you get the code yet?"} </WdPText>
                <WdLink link={"/register"} text={"RESEND"} sx={{paddingLeft: "0px"}}/>
            </div>
            <div className={style.buttonContainer}>
                <WdButton onClick={submit}>Verify</WdButton>
            </div>
        </WdContainer>
    </>
}
export default Verify;