import React, {useState} from 'react';
import Item from './Item.js';
import Dioptricke from './img/dioptricke.jpg';
import Slunecni from  './img/slunecni.jpg';
import Cocky from './img/cocky.jpg';
import Optika from './img/mereni_zraku.jpg';
import Dalsi from './img/dalsi.jpg';
import Ordinace from './img/ordinace.jpg';
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
				<li>Nabízíme sluneční brýle známých osvědčených značek např. POLAROID, TOMMY HILFIGER, POINT, ARMANI, CELINE DION, DESPADA, RAY.BAN a další...</li>
				<li>Na přání zákazníka zhotovíme i dioptrické sluneční brýle.</li>
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
		desc: "Měření Zraku",
		descLong: 
			<ul className="desc">
				<li>Provádí optometrista - odborník na měření očních vad.</li>
				<li>Pomocí objektivního (přístrojového) měření, spojeného se subjektivním měřením (zkušební obruba + skla, další spec.testy)</li>
				<li>Řešíme problémy s viděním na dálku, čtení, počítač, pracovní vzdálenost.</li>
				<li>Měření provádíme pouze u klientů od 16 ti let, u mladších klientů provádí měření pouze oční lékař. </li>
				<li>Na měření je vhodné se objednat buď osobně v naší optice, nebo telefonicky na tel.: <a href="tel:325-531-216">325 531 216</a> (ordinace Mudr. Pišlová - každou středu 14:30 - 17:30h)</li>
			</ul> 
	},
	{ name: "ordinace",
		img: Ordinace ,
		desc: "Ordinace MuDr. Pišlová",
		descLong:
			<ul className="desc">
				<li>Objenání na měření přímo v optice nebo na tel.: <a href="tel:325-552-032"> 325 531 216</a> </li>
				<li> Otevírací doba - každou středu 14:30 - 17:30h</li>
			</ul> 
	},
	{ name: "dalsi",
		img: Dalsi,
		desc: "A další...",
		descLong: <ul className="desc">
								<li>V nabídce máme též velkou škálu doplňků k brýlím </li>
								<li> pouzdra, čistící preje, šňůrky, a další...</li>
							</ul>
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
		<div className="w-100 border-box pa4-ns ph5-ns ph1-m ph0" id="productPage">
			<div className="ttu tc fw9 v-mid pt3-ns pb0-ns pt4">
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
				<div className="close " onClick={changeVisibility}>X</div>
					<h1 className="tc ttu w-100 fw9 pb0-ns v-mid mt4-ns mt2 pa2-ns pa2">{products[content].desc}</h1>
					<div className=" w-80-ns w-100 tl db center lh-copy pa2-ns pa0 mb4-ns">
						{products[content].descLong}
					</div>
				</div>
			</div>
		</div>
		)
}
export default ProductPage;