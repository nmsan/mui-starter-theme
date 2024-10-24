import WdSubTitle from "@/theme/WdTypography/WdSubTitle";
import style from "../auth.module.css"
import globalStyle from "../../globals.module.css";
import WdTextField from "@/theme/WdTextField";
import WdInputContainer from "@/theme/WdInputContainer";
import WdButton from "@/theme/WdButton/WdButton";
import WdPText from "@/theme/WdTypography/WdPText";
import WdLink from "@/theme/WdLink";
import WdContainer from "@/theme/WdContainer";

export default function Login() {
    return <WdContainer maxWidth="sm">
            <WdSubTitle className={style.title}>Login</WdSubTitle>
            <WdInputContainer>
                <WdTextField placeholder={"EMAIL ADDRESS"}></WdTextField>
            </WdInputContainer>
            <WdInputContainer>
                <WdTextField placeholder={"PASSWORD"}></WdTextField>
            </WdInputContainer>
            <WdButton type={"text"} variant="text" ><span style={{fontWeight: 600}}>FORGET PASSWORD?</span></WdButton>
            <div className={style.title}>
                <WdButton sx={{padding: "8px 70px"}}>LOGIN</WdButton>
            </div>
            <div className={`${style.title} ${globalStyle.pt_20}`}  >
                <WdPText>{"Don't you have account yet?"} </WdPText>
                <WdLink link={"/register"} text={"REGISTER NOW"} sx={{paddingLeft: "0px"}}/>
            </div>
        </WdContainer>
}