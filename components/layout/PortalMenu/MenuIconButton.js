import PropTypes from "prop-types";
import * as React from "react";
import WdListItem from "../../../theme/WdListItem";
import WdListItemButton from "../../../theme/WdListItem/WdListItemButton";
import WdListItemIcon from "../../../theme/WdListItem/WdListItemIcon";
import WdListItemText from "../../../theme/WdListItem/WdListItemText";
import {usePathname, useRouter} from "next/navigation";
import {useState} from "react";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import WdCollapse from "../../../theme/WdCollapse";
import WdList from "../../../theme/WdList";

const MenuIconButton = ({route, text, icon, subs}) => {
    const router = useRouter();
    const pathName = usePathname();

    const [open, setOpen] = useState(false)

    const menuClick = () => {
        if(subs) {
            setOpen(!open)
        } else {
            router.push(route);
        }
    }
    return <
    >
        <WdListItemButton onClick={() => menuClick()}>
            <WdListItemIcon>
                {icon}
            </WdListItemIcon>
            <WdListItemText primary={text} />
            {subs ? (open ? <ExpandLess/> : <ExpandMore/>) : ''}
        </WdListItemButton>
        <WdCollapse in={open} timeout="auto" unmountOnExit>
            <WdList component="div" disablePadding>
                <WdListItemButton sx={{ pl: 4 }}>
                    <WdListItemIcon>
                        <StarBorder />
                    </WdListItemIcon>
                    <WdListItemText primary="Starred" />
                </WdListItemButton>
            </WdList>
        </WdCollapse>
    </>
}
MenuIconButton.prototype = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    subs: PropTypes.array,
    route: PropTypes.string,
}
export default MenuIconButton;