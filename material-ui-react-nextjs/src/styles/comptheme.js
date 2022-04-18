import { createTheme } from "@material-ui/core/styles";
import { deepOrange, teal } from "@material-ui/core/colors";

const Theme = createTheme({
  palette: {
    primary: {
        main:teal[500],
    },
    secondary:{
        main:deepOrange[500],
    } ,
  },
});

export default Theme;