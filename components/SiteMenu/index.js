import WdButton from "@/theme/WdButton/WdButton";
import * as React from "react";
import WdIconButton from "@/theme/WdIconButton";
import MenuIcon from "@mui/icons-material/Menu";
import WdMenu from "@/theme/WdMenu";
import WdMenuItem from "@/theme/WdMenu/WdMenuItem";
import WdTypography from "@/theme/WdTypography";
import {KeyboardArrowDown} from "@mui/icons-material";
import {useRouter} from "next/navigation";

export default function SiteMenu({hamburger}) {
    const router = useRouter();
    const pages = ['Auth'];
    const tree = [{
        page: "Auth", children: [{page: "Login", route: "login"}, {page: "Register", route: "register"}]
    }, {
        page: "Form Elements"
    }]
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        console.log("close")
        setAnchorElNav(null);
    };
    const onMenuSelect = route => {
        console.log("router", route)
        handleCloseNavMenu();
        router.push(route);
    }
    const webMenu = () => {
        return <span>{tree.map(({page, children, route}) => {
            if (children) {

                return <>
                    <WdButton
                        variant={"text"}
                        sx={{color: '#000'}}
                        key={route}
                        id="basic-button"
                        aria-controls={anchorElNav ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={anchorElNav ? 'true' : undefined}
                        endIcon={<KeyboardArrowDown/>}
                        onMouseEnter={handleOpenNavMenu}
                        // onMouseLeave={handleCloseNavMenu}
                    >
                        {page}
                    </WdButton>
                    <WdMenu id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom', horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top', horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}>
                        {children.map((p) => (<WdMenuItem key={p.page} onClick={() => onMenuSelect(p.route)}>
                            <WdTypography sx={{textAlign: 'center'}}>{p.page}</WdTypography>
                        </WdMenuItem>))}
                    </WdMenu>
                </>
            } else {
                return <WdButton
                    variant={"text"}
                    sx={{color: '#000'}}
                    key={route}
                    id="basic-button"
                    aria-controls={anchorElNav ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={anchorElNav ? 'true' : undefined}
                    onClick={() => onMenuSelect(route)}
                >
                    {page}
                </WdButton>
            }
        })}</span>
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
                    vertical: 'bottom', horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top', horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{display: {xs: 'block', md: 'none'}}}
            >
                {pages.map((page) => (<WdMenuItem key={page} onClick={handleCloseNavMenu}>
                    <WdTypography sx={{textAlign: 'center'}}>{page}</WdTypography>
                </WdMenuItem>))}
            </WdMenu>
        </>
    }
    return <>{!hamburger ? webMenu() : mobileMenu()}</>
}