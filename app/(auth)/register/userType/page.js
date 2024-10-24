'use client'
import WdSubTitle from "@/theme/WdTypography/WdSubTitle";
import style from "../../auth.module.css"
import globalStyle from "../../../globals.module.css";
import WdContainer from "@/theme/WdContainer";
import WdGrid from "@/theme/WdGrid";
import {VolunteerActivismTwoTone, Wc, WcTwoTone} from "@mui/icons-material";
import WdIconButton from "@/theme/WdIconButton";
import WdPText from "@/theme/WdTypography/WdPText";
import {useState} from "react";
import WdTypeWriter from "@/theme/WdTypography/WdTypeWriter";
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
            <WdSubTitle className={style.title}>{"I'm"} </WdSubTitle>
            <div className={globalStyle.center}>
                <WdPText><WdTypeWriter text={options[index]} delay={50}></WdTypeWriter></WdPText>
            </div>
            <WdGrid container spacing={8} sx={{marginTop: "40px", marginBottom: "40px"}}>
                <WdGrid size={6}>
                    <div className={style.userTypeIconContainer}>
                        <WdIconButton onClick={() => change(0)}><VolunteerActivismTwoTone
                            sx={{fontSize: "120px"}}/></WdIconButton>
                    </div>
                    <div className={globalStyle.center}><WdPText>{options[0]}</WdPText></div>

                </WdGrid>
                <WdGrid size={6}>
                    <div className={style.userTypeIconContainer}>
                        <WdIconButton onClick={() => change(1)}><WcTwoTone sx={{fontSize: "120px"}}/></WdIconButton>
                    </div>
                    <div className={globalStyle.center}><WdPText>{options[1]}</WdPText></div>
                </WdGrid>
            </WdGrid>
            <div className={globalStyle.center}>
                <WdButton  onClick={next} disabled={index===undefined}>Next</WdButton>
            </div>
        </WdContainer>
    </>
}