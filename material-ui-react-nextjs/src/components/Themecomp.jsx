import React from "react";
import { Container, Paper, Box, Typography, Button } from "@material-ui/core";
import { makeStyles,ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Theme from "../styles/comptheme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: blue[100],
    paddingTop: theme.spacing(5),
  },
  mr:{
    marginRight: theme.spacing(2),
  },
}));

function Themecomp() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={Theme}>
      <Container className={classes.root}>
        <Paper
          component={Box}
          width="30%"
          p={3}
          borderLeft={5}
          borderColor="primary.main"
          boxShadow={6}
          textAlign="left"
        >
          <Typography variant="h4" color="secondary">Get Started</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Material-UI components work in isolation, Material-UI components
            work in isolation. They are self-supporting, and will only inject
            the styles they need to display. They don't rely on any global
            style-sheets such as normalize
          </Typography>
          <Button variant="contained" color="secondary" className={classes.mr}>
            Read more
          </Button>
          <Button variant="contained" color="primary">
            Share more
          </Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Themecomp;
