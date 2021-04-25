import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from "./styles"
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import { withStyles } from '@material-ui/core/styles'


function Loading() {
    return (
      <div>
         <Typography component="div" key="h3" variant="h3">
            <Skeleton />
        </Typography>
        <Typography component="div">
            <Skeleton />
        </Typography>
      </div>
    );
  }




function LoaderComponent(props) {
  const {classes } = props;

  return (
    <Grid  container spacing={3} >

    <Grid item xs={12} classes={{ root: classes.grid }} >
      <Loading />
    </Grid>

    <Grid item xs={12} classes={{ root: classes.grid }} >
      <Loading />
    </Grid>

    <Grid item xs={12} classes={{ root: classes.grid }} >
      <Loading />
    </Grid>

    <Grid item xs={12} classes={{ root: classes.grid }} >
      <Loading />
    </Grid>

  </Grid>
  );
}


export default withStyles(styles)(LoaderComponent)

