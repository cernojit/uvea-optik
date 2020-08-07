import React from 'react';
import About1 from './about1.png';
import About2 from './about2.png';
import './aboutSection.css'

const AboutSection = () => {
	return (
		<div className="w-100 border-box pa4-ns ph5-ns ph2-m pt2-ns" id="about">
			<div className="tc ttu fw9 pb0-ns v-mid">
				<h1>O NÁS</h1>
			</div>
			<div className="cf ph1-ns pa2 pb2-ns ph1-m">
				<p className="w-70-ns center fw5 tc w-90-m">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin in tellus sit amet nibh dignissim sagittis. 
				Nullam sit amet magna in magna gravida vehicula. Mauris suscipit, 
				ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. 
				Etiam commodo dui eget wisi.
				</p>
			</div>
			<div className="cf ph1 w-100">
				<div className="fl w-third-ns w-100-m center pa2 tc">
					<img src={About1} id="about" alt="about" className="br4 v-mid "/>
				</div>
				<div className="fl-ns db-ns dn w-two-thirds w-100-m pa2 tc ">
					<img src={About2} id="about" alt="about" className="br4 v-mid"/>
				</div>
			</div>
		</div>
		)
}

export default AboutSection;