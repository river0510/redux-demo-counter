import React from 'react'
import './app.css';

class Counter extends React.Component {

	render() {
		const {
			value,
			increase
		} = this.props;
		return (
			<div>
		        <span>{value}</span>
		        <button onClick={increase}>counter</button>
		    </div>
		);
	}
}

export default Counter;