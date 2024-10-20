import SubTitle from "@/components/Typography/SubTitle";
import style from "../auth.module.css"
import globalStyle from "../../globals.module.css";
import WdTextField from "@/theme/WdTextField";
import WdInputContainer from "@/theme/WdInputContainer";
import WdButton from "@/theme/WdButton/WdButton";
import P from "@/components/Typography/P";
import WdLink from "@/theme/WdLink";
import WdGrid from "@/theme/WdGrid";
import WdContainer from "@/theme/WdContainer";

export default function Login() {
    return <WdContainer maxWidth="sm">
            <SubTitle className={style.title}>Login</SubTitle>
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
                <P>{"Don't you have account yet?"} </P>
                <WdLink link={"/register"} text={"REGISTER NOW"} sx={{paddingLeft: "0px"}}/>
            </div>
        </WdContainer>
    {/*</WdGrid>*/}
}