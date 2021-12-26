import React from 'react';
import './imgContainer.css'
import bgImage_large from './bgImage_large.jpg'
import bgImage_medium from './bgImage_medium.jpg'
import bgImage_small from './bgImage_small.jpg'

const ImgContainer = () => {
	return(
		<div className="img-container h-100-ns h-60 bg-center" id ="home">
			{/* // <div className="img-container h-100-ns h-60 bg-center">
			// 		<source media="(min-width: 767px)" srcSet={bgImage_large} type="image/jpg" className="w-100" />
			// 		<source media="(min-width: 480px)" srcSet={bgImage_large} type="image/jpg" className="w-100" />
			// 		<source media="(max-width: 479px)" srcSet={bgImage_medium} type="image/jpg" className="w-100" />
			// 		<img src={bgImage_large} className="w-100" alt={bgImage_large}/> */}

				<div className="ph6-l w-100 pa2-ns mt0-ns pt0-ns pb6-ns pa2-m ph5-m ph4 ">
					<h1 className="lh-solid white mb0 pt2 pt0-ns">UVEA OPTIK</h1>
					<p className="f2-ns f3 lh-solid white mt0 ">Vanda Schneibergová</p>
					<p className="f2-ns f2 fw7 w-50-ns w-90-m w-100 mt0">Dioptrické brýle, sluneční brýle, kontaktní čočky, měření zraku, ...
					</p>
				</div>
		</div>
	)
}

export default ImgContainer;