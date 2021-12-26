import React, { useEffect, useState } from 'react';
import { FacebookProvider, Page } from 'react-facebook';

const Feed =  () =>  {
	const [loaded, isLoaded] = useState(false)

	useEffect(()=>{
		isLoaded(true)
	}, [])

	return (
		<FacebookProvider appId={process.env.FB_ID}>
		{
			loaded && 
			<Page 
				href="https://www.facebook.com/UVEAoptik" 
				tabs="timeline"
				height="450px"
			/>
		}
		</FacebookProvider>  
  )
}

export default Feed