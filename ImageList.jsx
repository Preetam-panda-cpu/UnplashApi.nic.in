import React, { Component ,Fragment} from 'react';
class ImageList extends Component{
    constructor(props) {
        super(props);   
        this.state = {};
        // this.Spans=React.createRef();        
    }
    // componentDidMount(){
    //     this.Spans.current.style.color="red";
    // }
    render(){
        let{images,loading}=this.props.Images;
        let ImagesBlock=images.map((image)=>{
            return(
                <Fragment key={image.id}>
                    <section className="imgBlock" ref={this.Spans}>
                    <div className="img">
                        <div className="details">
                            <img src={image.urls.regular} alt={image.name}/>
                            <p>Likes:{image.likes}</p>
                            <p>{image.description}</p>
                            <p>upload by:{image.user.name}</p>
                            <p>created at:{image.created_at}</p>
                        </div>
                    </div>
                    </section> 
                </Fragment>
            );
        });
        let LoadingBlock=(
            <Fragment>
                <section>
                    <article>
                        <p>Loading...</p>
                    </article>
                </section>
            </Fragment>
        );
        return(
            <Fragment>
            {loading ? <div class="cardImages">{ImagesBlock}</div>:LoadingBlock}
            </Fragment>
        ); 
    }
}
export default ImageList;
