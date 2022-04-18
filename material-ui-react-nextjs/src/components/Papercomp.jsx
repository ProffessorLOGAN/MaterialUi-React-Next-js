import React from "react";
import { Container, Typography, Button, Paper, Box } from "@material-ui/core";

function Papercomp() {
  return (
    <>
      <Container maxWidth="sm">
        <Paper Varient="outlined" component={Box} p={5}>
          <Typography variant="h4"> Dj Guru production </Typography>
          <Typography variant="subtitle1">
            Material-UI components work in isolation. They are self-supporting,
            and will only inject the styles they need to display. They don't
            rely on any global style-sheets such as normalize.
          </Typography>
          <Button variant="contained" color="secondary">
            Learn More
          </Button>
        </Paper>
      </Container>
    </>
  );
}

export default Papercomp;
