import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[200],
    paddingTop: theme.spacing(3),
  },
}));

function Cards() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <Card>
            <CardHeader
              title="ProffessorLOGAN"
              subheader="20th April 2022"
              action={
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
              }
            />
            <CardActionArea>
              <CardMedia
                avatar={<Avatar>PL</Avatar>}
                image="https://images4.alphacoders.com/295/thumb-1920-2956.jpg"
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography variant="h5">Post title</Typography>
                <Typography variant="subtitle1">
                  extension provides options to customize the behavior of the
                  snippets
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button varient="outlined">Read more</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                image="https://images4.alphacoders.com/295/thumb-1920-2956.jpg"
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography variant="h5">Post title</Typography>
                <Typography variant="subtitle1">
                  extension provides options to customize the behavior of the
                  snippets
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button varient="outlined">Read more</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                image="https://images4.alphacoders.com/295/thumb-1920-2956.jpg"
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography variant="h5">Post title</Typography>
                <Typography variant="subtitle1">
                  extension provides options to customize the behavior of the
                  snippets
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button varient="outlined">Read more</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                image="https://images4.alphacoders.com/295/thumb-1920-2956.jpg"
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography variant="h5">Post title</Typography>
                <Typography variant="subtitle1">
                  extension provides options to customize the behavior of the
                  snippets
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button varient="outlined">Read more</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cards;
