import React from 'react';
import logo from './logo_essilor.svg';
import baner from './baner.jpg';
import baner_small from './baner_small.jpg';
import './add.css'

const AddCard = () => {
	return (
		<div className="w-100  pa4-ns ph5-ns ph1 ph2-m pt2-ns pb5-ns pb4 tc" id="advertisment">
			<div className="flex pa4-ns pb3-ns items-center pa2 ">
				<div className="fl mr5-ns mr3 ">
					<a href="https://www.essilor.cz/">
						<img src={logo} className="w-100" />
					</a>
				</div>
				<div className="fl">
					<p className="tl fw6-ns f4-ns fw6 f6 ">Spolupracujeme se společností Essilor, která nám dodává brýlové čočky.</p>
				</div>
			</div>
			<div className="flex pa4-ns w-100-ns items-center pb4-ns pb4">
				<picture >
					<source media="(min-width: 480px)" srcSet={baner} type="image/jpg" className="br4 w-100" />
					<source media="(max-width: 479px)" srcSet={baner_small} type="image/jpg" className="w-100 br4 w-100" />
					<img src={baner} className="br4 w-100" />
				</picture>
			</div>
			<div className="w-100 pa2 mt3-ns tc "> 
				<a href='https://www.essilor.cz/' className="button pa3 no-underline db center tc white fw8 ">
					Prohlédnout si čočky
				</a>
			</div>
		</div>
		)
}

export default AddCard;