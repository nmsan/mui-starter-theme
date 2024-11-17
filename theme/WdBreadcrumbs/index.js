import PropTypes from "prop-types";
import {Breadcrumbs, Link} from "@mui/material";
import Typography from "@mui/material/Typography";

const WdBreadcrumbs = ({paths, current}) => {

    return <Breadcrumbs aria-label="breadcrumb">
        {
            paths
                ? paths.map(({route, text}) => {
                        return <Link key={route} underline="hover" color="inherit" href={route}>
                            {text}
                        </Link>
                    }
                )
                : ''
        }
        <Typography sx={{color: 'text.primary'}}>{current}</Typography>
    </Breadcrumbs>
}

WdBreadcrumbs.propType = {
    paths: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired
}
export default WdBreadcrumbs;