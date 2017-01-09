import React from 'react';


export default class Single extends React.Component {
	render() {
		return (
			<div>
			<div className="singletitle">
			<div className="nametitle"> Название экзамена: </div>
			<div className="datetitle"> Дата: </div>
			<div className="timetitle"> Время: </div>
			<div className="cabtitle">  Кабинет: </div>
			</div>
			<div className="single">
			<div className="name"> { this.props.data[this.props.dataId].name }</div>
			<div className="date"> { this.props.data[this.props.dataId].date }</div>
			<div className="time"> { this.props.data[this.props.dataId].time }</div>
			<div className="cab">  { this.props.data[this.props.dataId].cab } </div>
			</div>
			</div>
			);
	}
}

