import WdAppBar from "@/theme/WdAppBar";
import * as React from "react";
import WdContainer from "@/theme/WdContainer";
import WdToolbar from "@/theme/WdToolbar";
import WdLogoText from "@/theme/WdTypography/WdLogoText";
import WdBox from "@/theme/WdBox";
import WdIconButton from "@/theme/WdIconButton";
import WdMenu from "@/theme/WdMenu";
import WdMenuItem from "@/theme/WdMenu/WdMenuItem";
import WdAvatar from "@/theme/WdAvatar";
import WdTypography from "@/theme/WdTypography";
import SiteMenu from "@/components/SiteMenu";

import style from "./header.module.css";
import ProfileOption from "@/components/ProfileOption";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return <WdAppBar position="static" color="transparent">
        <WdContainer maxWidth="xl">
            <WdToolbar disableGutters>
                <WdLogoText href={"#"} text={"Wedding Dream"} sx={{display: {xs: 'none', md: 'flex'}}}/>
                <WdBox className={style.webMenuBox} sx={{display: {xs: 'none', md: 'flex'}}}>
                    <SiteMenu hamberger={false}/>
                </WdBox>
                {/*<AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>*/}
                <WdLogoText href={"#"} text={"WD"} sx={{ mr: 2, display: {xs: 'flex', md: 'none'}}}/>

                <WdBox sx={{flexGrow: 1, justifyContent: "flex-end", display: {xs: 'flex', md: 'none'}}}>
                   <SiteMenu hamberger={true}/>
                </WdBox>
                <WdBox sx={{flexGrow: 0}}>
                    <ProfileOption/>
                </WdBox>
            </WdToolbar>
        </WdContainer>
    </WdAppBar>
}

export default Header;