import style from "@/app/portal/portal.module.css";
import WdSubTitle from "@/theme/WdTypography/WdSubTitle";
import * as React from "react";
import {Business, Dashboard, DesignServicesRounded, ManageAccounts, TimeToLeave} from "@mui/icons-material";
import WdToolbar from "@/theme/WdToolbar";
import WdDrawer from "@/theme/WdDrawer";
import WdList from "@/theme/WdList";
import MenuIconButton from "./MenuIconButton";


const settings = [
    {route: '/portal/dashboard', text: 'Dashboard', icon: <Dashboard key={1}/>},
    {route: '/portal/business', text: 'My business', icon: <Business key={2}/>},
    {route: '/portal/services', text: 'Services', icon: <DesignServicesRounded key={2}/>},
    {route: '/portal/account', text: 'Account', icon: <ManageAccounts key={3}/>},
    {
        subs: [
            {
                route: '/portal/product/list',
                text: 'List',
                icon: <Business key={2}/>,
            }
        ],
        text: 'Products',
        icon: <ManageAccounts key={3}/>
    },
    {route: '/login', text: 'Logout', icon: <TimeToLeave key={4}/>},
];

const PortalMenu = () => {

    return <>
        <WdToolbar>
            <div className={style.portalTitle}><WdSubTitle>Portal</WdSubTitle></div>
        </WdToolbar>
        <WdDrawer/>
        <WdList sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav">
            {
                settings.map(
                    setting => <MenuIconButton key={setting.text} {...setting}/>
                )
            }
        </WdList>
    </>
}
export default PortalMenu;