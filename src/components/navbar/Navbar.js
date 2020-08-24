import React, {Component} from 'react';
import Logo from './image 12.svg';
import './navbar.css';

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
			<nav className="nav-tach dt dt--fixed w-100 border-box ph4 pa3 pa1-l ph4-l"  id="navbar">
				<a className="icon dtc v-mid link w-25 tc tl mb2" href="#navbar" title="Home">
			    <img src={Logo} id="icon" className="dib br-100" alt="UVEA optic"/>
			  </a>
			  

			  <div id="menu" className="static-l absolute mt0 pa0-l pr4-l left-100 db dtc-l v-mid w-40 w-50-s w-100-l w-75-l h-80 tr">
				    <a className="link tr tl-l fw6 db dib-l mr4 mr4-l mt4" href="#home" title="Home" onClick={this.hideNav}>Domů</a>
				    <a className="link tr tl-l fw6 db dib-l mr4 mr4-l mt4" href="#sluzby" title="Služby" onClick={this.hideNav}>Služby</a>
				    <a className="link tr tl-l fw6 db dib-l mr4 mr4-l mt4" href="#about" title="about" onClick={this.hideNav}>O nás</a>
				    <a className="link tr tl-l fw6 db dib-l mr4 mr4-l mt4" href="#productPage" title="produkty" onClick={this.hideNav}>Produkty</a>			    
				    <a className="link tr tl-l fw6 db dib-l mr4 mr0-l mt4 mb4-l mb4" href="#kontakt" title="Contact" onClick={this.hideNav}>Kde nás najdete?</a>
			  </div>
			  <a href="#navbar" id="menu-btn" className="dtc tr v-mid dn-l w-20 pa0 pa0-ns tc" >
			  <button type="button" className="white ba b--white bg-white" onClick={this.handleClickMenu}>
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