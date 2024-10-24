import Image from "next/image";
import img from "@/resources/images/young-bride-groom-casual-formal-wedding-dress.jpg";
import style from "./auth.module.css";
import WdLogoText from "@/theme/WdTypography/WdLogoText";
import WdContainer from "@/theme/WdContainer";
import WdPText from "@/theme/WdTypography/WdPText";
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
                <WdLogoText className={style.title} text={"Wedding Dreams"} sx={{textAlign: "center"}}></WdLogoText>
            </div>
            <WdContainer sx={{padding: "40px"}}>
                {children}
            </WdContainer>
            <div className={style.footer}>
                <WdPText>© Wedding Dreams (pvt) ltd. All Right Reserved</WdPText>
            </div>
        </WdBox>
    </WdStack>
}