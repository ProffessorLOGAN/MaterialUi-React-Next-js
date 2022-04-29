import React from "react";
import { Button, Box,Typography } from "@material-ui/core";
function Boxcomp() {
  return (
    <>
      <Box  p={5} boxShadow={5} textAlign="center">
      <Typography variant="h2" color="secondary" >Heading</Typography>
        <p >
          Material-UI components work in isolation. They are self-supporting,
          and will only inject the styles they need to display. They don't rely
          on any global style-sheets such as normalize.css.
        </p>
        <Button variant="contained" color="secondary">
          Hello World
        </Button>
      </Box>
    </>
  );
}

export default Boxcomp;
