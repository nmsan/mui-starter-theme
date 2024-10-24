import WdToolbar from "@/theme/WdToolbar";
import WdIconButton from "@/theme/WdIconButton";
import WdAvatar from "@/theme/WdAvatar";
import WdMenu from "@/theme/WdMenu";
import WdMenuItem from "@/theme/WdMenu/WdMenuItem";
import WdTypography from "@/theme/WdTypography";
import * as React from "react";
import {useRouter} from "next/navigation";


const settings = [
    {route: 'account', text:'Account'},
    {route: 'portal', text:'Portal'},
    {route: 'login', text:'Logout'},
];

const ProfileOption = () => {
    const router = useRouter();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        console.log(event.currentTarget)
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = route => {
        if(router) {
            router.push(route)
            setAnchorElUser(null);
        }

    };

    return <>
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
            onClose={() => handleCloseUserMenu("")}
        >
            {settings.map(({route, text}) => (
                <WdMenuItem key={route} onClick={() => handleCloseUserMenu(route)}>
                    <WdTypography sx={{textAlign: 'center'}}>{text}</WdTypography>
                </WdMenuItem>
            ))}
        </WdMenu>
    </>
}

export default ProfileOption;