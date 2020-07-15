import React, { Component,Fragment } from 'react';
import SearchComponent from './Components/SearchComponent';
import unplash from "./API/unplash-api";
import ImageList from "./Components/ImageList";

class App extends Component {
    constructor(props) {
        super(props);    
        this.state = {
             images:[],
             loading:false,
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    async handleSubmit(term){
        let responseFromunsplashApi=await unplash.get("/search/photos",{
            params:{
                query:term,
            },
        });
        this.setState({
            images:responseFromunsplashApi.data.results,
            loading:true,
        });
    }
    
    render() { 
        return ( 
            <Fragment>
                <SearchComponent Submit={this.handleSubmit}/>
                <ImageList Images={this.state} />
            </Fragment>
         );
    }
}
 
export default App;