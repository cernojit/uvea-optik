import React, { useEffect, useState } from 'react';
import './map.css'

const Map = () => {
	
	const [loaded, isLoaded] = useState(false)

	useEffect(()=>{
		isLoaded(true)
	}, [])

	return(
		<div id="map" >
		{	loaded 
			?
				<iframe title="map" src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.0934102603933!2d14.840599915824559!3d50.19678487944114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bf7c788c0642b%3A0xaa58d72c2381051b!2sMasarykova%20583%2C%20289%2022%20Lys%C3%A1%20nad%20Labem!5e0!3m2!1scs!2scz!4v1593943285054!5m2!1scs!2scz' >
				</iframe>
			: null
		}
		</div>
		)

}

export default Map;