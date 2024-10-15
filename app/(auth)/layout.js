import {Box, Container, Grid2, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";
import authImage from "@/resources/images/login-image.jpg";
import style from "./layout.module.css";
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
                src={authImage}
                alt="auth image"
                style={{ width: '100%', height: 'auto' }}
            />
        </Box>
        <Box width={"50%"}>
            <div className={style.title}>
                <h1 className={style.title}>Wedding Dreams</h1>
            </div>
            {children}
        </Box>
    </Stack>
}