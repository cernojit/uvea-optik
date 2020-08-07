import React from 'react';

const Button = props => {
	return(
		<div className="form-group">
    	<button 
    		type="submit" 
    		className="btn btn-primary " 
    		onClick={props.action}
    		>Odeslat Dotaz</button>
    </div>
		)
}

export default Button;