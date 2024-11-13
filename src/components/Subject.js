import React, { Component } from 'react';

class Subject extends Component {
    render() {
      return (
        <header>
          <ul class="menuOne">
            <li><a href="/">MAGAZINE</a></li>
            <li><a href="/">NOTICE</a></li>
            <li><a href="/">CONTACT</a></li>
          </ul>
          <h1><a href="/">{this.props.title}</a></h1>    
          <ul class="menuTwo">
            <li><a href="/">로그인</a></li>
            <li><a href="/">마이페이지</a></li>
            <li><a href="/">O</a></li>
          </ul>
        </header>
        
      );
    }
  }

  
  export default Subject;