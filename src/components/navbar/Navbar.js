import React, {Component} from 'react';
import Logo from './logo.jpg';
import './navbar.css';


const dataLayer = window.dataLayer || []
class NavbarTachyons extends Component {
	constructor (){
		super();
		this.state = {
			menuIsOpen: false
		}
	}
	
	closeMenu(){
	  document.getElementById('menu').classList.replace('left-50', 'left-100')
	  document.getElementById('bar-top').classList.replace('top-clicked', 'top')
	  document.getElementById('bar-middle').classList.replace('middle-clicked', 'middle')
	  document.getElementById('bar-bottom').classList.replace('bottom-clicked', 'bottom')	  
	  this.setState({menuIsOpen: false})
	}

	openMenu() {
	  document.getElementById('menu').classList.replace('left-100', 'left-50')
		document.getElementById('bar-top').classList.replace('top', 'top-clicked')
	  document.getElementById('bar-middle').classList.replace('middle', 'middle-clicked')
	  document.getElementById('bar-bottom').classList.replace('bottom', 'bottom-clicked')
	  this.setState({menuIsOpen: true})
	}

	handleClickMenu = (event) => {
		if(this.state.menuIsOpen === false){
			this.openMenu();
		} else {
			this.closeMenu()
		}
	}

	hideNav = () => {
		this.closeMenu();
	}

	render(){
		return(
			<nav className="nav-tach dt dt--fixed w-100 border-box ph4 pa2 pa1-l ph4-l"  id="navbar">
				<a className="icon dtc v-mid link tc w-25" href="#navbar" title="Home">
			    <img src={Logo} id="icon" className="dib" alt="UVEA optic" onClick={()=> {this.hideNav; dataLayer.push({'event': 'logo-click'})}}/>
			  </a>
			  

			  <div id="menu" className="static-l absolute mt0 pa0-l pr4-l left-100 db dtc-l v-mid w-40 w-50-s w-100-l w-75-l h-80 tr">
				    <a className="link tr tl-l fw6 db dib-l mr4 mr4-l mt4" href="#home" title="Home" onClick={()=> {this.hideNav; dataLayer.push({'event': 'homeBtn-click'})}} >Domů</a>
				    <a className="link tr tl-l fw6 db dib-l mr4 mr4-l mt4" href="#productPage" title="produkty" onClick={()=> {this.hideNav; dataLayer.push({'event': 'productsBtn-click'})}} >Produkty</a>
				    <a className="link tr tl-l fw6 db dib-l mr4 mr4-l mt4" href="#about" title="about" onClick={()=> {this.hideNav; dataLayer.push({'event': 'aboutBtn-click'})}} >O nás</a>
				    <a className="link tr tl-l fw6 db dib-l mr4 mr0-l mt4 mb4-l mb4" href="#kontakt" title="Contact" onClick={()=> {this.hideNav; dataLayer.push({'event': 'contactBtn-click'})}} >Kontakt</a>
			  </div>
			  <a href="#navbar" id="menu-btn" className="dtc tr v-mid dn-l w-20 pa0 pa0-ns tc" >
			  <button type="button" className="white ba b--white bg-white" onClick={()=>{this.handleClickMenu(); dataLayer.push({'event': 'menuBtn-click'})}} >
		      <span id="bar-top" className="icon-bar top"></span>
		      <span id="bar-middle" className="icon-bar middle"></span>
		      <span id="bar-bottom" className="icon-bar bottom"></span>
		      </button>
			  </a>
			</nav>
		)
	}

}

export default NavbarTachyons;