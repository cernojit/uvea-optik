import React, {Component} from 'react';
import './form.css'

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			field: {
				fname: '', 
				email: '', 
				message: ''				
			},
	  	checkBox: false,
	  	valid: {
				fname: false, 
				email: false, 
				message: false				
			}
		}
	}

	handleInput = (event) => {
		const pattern = /\S+@\S+\.\S+/;
		const {field, valid} = {...this.state};
		const {name,value} = event.target;
		field[name] = value;
		if(value === ''){
			document.getElementById([name]).classList.add("bw1","b--red");
			valid[name] = false;
			this.setState({valid: valid})
		} else if(name==="email" && !this.state.field[name].match(pattern)){
			document.getElementById([name]).classList.add("bw1","b--red");
			valid[name] = false;
			this.setState({valid: valid})
 		} else {
			document.getElementById([name]).classList.remove("bw1","b--red");
			valid[name] = true;
			this.setState({valid: valid})
		}		
		this.setState({field: field});
	}

	handleChange = () => {
		this.setState({checkBox: true})
	}

	validate = () => {
		let isValid = true;
		Object.entries(this.state.valid).forEach(([key, value]) => {
			console.log(key, value)
			console.log(document.getElementById(key))
			if (!value) {
				isValid = false;
				document.getElementById(key).classList.add("bw1","b--red");
			} 
		})
		return isValid;
	}

	onButtonClick = (event) => {
		event.preventDefault();
		const isValid = this.validate();
		if (!isValid){
			document.getElementById('alert').classList.remove("hidden");	
		} else if (isValid && !this.state.checkBox){
			document.getElementById('hidden-after').classList.add("hidden");
    	document.getElementById('hidden-before').classList.remove("hidden");
			fetch('https://apologetic-pylon-95577.herokuapp.com/send', {
		  		method: 'post',
		  		headers: {'Content-Type': 'application/json'},
		  		body: JSON.stringify({
		  			fname: this.state.field.fname,
		  			email: this.state.field.email,
		  			message: this.state.field.message
		  		})
		  	})
		  	.then(response => response.json())
		  	.then(console.log('Email should be sent'))
		  	.then(this.handleClearForm())
		  	.catch(err => console.log(err))	
		} else if(isValid  && this.checkBox){
			document.getElementById('hidden-after').classList.add("hidden");
    	document.getElementById('hidden-before').classList.remove("hidden");
    	this.handleClearForm();
		}
	}

	handleClearForm = () => {
		this.setState({
  		field: {
			fname: '', 
			email: '', 
			message: ''
			},
  		checkBox: false,
  		valid: {
				fname: false, 
				email: false, 
				message: false				
			}
		})
	}

	render(){
    return (
    	<form className="w-100" >
	        <h2>Máte Dotaz?</h2>
        	<fieldset id="hidden-after" className="ba b--transparent ph0 mh0 ">
        		<div className="mt3">
							<input 
								className="pa3 input-reset ba hover-black border-box b--black-20 br2 w-100 " 
								id="fname"
								type="name" 
								name="fname"  
								placeholder="Jméno a Příjmení"
								onChange={this.handleInput}
								/>
						</div>
						<div className="mt3">
	        		<input 
	        			className="pa3 input-reset ba hover-black border-box b--black-20 br1 w-100 " 
	        			id="email"
	        			type="email" 
	        			name="email"  
	        			placeholder="Email"
								onChange={this.handleInput}
	        			/>
	        	</div>
	        	<div className="mt3">
	        	  <textarea 
	        	  	id="message" 
	        	  	className="pa3 db border-box hover-black w-100 ba b--black-20 br2 mb3 " 
	        	  	name="message" 
	        	  	rows="4"
	        	  	placeholder="Napište Vaší zprávu"
								onChange={this.handleInput}
								>
							</textarea>
	        	</div>
	        	<div className="mt0 hidden" id="alert">
	        		<label className="pa0  ma0 lh-copy f6 pointer">
	        			Vyplňte všechna pole
	        		</label>
	        	</div>
	        	<div className="mt3 ">
	        	 <label className="pa0 ma0 lh-copy f6 pointer hidden">
	        	 	<input type="checkbox" onChange = {this.handleChange}/> Remember me
	        	 </label>
	        	</div>
	        	<div>
		        	<button 
				    		type="submit" 
				    		className="btn btn-lg btn-primary" 
				    		onClick={this.onButtonClick}
				    		>	Odeslat Dotaz
				    	</button>
				    </div>
      		</fieldset>
      		<div id="hidden-before" className="hidden pt6">
						<div className="alert alert-success br4 fw7 white pa4" role="alert">Vaše zpráva byla úspěšně odeslána
						</div>
      		</div>
      </form>
    )

  }
}


export default Form;