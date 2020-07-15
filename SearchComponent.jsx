import React, { Component,Fragment } from 'react';
class SearchComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             term:"",
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.changeColor=React.createRef();
    }
    componentDidMount(){
        this.changeColor.current.style.background='#eee';
        this.changeColor.current.focus();
    }
handleChange(e){
        this.setState({term:e.target.value});
    };
    handleSubmit(e){
        e.preventDefault();
        this.props.Submit(this.state.term);
    }
    render() { 
        return ( 
            <Fragment>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <input 
                            ref={this.changeColor}
                            type="text"
                            id="search"
                            className="form-control"
                            placeholder="Search images"
                            value={this.state.term}
                            onChange={this.handleChange}
                            />
                            <button>Search</button>
                        </form>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default SearchComponent;

