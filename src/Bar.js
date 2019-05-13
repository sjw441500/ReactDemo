import React,{Component} from 'react';

class Bar extends Component {

constructor(props){
super(props);
this.state={title:"",url:""};

}

UrlOnChange= e=>{
this.setState({url:e.target.value});
}
TitleOnChange= e=>{
    this.setState({title:e.target.value});
    
}


render(){

    return(
        <div>

            <span>url:</span><input  onChange={this.UrlOnChange} />
            <div>
            <span>title:</span>
            <input onChange={this.TitleOnChange}/>
            <button onClick ={()=>{this.props.onSubmit(this.state.url,this.state.title)}}>post</button>
            </div>
            </div>
    )
}
}

export default Bar;