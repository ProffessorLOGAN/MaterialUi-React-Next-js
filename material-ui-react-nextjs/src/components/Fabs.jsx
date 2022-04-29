import {
  Container,
  Fab,
  Card,
  Grid,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:"100vw",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: theme.palette.grey[300],
  },
  add: {
    position: "fixed",
    bottom: "5%",
    right: "5%",
    zIndex: theme.zIndex.tooltip,
  },
}));

function Fabs() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(result.data);
  };
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <Container className={classes.root}>
      <Fab variant="extended" color="secondary" className={classes.add}>
        <AddIcon /> Create new
      </Fab>

      <Grid container spacing={4} boxShadow={4}>
        {users.map((user) => (
          <Grid item sm={3} >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://via.placeholder.com/300x200/555"
                />
                <CardContent>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography>{user.mail}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="outlined" color="secondary">
                  View profile
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Fabs;
