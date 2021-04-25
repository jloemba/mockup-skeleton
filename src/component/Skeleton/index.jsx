import React from 'react';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';


function ContentIsLoading() {

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


export default ContentIsLoading

