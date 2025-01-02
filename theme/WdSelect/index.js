import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

const WdSelect = props => {
    const {labelText, id, value, setValue, options, required} = props;

    const handleChange = e => {
        console.log(e);
    }
    return <FormControl fullWidth required={required}>
        <InputLabel id={id + 'lbl'}>{labelText}</InputLabel>
        <Select
            labelId={id + 'lbl'}
            id={id}
            value={value}
            label={labelText}
            onChange={handleChange}
            variant="outlined"
        >
            {
                options.map(({value, text}) => <MenuItem value={value} key={value}>{text}</MenuItem>)
            }
        </Select>
    </FormControl>
}
WdSelect.propTypes = {
    labelText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired || PropTypes.number.isRequired,
    options: PropTypes.array.isRequired,
    setValue: PropTypes.func.isRequired,
    required: PropTypes.bool,
}
export default WdSelect;