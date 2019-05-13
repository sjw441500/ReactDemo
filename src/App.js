import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './Bar';
import List from './List'
class App extends Component {

  constructor(){
    super();
    this.state={list:[]};
    this.onSubmit.bind(this);
  }

  onSubmit=(url,title)=>{

    this.setState({list:[...this.state.list,{url,title}]});

  }
  render() {
    return (
      <div className="App">
      <Bar onSubmit={this.onSubmit}/>
      <List list = {this.state.list}/>
      </div>
    );
  }
}

export default App;
