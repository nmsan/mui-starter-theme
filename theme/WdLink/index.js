import {Link} from "@mui/material";

export default function WdLink({link, text, sx}) {

    return <Link href={link} sx={{fontWeight: 600, ...sx}}>{text}</Link>
}