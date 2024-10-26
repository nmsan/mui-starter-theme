import style from "@/app/portal/portal.module.css";
import WdSubTitle from "@/theme/WdTypography/WdSubTitle";
import * as React from "react";
import {Business, Dashboard, ManageAccounts, TimeToLeave} from "@mui/icons-material";
import {usePathname, useRouter} from "next/navigation";
import WdListItem from "@/theme/WdListItem";
import WdListItemButton from "@/theme/WdListItem/WdListItemButton";
import WdListItemIcon from "@/theme/WdListItem/WdListItemIcon";
import WdListItemText from "@/theme/WdListItem/WdListItemText";
import WdToolbar from "@/theme/WdToolbar";
import WdDrawer from "@/theme/WdDrawer";
import WdList from "@/theme/WdList";


const settings = [
    {route: '/portal/dashboard', text: 'Dashboard', icon: <Dashboard key={1}/>},
    {route: '/portal/business', text: 'My business', icon: <Business key={2}/>},
    {route: '/portal/account', text: 'Account', icon: <ManageAccounts key={3}/>},
    {route: '/login', text: 'Logout', icon: <TimeToLeave key={4}/>},
];

const PortalMenu = () => {
    const router = useRouter();
    const pathName = usePathname();
    const menuClick = route => {
        router.push(route);
    }
    const menuButton = ({route, text, icon}) => {
        return <WdListItem key={route} disablePadding sx = {pathName===route ? {borderLeft: "6px solid #7f00ff", paddingLeft: "4px"}: {}}>
            <WdListItemButton>
                <WdListItemIcon>
                    {icon}
                </WdListItemIcon>
                <WdListItemText primary={text} onClick={() => menuClick(route)}/>
            </WdListItemButton>
        </WdListItem>
    }
    return <>
        <WdToolbar>
            <div className={style.portalTitle}><WdSubTitle>Portal</WdSubTitle></div>
        </WdToolbar>
        <WdDrawer/>
        <WdList>
            {settings.map(setting => menuButton(setting))}
        </WdList>
    </>
}
export default PortalMenu;