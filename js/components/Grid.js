import React from 'react';
import GridItem from "./GridItem";


export default class Grid extends React.Component {
	setEx(e) {
			let id = e.target.getAttribute('data-id');
			this.props.setExFromGrid(id);
	}
	render() {
		let arr = [];
		let items = this.props.data.forEach( (v, i) => {
			arr.push(
				<div key={i} onClick={this.setEx.bind(this)} data-id={i} className="GridItem" >
				<GridItem name={this.props.data[i].name } />
				</div>
				)
		});
		return (
			<div className="Grid" >
			{ arr }
			</div>
			);
	}
}

