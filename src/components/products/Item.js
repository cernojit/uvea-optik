import React, {Component} from 'react'

class Item extends Component {
	render (){
		const {img, desc, alt} = this.props;

		return (
			<div className="fl w-100 pa3" id="card">
					<div className="item w-100 br4 b--black-10 bg-white shadow-5" >
		        <img src={img} id="item" alt={alt} className="w-100 pa0"/>
						<p className="fw4 v-midf6 tc bg-white pa0 pb3 ttu br4" alt={alt}>
							{desc}
						</p>
					</div>		
			</div>
		)
	}
}

export default Item;