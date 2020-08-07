import React from 'react';
import Form from './form/Form';
import ContactInfo from './ContactInfo';
import Map from './Map';
import OteviraciDoba from './OteviraciDoba'

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
				<div className="cf ph2-ns ph0 pa2 ph5-m pb5 center">
					<div className="fl w-100 w-third-l pa3 ph4-m ph2-s tl-l tc">
	        	<Form/>
	       	</div>
					<div className="fl w-100 w-third-ns w-50-m pa3 pl4-l tl-ns tc">
	        	<ContactInfo/>
		      </div>
		      <div className="fl w-100 w-third-ns w-50-m pa3 tl-ns tc">
	        	<OteviraciDoba/>
		      </div>
				</div>
			</div>
		</div>
	)
}

export default ContactSection;