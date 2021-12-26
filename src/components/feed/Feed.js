import React, { useEffect, useState } from 'react';

const Feed =  () =>  {
	const [loaded, isLoaded] = useState(false)

	useEffect(()=>{
		isLoaded(true)
	}, [loaded])

	return (
			<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUVEAoptik&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
				height="450"
				style={{position: "center"}}
				//style="border:none;overflow:hidden"
				allowFullScreen={true}
				>
			</iframe>
  )
}

export default Feed