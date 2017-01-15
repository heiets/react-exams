import React from 'react';

import Timer from "./Timer";
import Single from "./Single";
import Grid from "./Grid";


let exList = [
	{
		name: 'Технології комп проектування',
		date: '11.01.17',
		cab: '422',
		time: '12.15'
	},
	{
		name: 'Сист штучного інтелекту',
		date: '16.01.17',
		cab: '422',
		time: '12.15'
	},
	{
		name: 'Сист обробл екон інформ',
		date: '20.01.17',
		cab: '421',
		time: '12.15'
	}
];
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
		};
	}
	setExInApp(idFromGrid) {
		if (idFromGrid == null) {
			return false
		}
		else {
			this.setState({id: idFromGrid});
		}
	}
	render() {
		return (
			<div>
				<Grid data={ exList } setExFromGrid={ this.setExInApp.bind(this) } dataId={ this.state.id }/>
				<section className="wrap">
					<div className="wrap__img"></div>
					<div className="wrap__text">
						<Single data={ exList } dataId={ this.state.id }/>
						<Timer data={ exList } dataId={ this.state.id }/>
					</div>
					<div className="author">Created by <a href="https://vk.com/o.heiets" target="_blank">Oleksandr Heiets</a></div>
				</section>
			</div>
		);
	}
}

