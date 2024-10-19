import {Box, Container, Grid2, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";
import img from "@/resources/images/img.png";
import style from "./layout.module.css";
import LogoText from "@/components/Typography/LogoText";
import WdContainer from "@/theme/WdContainer";
import Paragraph from "@/components/Typography/Paragraph";

export default function AuthLayout({children}) {

    return <Stack
        direction="row" spacing={1}
        sx={[
            {
                height: {xs: 'auto', md: '100%'},
                backgroundColor: "#fefefe"
            }

        ]}
    >
        <Box width="50%">
            <Image
                src={img}
                alt="auth image"
                style={{width: '100%', height: 'auto'}}
            />
        </Box>
        <Box width={"50%"}>
            <div className={style.title} style={{paddingBottom: "80px"}}>
                <LogoText className={style.title} text={"Wedding Dreams"} sx={{textAlign: "center"}}></LogoText>
            </div>
            <WdContainer sx={{padding: "40px"}}>
                {children}
            </WdContainer>
            <div className={style.footer}>
                <Paragraph>© Wedding Dreams (pvt) ltd. All Right Reserved</Paragraph>
            </div>
        </Box>
    </Stack>
}