'use client'
import SubTitle from "@/components/Typography/SubTitle";
import style from "../../auth.module.css"
import globalStyle from "../../../globals.module.css";
import WdContainer from "@/theme/WdContainer";
import WdGrid from "@/theme/WdGrid";
import {VolunteerActivismTwoTone, Wc, WcTwoTone} from "@mui/icons-material";
import WdIconButton from "@/theme/WdIconButton";
import P from "@/components/Typography/P";
import {useState} from "react";
import TypeWriter from "@/components/Typography/TypeWriter";
import WdButton from "@/theme/WdButton/WdButton";
import {useRouter} from "next/navigation";

export default function Register() {
    const router = useRouter();
    const options = ["Marital Resources Provide", "Getting Married"]
    const [index, setIndex] = useState(undefined)

    const change = i => {
        setIndex(i)
    }
    const next = () => {
        router.push("form/" + index,)
    }
    return <>
        <WdContainer maxWidth="sm">
            <SubTitle className={style.title}>{"I'm"} </SubTitle>
            <div className={globalStyle.center}>
                <P><TypeWriter text={options[index]} delay={50}></TypeWriter></P>
            </div>
            <WdGrid container spacing={8} sx={{marginTop: "40px", marginBottom: "40px"}}>
                <WdGrid size={6}>
                    <div className={style.userTypeIconContainer}>
                        <WdIconButton onClick={() => change(0)}><VolunteerActivismTwoTone
                            sx={{fontSize: "120px"}}/></WdIconButton>
                    </div>
                    <div className={globalStyle.center}><P>{options[0]}</P></div>

                </WdGrid>
                <WdGrid size={6}>
                    <div className={style.userTypeIconContainer}>
                        <WdIconButton onClick={() => change(1)}><WcTwoTone sx={{fontSize: "120px"}}/></WdIconButton>
                    </div>
                    <div className={globalStyle.center}><P>{options[1]}</P></div>
                </WdGrid>
            </WdGrid>
            <div className={globalStyle.center}>
                <WdButton  onClick={next} disabled={index===undefined}>Next</WdButton>
            </div>
        </WdContainer>
    </>
}