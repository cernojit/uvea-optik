import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
const Example =  () =>  {

    return (
    	<FacebookProvider appId={`${process.env.FB_ID}`}>
        <Page 
        	href="https://www.facebook.com/UVEAoptik" 
        	tabs="timeline"
        	height="450px"
        	 />
			</FacebookProvider>  
    )
}

export default Example