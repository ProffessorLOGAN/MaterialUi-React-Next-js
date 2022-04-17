import React from "react";
import { Typography } from "@material-ui/core";
function Typographycopm() {
  return (
    <>
      <Typography variant="h1" align="center"> Heading 1</Typography>
      <Typography variant="h2" align="left"> Heading 2</Typography>
      <Typography variant="h3"> Heading 3</Typography>
      <Typography variant="h4"> Heading 4</Typography>
      <Typography variant="h5"> Heading 5</Typography>
      <Typography variant="h6"> Heading 6</Typography>

      <hr/>

      <Typography variant="body1" align="justify" display="inline">
      <Typography variant="h3" display="inline"> body 1</Typography>
        Material-UI components work in isolation. They are self-supporting, and
        will only inject the styles they need to display. They don't rely on any
        global style-sheets such as normalize.css.Material-UI components work in
        isolation. They are self-supporting, and will only inject the styles
        they need to display. 
      </Typography>

<hr/>
      <Typography variant="body2">
      <Typography variant="h3"> body 2</Typography>
        Material-UI components work in isolation. They are self-supporting, and
        will only inject the styles they need to display. They don't rely on any
        global style-sheets such as normalize.css.Material-UI components work in
        isolation. They are self-supporting, and will only inject the styles
        they need to display. 
      </Typography>

      <hr/>

      <Typography variant="subtitle1">
      <Typography variant="h3"> subtitle1 </Typography>
        Material-UI components work in isolation. They are self-supporting, and
        will only inject the styles they need to display. They don't rely on any
        global style-sheets such as normalize.css.Material-UI components work in
        isolation. They are self-supporting, and will only inject the styles
        they need to display. 
      </Typography>
      <hr/>

      <Typography variant="subtitle2">
      <Typography variant="h3">subtitle2 </Typography>
        Material-UI components work in isolation. They are self-supporting, and
        will only inject the styles they need to display. They don't rely on any
        global style-sheets such as normalize.css.Material-UI components work in
        isolation. They are self-supporting, and will only inject the styles
        they need to display. 
      </Typography>
    </>
  );
}

export default Typographycopm;
