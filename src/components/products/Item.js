import React, {Component} from 'react';
import './item.css'

class Item extends Component {
	render (){
		const {img, desc} = this.props;
		return (
			<div className="fl w-third-ns w-50-m w-100 pa3">
				<div className="item w-100 br4 b--black-10 bg-white shadow-5">
	        <img src={img} id="item" alt="item" className="w-100 pa0"/>
					<p className="fw4 v-midf6 tc bg-white pa0 pb3 ttu br4">
						{desc}
					</p>
				</div>
			</div>
		)
	}
}

export default Item;