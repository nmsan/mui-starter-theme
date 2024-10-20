'use client'
import style from "@/app/(auth)/auth.module.css";
import globalStyle from "../../../globals.module.css";

import WdInputContainer from "@/theme/WdInputContainer";
import WdTextField from "@/theme/WdTextField";
import WdContainer from "@/theme/WdContainer";
import P from "@/components/Typography/P";
import WdButton from "@/theme/WdButton/WdButton";
import WdLink from "@/theme/WdLink";
import {useRouter} from "next/navigation";

const Verify = () => {
    const router = useRouter();


    const  submit = () => {
        router.push("/")
    }
    return <>
        <WdContainer maxWidth="sm">
            <div className={globalStyle.center}>
                <P className={style.title}>Verification code is send to 7770506078</P>
            </div>
            <WdInputContainer>
                <WdTextField placeholder={"CODE"}></WdTextField>
            </WdInputContainer>
            <div className={`${style.title}`}>
                <P>{"Don't you get the code yet?"} </P>
                <WdLink link={"/register"} text={"RESEND"} sx={{paddingLeft: "0px"}}/>
            </div>
            <div className={style.buttonContainer}>
                <WdButton onClick={submit}>Verify</WdButton>
            </div>
        </WdContainer>
    </>
}
export default Verify;