import React from "react";
import { Typography, Grid, Box, Paper, Button } from "@material-ui/core";

function Gridcomp() {
  return (
    <>
      <Grid container  spacing={4} >
        <Grid item lg={3} sm={6}>
          <Paper>
            <Box p={2}>
              <Typography variant="h5">Read more</Typography>
              <Typography variant="subtitle1" gutterBottom>
                Material-UI components work in isolation, Material-UI components
                work in isolation. They are self-supporting.
              </Typography>
              <Button variant="outlined" color="primary">read more</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={3} sm={6}>
          <Paper>
            <Box p={2}>
              <Typography variant="h5">Read more</Typography>
              <Typography variant="subtitle1" gutterBottom>
                Material-UI components work in isolation, Material-UI components
                work in isolation. They are self-supporting.
              </Typography>
              <Button variant="outlined" color="primary">read more</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={3} sm={6}>
          <Paper>
            <Box p={2}>
              <Typography variant="h5">Read more</Typography>
              <Typography variant="subtitle1" gutterBottom>
                Material-UI components work in isolation, Material-UI components
                work in isolation. They are self-supporting.
              </Typography>
              <Button variant="outlined" color="primary">read more</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={3} sm={6}>
          <Paper>
            <Box p={2}>
              <Typography variant="h5">Read more</Typography>
              <Typography variant="subtitle1" gutterBottom>
                Material-UI components work in isolation, Material-UI components
                work in isolation. They are self-supporting.
              </Typography>
              <Button variant="outlined" color="primary">read more</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Gridcomp;
