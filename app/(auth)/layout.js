import Image from "next/image";
import img from "@/resources/images/young-bride-groom-casual-formal-wedding-dress.jpg";
import style from "./auth.module.css";
import LogoText from "@/components/Typography/LogoText";
import WdContainer from "@/theme/WdContainer";
import P from "@/components/Typography/P";
import WdBox from "@/theme/WdBox";
import WdStack from "@/theme/WdStack";

export default function AuthLayout({children}) {

    return <WdStack
        direction="row" spacing={1}
        sx={[
            {
                height: {xs: 'auto', md: '100%'},
                backgroundColor: "#fefefe"
            }

        ]}
    >
        <WdBox width="50%">
            <Image
                src={img}
                alt="auth image"
                style={{width: '100%', height: 'auto'}}
            />
        </WdBox>
        <WdBox width={"50%"} sx={{position: "relative"}}>
            <div className={style.title} style={{paddingBottom: "80px"}}>
                <LogoText className={style.title} text={"Wedding Dreams"} sx={{textAlign: "center"}}></LogoText>
            </div>
            <WdContainer sx={{padding: "40px"}}>
                {children}
            </WdContainer>
            <div className={style.footer}>
                <P>© Wedding Dreams (pvt) ltd. All Right Reserved</P>
            </div>
        </WdBox>
    </WdStack>
}