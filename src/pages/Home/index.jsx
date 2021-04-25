import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from "./styles"
import { withStyles } from '@material-ui/core/styles'
import Fetch from "./fetch"
import Divider from '@material-ui/core/Divider';


function Home(props) {

  return (
    <div>
        <Typography component="div" key="h2" variant="h2">
            Mock-up skeleton
        </Typography>
        <br/>
        <Divider variant="middle" />
        <Fetch/>
        <br/>

    </div>
  );
}

export default withStyles(styles)(Home)
