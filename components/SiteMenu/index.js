import WdButton from "@/Theme/WdButton/WdButton";
import * as React from "react";
import WdIconButton from "@/Theme/WdIconButton";
import MenuIcon from "@mui/icons-material/Menu";
import WdMenu from "@/Theme/WdMenu";
import WdMenuItem from "@/Theme/WdMenu/WdMenuItem";
import WdTypography from "@/Theme/WdTypography";
import WdBox from "@/Theme/WdBox";

export default function SiteMenu({hamberger}) {
    const pages = ['Auth'];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const webMenu = () => {
        {
            pages.map((page) => (
                <WdButton
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{my: 2, color: 'inherit', display: 'block'}}
                >
                    {page}
                </WdButton>
            ))
        }
    }
    const mobileMenu = () => {
        return <><WdIconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
        >
            <MenuIcon/>
        </WdIconButton>
            <WdMenu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{display: {xs: 'block', md: 'none'}}}
            >
                {pages.map((page) => (
                    <WdMenuItem key={page} onClick={handleCloseNavMenu}>
                        <WdTypography sx={{textAlign: 'center'}}>{page}</WdTypography>
                    </WdMenuItem>
                ))}
            </WdMenu></>
    }
    return <>{hamberger ? webMenu() : mobileMenu()}</>
}