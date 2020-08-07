import React from 'react';
import Item from './Item.js';
import Dioptricke from './img/dioptricke.png';
import Slunecni from  './img/slunecni.png';
import Cocky from './img/cocky.png';
import Optika from './img/optika.png';
import Dalsi from './img/dalsi.png';
// import './background.css'


const ProductPage = () => {
	return (
		<div className="w-100 border-box pa4-ns ph5-ns ph1-m ph0" id="productPage">
			<div className="ttu tc fw9 v-mid pt5-ns pb0-ns pt4">
				<h1>CO VÁM NABÍDNEME?</h1>
			</div>
			<div className="cf ph2-ns ph0-m pa2 w-100 pa0-m">
				<Item img={Dioptricke} desc={"Dioptrické brýle"}/>
				<Item img={Slunecni} desc={"Sluneční brýle"}/>
				<Item img={Cocky} desc={"Kontaktní čočky"}/>
				<Item img={Optika} desc={"Oční optika"}/>
				<Item img={Dalsi} desc={"A další.."}/>
			</div>
		</div>

		)
}

export default ProductPage;