import React from 'react';

const ContactSection = () => {
	return(
		<div className="w-100">                    
      <h2>Otevírací doba</h2>
      {/* Extra info starts here!!! ----> */}
      <div className="db">
        <p className="fw7 red w-100">Vánoční otevírací doba:</p>
      </div>
      <div className="db w-100 pl4 pr4">
          <div className="fl center w-50 ">
            <p className="fw7 red mt1">22.12.</p>
          </div>
          <div className="fl w-50  ">
            <p className="fw7 red mt1">Otevřeno</p>
          </div>
      </div>
      <div className="db w-100 pl4 pr4">
          <div className="fl center w-50 ">
            <p className="fw7 red mt1">23.12. - 27.12.</p>
          </div>
          <div className="fl w-50 ">
            <p className="fw7 red mt1">Zavřeno</p>
          </div>
      </div>
      <div className="db pt0 w-100 pl4 pr4">
          <div className="fl center w-50 ">
            <p className="fw7 red mt1">28.12. - 29.12.</p>
          </div>
          <div className="fl w-50 ">
            <p className="fw7 red mt1">Otevřeno</p>
          </div>
      </div>
      <div className="db pt0 w-100 pl4 pr4">
          <div className="fl center w-50 ">
            <p className="fw7 red mt1">30.12. - 3.1.</p>
          </div>
          <div className="fl w-50 ">
            <p className="fw7 red mt1">Zavřeno</p>
          </div>
      </div>
      <div className="db pt1 w-100">

      </div>

      {/* <---- Extra info ends here */}
      <div className="dt dt--fixed pt2">
      	<div className="dtc tc pv2">
          <p className="fw7">Pondělí</p>
        </div>
        <div className="dtc tc pv2">
          <p>9.00-12.00</p>
        </div>
        <div className="dtc tc pv2">
          <p>13.00-17.00</p>
        </div>
      </div>
      <div className="dt dt--fixed ">
      	<div className="dtc tc pv2">
          <p className="fw7">Úterý</p>
        </div>
        <div className="dtc tc pv2">
          <p>9.00-12.00</p>
        </div>
        <div className="dtc tc pv2">
          <p>13.00-17.00</p>
        </div>
      </div>
      <div className="dt dt--fixed ">
      	<div className="dtc tc pv2">
          <p className="fw7">Středa</p>
        </div>
        <div className="dtc tc pv2">
          <p>9.00-12.00</p>
        </div>
        <div className="dtc tc pv2">
          <p>13.00-17.00</p>
        </div>
      </div>
      <div className="dt dt--fixed ">
      	<div className="dtc tc pv2">
          <p className="fw7">Čtvrter</p>
        </div>
        <div className="dtc tc pv2">
          <p>9.00-12.00</p>
        </div>
        <div className="dtc tc pv2">
          <p>13.00-17.00</p>
        </div>
      </div>
      <div className="dt dt--fixed ">
      	<div className="dtc tc pv2">
          <p className="fw7">Pátek</p>
        </div>
        <div className="dtc tc pv2">
          <p>9.00-12.00</p>
        </div>
        <div className="dtc tc pv2">
          <p>13.00-15.00</p>
        </div>
      </div>
      <div className="dt dt--fixed ">
      	<div className="dtc tc pv2">
          <p className="fw7">Sobota</p>
        </div>
        <div className="dtc tc pv2">
          <p>9.00-11.00</p>
        </div>
      </div>
  	</div>
  )
}

export default ContactSection;