import React from 'react';
import InstaIcon from './img/instaIcon.svg';
import Insta1 from './img/insta1.png';
import Insta2 from './img/insta2.png';
import Insta3 from './img/insta3.png';
import './instaSection.css'


const InstagramSection = () => {
	return (
		<div className="w-100 border-box pa4-ns ph5-ns ph2-m ph5 pt5 background pb6-ns pb4">
			<div className="center pa4">
				<img src={InstaIcon} id="icon" alt="instaIcon" className="db center tc "/>
			</div>
			<div className="w-100 w-100-ns cf">
				<div className="fl w-100 w-third-ns pa2-ns ">
					<img src={Insta1} id="insta1" alt="insta" className="br4 h-100-ns w-100"/>
				</div>
				<div className="fl w-100 w-third-ns pa2-ns mt3 ">
					<img src={Insta2} id="insta2" alt="insta" className="br4 h-100-ns w-100 "/>
				</div>
				<div className="fl w-100 w-third-ns pa2-ns">
					<img src={Insta3} id="insta3" alt="insta" className="br4 h-100-ns w-100"/>
				</div>
			</div>
			<div className="w-100 center pa3"> 
				<a href='https://www.instagram.com/uvea_optik/' className="instaButton pa3 no-underline db center tc white fw8">Podívat se na profil
				</a>
			</div>
		</div>
	)
}

export default InstagramSection;