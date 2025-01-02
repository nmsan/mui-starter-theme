import {DataGrid} from "@mui/x-data-grid";
import PropTypes from "prop-types";

const WdDataGrid = props => {
    return <DataGrid
        initialState={{
            pagination: {
                paginationModel: {
                    pageSize: 5,
                },
            },
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        {...props} />
}

WdDataGrid.prototype = {
    rows: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    initialState: PropTypes.object,
    pageSizeOptions: PropTypes.array,
}
export default WdDataGrid;