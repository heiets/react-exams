import React from 'react';


export default class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stateToday: 0,
			stateTsec: 0,
			stateThour: 0,
			stateTmin: 0
		};
	}
	componentDidMount() {
		this.time();
	}
	time() {
		let timeend= new Date(`Jan ${this.props.data[this.props.dataId].date.substr(0,2)} 2017 12:15:00`);
		//let timeend= new Date(`Jan 8 2017 15:21:00`);
		let today = new Date();
		let flag = false;
		today = Math.floor((timeend-today)/1000);
		let tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
		let tmin=today%60; today=Math.floor(today/60); 
		if (tmin < 0) {
			flag = true;
		}
		if(tmin<10)tmin='0'+tmin;
		let thour=today%24; today=Math.floor(today/24);
		if (flag === true) {
			this.setState({
				stateToday: 0,
				stateSec: 0,
				stateHour: 0,
				stateMin: 0
			})
		}
		else {
			this.setState({
				stateToday: today,
				stateSec: tsec,
				stateHour: thour,
				stateMin: tmin
			})
		}
	}
	render() {
		let self = this;
		let interval = setInterval( () => self.time(), 1000);
		return (
			<div className="timer">
			<div className="today">
			{this.state.stateToday}
			</div>
			<div className="hour">
			{this.state.stateHour}
			</div>
			<div className="min">
			{this.state.stateMin}
			</div>
			<div className="sec">
			{this.state.stateSec}
			</div>
			</div>
			);
	}
}

