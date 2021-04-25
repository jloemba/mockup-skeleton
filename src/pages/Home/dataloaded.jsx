import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from "./styles"
import { withStyles } from '@material-ui/core/styles'
import InfiniteScroll from "react-infinite-scroll-component";
import ContentIsLoading from "../../component/Skeleton/"

function TypographyDemo(props) {
    const { loading = false , title,content } = props;
    return (
      <div>
         <Typography component="div" key="h4" variant="h4">
            {title}
        </Typography>
        <Typography component="div">
         {content} 
        </Typography>
      </div>
    );
  }




  class Dataloaded extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            items: Array.from({ length: 20 }),
            hasMore: true,
            data:[]
        }
    }


    componentDidMount(){
        this.setState({data:this.props.dataset})
    }
  
    fetchMoreData = () => {
    
        //console.log(this.props.dataset)
        const {dataset,classes } = this.props;
        let { data } = this.state
        console.log(this.state.data)

      // a fake async api call like which sends
      // 20 more records in .5 secs
      setTimeout(() => {
     
          this.setState({
              data: this.state.data.concat(this.state.data)
          });

        
      }, 3000);
    };
  
    render() {
      
      const {classes } = this.props;
      let { data } = this.state

      return (
        <div>
        <InfiniteScroll
                  dataLength={data.length}
                  next={this.fetchMoreData}
                  hasMore={true}
                  loader={<ContentIsLoading/>}
                >
                    <Grid container>
                              {data.map(object=>
                                          <Grid item xs={12} classes={{ root: classes.grid }} >
                                                  <TypographyDemo title={object.title} content={object.content} />
                                          </Grid>
                                      
                              )}
              </Grid>
                </InfiniteScroll>
                </div>
      );
    }
  }


export default withStyles(styles)(Dataloaded)
