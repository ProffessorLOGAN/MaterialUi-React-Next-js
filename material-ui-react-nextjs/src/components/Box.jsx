import React from "react";
import { Button, Box } from "@material-ui/core";
function Boxcomp() {
  return (
    <>
      <Box height={300} width={800} p={5} boxShadow={10} component="section">
        <p>
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
