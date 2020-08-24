import React, {useState} from 'react';
import Item from './Item.js';
import Dioptricke from './img/dioptricke.png';
import Slunecni from  './img/slunecni.png';
import Cocky from './img/cocky.png';
import Optika from './img/optika.png';
import Dalsi from './img/dalsi.png';
import './item.css'


const products = [
	{	name: "dioptricke",
		img: Dioptricke,
		desc: "Dioptrické brýle",
		descLong: 
			<ul>
			<li>S výběrem brýlí vám rádi poradíme, sledujeme nové módní trendy, máme pro vás připraveny obruby známých značek - např.: Jaguar, T.Hilfiger, H.Boss, Pepe Jeans, Ray.ban a další..</li>
			<li>Nabízíme brýlové čočky firmy Essilor, které splňují požadavky našich klientů-čiré, samozabarvovací, tenčené, multifokální, pracovní atd.</li>
			</ul>
	},
	{	name: "slunecni",
		img: Slunecni,
		desc: "Sluneční brýle",
		descLong: 
			<ul>
				<li>S výběrem brýlí vám rádi poradíme, sledujeme nové módní trendy, máme pro vás připraveny obruby známých značek - např.: Jaguar, T.Hilfiger, H.Boss, Pepe Jeans, Ray.ban a další..</li>
				<li>Nabízíme brýlové čočky firmy Essilor, které splňují požadavky našich klientů-čiré, samozabarvovací, tenčené, multifokální, pracovní atd.</li>
			</ul>
	},
	{	name: "cocky",
		img: Cocky,
		desc: "Kontaktní čočky",
		descLong: 
			<ul>
				<li>Aplikaci kontaktních čoček provádíme u klientů od 16 ti let.</li>
				<li>Při první konzultaci poradíme s výběrem vhodného typu kontaktních čoček a poté naučíme vše potřebné - nasazení, vyndání a péče o kontaktní čočky.</li>
			</ul>
	},
	{	name: "optika",
		img: Optika,
		desc: "Oční optika",
		descLong: 
			<ul className="desc">
				<li>Provádí optometrista - odborník na měření očních vad.</li>
				<li>Pomocí objektivního (přístrojového) měření, spojeného se subjektivním měřením (zkušební obruba + skla, další spec.testy)</li>
				<li>Řešíme problémy s viděním na dálku, čtení, počítač, pracovní vzdálenost.</li>
				<li>Na měření je vhodné se objednat buď osobně v naší optice, nebo telefonicky na tel. 325 531 216 (ordinace Mudr. Pišlová - každou středu 14:30 - 17:30h)</li>
				<li>Měření provádíme pouze u klientů od 16 ti let, u mladších klientů provádí měření pouze oční lékař. </li>
			</ul> 
	},
	{ name: "dalsi",
		img: Dalsi,
		desc: "A další...",
		descLong: ""
	}
]

const ProductPage = () => {

	const [display, setDisplay] = useState('none')
	const [position, setPosition] = useState(800);
	const [content, setContent] = useState(0)

	const changeVisibility = (index) => {
		if(display === 'none'){
			setPosition(0)
			setDisplay('block')
			setContent(index)
		} else {
			setPosition(800);
			setDisplay('none')
		}
	}

	window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
			setPosition(800);
			setDisplay('none')
	  }
	}

	return (
		<div className="w-100 border-box pa4-ns ph5-ns ph1-m ph0" id="sluzby">
			<div className="ttu tc fw9 v-mid pt5-ns pb0-ns pt4">
				<h1>CO VÁM NABÍDNEME?</h1>
			</div>
			<div className="cf ph2-ns ph0-m pa2 w-100 pa0-m">
			{products.map((item, index) => {
				return(
					<button className="itemButton w-third-ns w-50-m w-100" onClick={e => changeVisibility(index)} alt={item.desc} key={index} >
						<Item img={item.img} desc={item.desc} id={item.name} />
					</button>
					)
				})
			}
			</div>
			<div id="myModal" className="popup w-100 pa2 bg--white" style={{display:`${display}`}}>
				<div className="modal-content" >
				<span className="close " onClick={changeVisibility}>X</span>
					<h1 className="tc ttu fw9 pb0-ns v-mid mt4-ns mt2 pa2">{products[content].desc}</h1>
					<div className=" w-80-ns w-100 tl db center lh-copy pa2-ns pa0 mb4-ns">
						{products[content].descLong}
					</div>
				</div>
			</div>
		</div>
		)
}
export default ProductPage;