import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export default function SelectOrder(props) {
  const handleChange = (event) => {
    props.setOrderBy(event.target.value);
  };

  return (
    <FormControl
      sx={{ color: "rgba(255, 255, 255, 0.54)", ml: 5, minWidth: 120 }}
      size="small"
    >
      <InputLabel sx={{ color: "white" }} id="demo-select-small">
        Order by
      </InputLabel>
      <Select
        sx={{ color: "white", backgroundColor: "rgba(3, 252, 177,0.1)" }}
        labelId="demo-select-small"
        id="demo-select-small"
        value={props.orderBy}
        label="Order"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"date"}>Date</MenuItem>
        <MenuItem value={"width"}>Width</MenuItem>
        <MenuItem value={"height"}>Height</MenuItem>
        <MenuItem value={"likes"}>Likes</MenuItem>
      </Select>
    </FormControl>
  );
}