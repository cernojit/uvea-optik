import React from 'react';

const ContactSection = () => {
	return(
		<div className="w-100">                    
      <h2>Otevírací doba</h2>
      
      {/* Extra info starts here!!! ----> */}
      <div className="db w-100">
        <p className="fw7  red w-100">Vánoční otevírací doba:</p>
      </div>
      <div className="dt dt--fixed ">
          <div className="dtc tc pv0 pl3">
            <p className="fw7 f5-ns f6 red ma2">22.12.</p>
          </div>
          <div className="dtc tc pv0 pr2">
            <p className="fw7 f5-ns f6 red ma2">Otevřeno</p>
          </div>
      </div>
      <div className="dt dt--fixed ">
          <div className="dtc tc pv0 pl3">
            <p className="fw7 f5-ns f6 red ma2 ">23.12. - 27.12.</p>
          </div>
          <div className="dtc tc pv0 pr2">
            <p className="fw7 f5-ns f6 red ma2">Zavřeno</p>
          </div>
      </div>
      <div className="dt dt--fixed ">
          <div className="dtc tc pv0 pl3">
            <p className="fw7 f5-ns f6 red ma2">28.12. - 29.12.</p>
          </div>
          <div className="dtc tc pv0 pr2">
            <p className="fw7 f5-ns f6 red ma2">Otevřeno</p>
          </div>
      </div>
      <div className="dt dt--fixed ">
          <div className="dtc tc pv0 pl3">
            <p className="fw7 f5-ns f6 red ma2">30.12. - 3.1.</p>
          </div>
          <div className="dtc tc pv0 pr2">
            <p className="fw7 f5-ns f6 red ma2">Zavřeno</p>
          </div>
      </div>
      {/* <---- Extra info ends here */}

      <div className="dt dt--fixed ">
      	<div className="dtc tc pv0 ">
          <p className="fw7 f5-ns f6 dib v-mid ">Pondělí</p>
        </div>
        <div className="dtc tc pv0">
          <p className="f5-ns f6 dib v-mid">9.00-12.00</p>
        </div>
        <div className="dtc tc pv0 ">
          <p className="f5-ns f6 ">13.00-17.00</p>
        </div>
      </div>
      <div className="dt dt--fixed ">
      	<div className="dtc tc pv0 ">
          <p className="fw7 f5-ns f6">Úterý</p>
        </div>
        <div className="dtc tc pv0">
          <p className="f5-ns f6">9.00-12.00</p>
        </div>
        <div className="dtc tc pv0">
          <p className="f5-ns f6">13.00-17.00</p>
        </div>
      </div>
      <div className="dt dt--fixed ">
      	<div className="dtc tc pv0">
          <p className="fw7 f5-ns f6">Středa</p>
        </div>
        <div className="dtc tc pv0">
          <p className="f5-ns f6">9.00-12.00</p>
        </div>
        <div className="dtc tc pv0">
          <p className="f5-ns f6">13.00-17.00</p>
        </div>
      </div>
      <div className="dt dt--fixed ">
      	<div className="dtc tc pv0">
          <p className="fw7 f5-ns f6">Čtvrtek</p>
        </div>
        <div className="dtc tc pv0">
          <p className="f5-ns f6">9.00-12.00</p>
        </div>
        <div className="dtc tc pv0">
          <p className="f5-ns f6">13.00-17.00</p>
        </div>
      </div>
      <div className="dt dt--fixed ">
      	<div className="dtc tc pv0">
          <p className="fw7 f5-ns f6">Pátek</p>
        </div>
        <div className="dtc tc pv0">
          <p className="f5-ns f6">9.00-12.00</p>
        </div>
        <div className="dtc tc pv0">
          <p className="f5-ns f6">13.00-15.00</p>
        </div>
      </div>
      <div className="dt dt--fixed ">
      	<div className="dtc tc pv0">
          <p className="fw7 f5-ns f6">Sobota</p>
        </div>
        <div className="dtc tc pv0">
          <p className="f5-ns f6">9.00-11.00</p>
        </div>
        <div className="dtc tc pv0">
        </div>
      </div>
  	</div>
  )
}

export default ContactSection;