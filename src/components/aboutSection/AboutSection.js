import React from 'react';
import About1 from './about1.jpg';
import About2 from './about2.jpg';
import './aboutSection.css'

const AboutSection = () => {
	return (
		<div className="w-100 border-box pa4-ns ph5-ns ph2-m pt2-ns pb4" id="about">
			<div className="tc ttu fw9 pb0-ns v-mid">
				<h1>O NÁS</h1>
			</div>
			<div className="cf ph1-ns pa2 pb3-ns ">
				<p className="w-70-ns w-90-m center fw5 tc lh-copy">V naší oční optice vám odborně změříme zrak, 
					poradíme s výběrem brýlových obrub a brýlových čoček s ohledem na vaše konkrétní potřeby.
          Nabízíme široký výběr nejen dioptrických obrub, ale i slunečních brýlí, 
          pouzder a ostatních doplňků.
          Klademe důraz na individuální přístup ke každému klientovi.
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