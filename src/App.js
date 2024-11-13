import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:"welcome",
      subject:{title:"WEB"},
      welcome:{title:"welcome", desc:"우리는 우리만의 스토리를 가지고 있습니다"},
      contents:[
        {id:1, title:"HTML", desc:"HTML is HyperText ..."},
        {id:2, title:"CSS", desc:"CSS is for design ..."},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive ... "}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode ==="welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode ==="read"){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
       <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}>
       </Subject>
       <Content title={_title} desc={_desc}></Content>
       <TOC data={this.state.contents}></TOC>
       
    </div>
    );
  }
}

export default App;
