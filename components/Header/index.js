import WdAppBar from "@/theme/WdAppBar";
import * as React from "react";
import WdContainer from "@/theme/WdContainer";
import WdToolbar from "@/theme/WdToolbar";
import LogoText from "@/components/Typography/LogoText";
import WdBox from "@/theme/WdBox";
import WdIconButton from "@/theme/WdIconButton";
import WdMenu from "@/theme/WdMenu";
import WdMenuItem from "@/theme/WdMenu/WdMenuItem";
import WdAvatar from "@/theme/WdAvatar";
import WdTypography from "@/theme/WdTypography";
import SiteMenu from "@/components/SiteMenu";
import WdButton from "@/theme/WdButton/WdButton";

import style from "./header.module.css";

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
                <LogoText href={"#"} text={"Wedding Dream"} sx={{display: {xs: 'none', md: 'flex'}}}/>
                <WdBox className={style.webMenuBox} sx={{display: {xs: 'none', md: 'flex'}}}>
                    <SiteMenu hamberger={false}/>
                </WdBox>
                {/*<AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>*/}
                <LogoText href={"#"} text={"WD"} sx={{ mr: 2, display: {xs: 'flex', md: 'none'}}}/>

                <WdBox sx={{flexGrow: 1, justifyContent: "flex-end", display: {xs: 'flex', md: 'none'}}}>
                   <SiteMenu hamberger={true}/>
                </WdBox>
                <WdBox sx={{flexGrow: 0}}>
                    <WdToolbar title="Open settings">
                        <WdIconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                            <WdAvatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                        </WdIconButton>
                    </WdToolbar>
                    <WdMenu
                        sx={{mt: '45px'}}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <WdMenuItem key={setting} onClick={handleCloseUserMenu}>
                                <WdTypography sx={{textAlign: 'center'}}>{setting}</WdTypography>
                            </WdMenuItem>
                        ))}
                    </WdMenu>
                </WdBox>
            </WdToolbar>
        </WdContainer>
    </WdAppBar>
}

export default Header;