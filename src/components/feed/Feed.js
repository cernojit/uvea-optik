import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="2680676682144272">
        <Page 
        	href="https://www.facebook.com/UVEAoptik" 
        	tabs="timeline"
        	height="450px"
        	 />
      </FacebookProvider>    
    );
  }
}