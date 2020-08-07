import React from 'react'

const CheckBox = props => {
	return (
		<div className="form-group hidden">
      <label className="checkbox-inline">
        <input 
        	type="checkbox" 
        	id="inlineCheckbox" 
        	name={props.name}
        	value={props.value}
        	onChange = {props.handleChange}
        /> Please read the term and conditions carefully before using Our Service. Find more details 
        	<a href="https://www.termsfeed.com/terms-conditions/54b81b83c642fed2a93e6961261f1d70"> here</a>.
      </label>
    </div>
	)
}

export default CheckBox;