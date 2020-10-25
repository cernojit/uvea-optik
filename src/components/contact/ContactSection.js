import React from 'react';
import ContactInfo from './ContactInfo';
import Map from './Map';
import OteviraciDoba from './OteviraciDoba'
import Feed from '../feed/Feed'

const ContactSection = () => {
	return(
		<div className="w-100 pa4-ns ph5-ns ph2-m ph3" id="kontakt">
			<div className="static-ns w-100 bb0 center" >
					<div className="w-100 pa2">
		        <div className="tc ttu w-100 pa4 ph0">
	    	      <h1>Kontakt</h1>
	    	     </div>
	    	     <div className="w-100 w-100-m w-100-ns">
          		<Map/>
          	</div>
	        </div>
				<div className="cf ph2-ns ph0 pa2 ph6-m pb5 center">
		      <div className="fl w-100 w-100-m w-40-ns pa3 pb4-m tc">
	        	<OteviraciDoba/>
		      </div>
					<div className="fl w-100 w-100-m w-20-ns pa3 pb4-m tc">
	        	<ContactInfo/>
		      </div>
		      <div className="fr w-100 w-100-m w-40-ns pa3 pb4-m tc">
	        	<Feed/>
		      </div>
				</div>
			</div>
		</div>
	)
}

export default ContactSection;