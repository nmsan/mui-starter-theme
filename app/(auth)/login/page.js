import SubTitle from "@/components/Typography/SubTitle";
import style from "./login.module.css";
import globalStyle from "../../globals.module.css";
import WdTextField from "@/theme/WdTextField";
import WdInputContainer from "@/theme/WdInputContainer";
import WdButton from "@/theme/WdButton/WdButton";
import Paragraph from "@/components/Typography/Paragraph";
import WdLink from "@/theme/WdLink";
import WdGrid from "@/theme/WdGrid";
import WdContainer from "@/theme/WdContainer";

export default function Login() {
    return <WdContainer maxWidth="sm">
            <SubTitle className={style.title}>Login</SubTitle>
            <WdInputContainer>
                <WdTextField placeholder={"Email Address"}></WdTextField>
            </WdInputContainer>
            <WdInputContainer>
                <WdTextField placeholder={"Password"}></WdTextField>
            </WdInputContainer>
            <WdButton type={"text"} ><b>FORGET PASSWORD?</b></WdButton>
            <div className={style.title}>
                <WdButton variant="contained">LOGIN</WdButton>
            </div>
            <div className={`${style.title} ${globalStyle.pt_20}`}  >
                <Paragraph>{"Don't you have account yet?"} </Paragraph>
                <WdLink link={"#"} text={"REGISTER NOW"}/>
            </div>
        </WdContainer>
    {/*</WdGrid>*/}
}