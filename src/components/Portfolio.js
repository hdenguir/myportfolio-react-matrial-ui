import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/javascript-fullstack.jpg';
import project3 from '../images/react-redux.jpg';
import project4 from '../images/mern-stack.jpg';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#233',
    height: '100%'
  },
  cardContainer: {
    maxWidth: 345,
    margin: '2rem auto'
  }
}));

const Portfolio = () => {
  const classes = useStyles();
  const [listProjects] = useState([
    {
      title: 'Project 1',
      imgUrl: project1,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita fugit excepturi optio dolorem recusandae
                    reprehenderit reiciendis veritatis eum libero illo? Earum,
                    repudiandae provident quidem ducimus consequuntur similique
                    veritatis mollitia nulla!`,
      url: '#'
    },
    {
      title: 'Project 2',
      imgUrl: project2,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita fugit excepturi optio dolorem recusandae
                    reprehenderit reiciendis veritatis eum libero illo? Earum,
                    repudiandae provident quidem ducimus consequuntur similique
                    veritatis mollitia nulla!`,
      url: '#'
    },
    {
      title: 'Project 3',
      imgUrl: project3,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita fugit excepturi optio dolorem recusandae
                    reprehenderit reiciendis veritatis eum libero illo? Earum,
                    repudiandae provident quidem ducimus consequuntur similique
                    veritatis mollitia nulla!`,
      url: '#'
    },
    {
      title: 'Project 4',
      imgUrl: project4,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita fugit excepturi optio dolorem recusandae
                    reprehenderit reiciendis veritatis eum libero illo? Earum,
                    repudiandae provident quidem ducimus consequuntur similique
                    veritatis mollitia nulla!`,
      url: '#'
    }
  ]);
  return (
    <>
      <Navbar />
      <Box component="div">
        <Grid container justify="center" className={classes.mainContainer}>
          {/* Project 1 */}
          {listProjects.map(({ title, imgUrl, description, url }, indx) => (
            <Grid key={indx} item xs={12} sm={8} md={6} lg={4}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={title}
                    height="140"
                    image={imgUrl}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}

          {/* Project 2 
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 2"
                  height="140"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 2
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita fugit excepturi optio dolorem recusandae
                    reprehenderit reiciendis veritatis eum libero illo? Earum,
                    repudiandae provident quidem ducimus consequuntur similique
                    veritatis mollitia nulla!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>*/}
          {/* Project 3 
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 3"
                  height="140"
                  image={project3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 3
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita fugit excepturi optio dolorem recusandae
                    reprehenderit reiciendis veritatis eum libero illo? Earum,
                    repudiandae provident quidem ducimus consequuntur similique
                    veritatis mollitia nulla!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>*/}
          {/* Project 4 
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 4"
                  height="140"
                  image={project4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 4
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita fugit excepturi optio dolorem recusandae
                    reprehenderit reiciendis veritatis eum libero illo? Earum,
                    repudiandae provident quidem ducimus consequuntur similique
                    veritatis mollitia nulla!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>*/}
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
