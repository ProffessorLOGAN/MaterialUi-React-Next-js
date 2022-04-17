import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    backgroundColor: theme.palette.grey[300],
    padding: 50,
  },
  mybox: {
    width: 300,
    backgroundColor: "grey",
    color: "white",
    padding: 50,
    borderRadius: 8,
    boxShadow: "0px 10px 10px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
}));

function Csstheme() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Box className={classes.mybox}>
          <Typography variant="h3">Heading 1</Typography>
          <Typography variant="subtitle1">
            Material-UI components work in isolation. They are self-supporting,
            and will only inject the styles they need to display. They don't
            rely on any global style-sheets such as normalize.css.Material-UI
            components work in isolation. They are self-supporting, and will
            only inject the styles they need to display.
          </Typography>
        </Box>
        <Box className={classes.mybox}>
          <Typography variant="h3">Heading 2</Typography>
          <Typography variant="subtitle1">
            Material-UI components work in isolation. They are self-supporting,
            and will only inject the styles they need to display. They don't
            rely on any global style-sheets such as normalize.css.Material-UI
            components work in isolation. They are self-supporting, and will
            only inject the styles they need to display.
          </Typography>
        </Box>
        <Box className={classes.mybox}>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="subtitle1">
            Material-UI components work in isolation. They are self-supporting,
            and will only inject the styles they need to display. They don't
            rely on any global style-sheets such as normalize.css.Material-UI
            components work in isolation. They are self-supporting, and will
            only inject the styles they need to display.
          </Typography>
        </Box>
        <Box className={classes.mybox}>
          <Typography variant="h3">Heading 4</Typography>
          <Typography variant="subtitle1">
            Material-UI components work in isolation. They are self-supporting,
            and will only inject the styles they need to display. They don't
            rely on any global style-sheets such as normalize.css.Material-UI
            components work in isolation. They are self-supporting, and will
            only inject the styles they need to display.
          </Typography>
        </Box>
      </div>
    </>
  );
}

export default Csstheme;
