import React from 'react';
import data from "../../fixtures/data.json"
import Dataloaded from "./dataloaded"
import LoaderComponent from "./loaderComponent"


class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loaded : false,
            articles : []
        }
    }

    componentDidMount(){

        let {  articles  } = this.state

        setTimeout(() => {
            data.forEach(function(row){articles.push(row)})
            this.setState({loaded:true})
          }, 1500);


    }


    render(){

        const { articles,loaded } = this.state

        return(
            <div>
                {loaded ? <Dataloaded dataset={articles} />  : <LoaderComponent /> }
            </div>
        )
    }
}


export default Home
