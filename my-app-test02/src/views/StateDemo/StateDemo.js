import React from 'react';
import './StateDemo.scss';

// class StateDemo extends React.Component {
// 	state = {
// 		count: 0
// 	}
//
// 	render() {
// 		return <div className="state-demo-container">
// 			<button onClick={() => {
// 				this.setState({
// 					count: this.state.count + 1
// 				})
// 			}}>click-{this.state.count}</button>
// 		</div>
// 	}
// }

// class StateDemo extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			count: 0
// 		}
// 	}
//
// 	addCount () {
// 		this.setState({
// 			count: this.state.count + 1
// 		}, () => {
// 			console.log(this.state.count);
// 		})
// 	}
//
// 	render() {
// 		const {count} = this.state
// 		return <div className="state-demo-container">
// 			<button onClick={() => this.addCount()}>click-{count}</button>
// 		</div>
// 	}
// }

// class StateDemo extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			count: 0
// 		}
// 		this.addCount = this.addCount.bind(this)
// 	}
//
// 	addCount () {
// 		this.setState({
// 			count: this.state.count + 1
// 		}, () => {
// 			console.log(this.state.count);
// 		})
// 	}
//
// 	render() {
// 		const {count} = this.state
// 		return <div className="state-demo-container">
// 			<button onClick={this.addCount}>click-{count}</button>
// 		</div>
// 	}
// }

// class StateDemo extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			count: 0
// 		}
// 	}
//
// 	addCount () {
// 		this.setState({
// 			count: this.state.count + 1
// 		}, () => {
// 			console.log(this.state.count);
// 		})
// 	}
//
// 	render() {
// 		const {count} = this.state
// 		return <div className="state-demo-container">
// 			<button onClick={this.addCount.bind(this, 123)}>click-{count}</button>
// 		</div>
// 	}
// }

class StateDemo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}

	addCount = (e) => {
		console.log(e);
		console.log(e.target.getAttribute('data-a'));
		this.setState({
			count: this.state.count + 1
		}, () => {
			console.log(this.state.count);
		})
	}

	render() {
		const {count} = this.state
		return <div className="state-demo-container">
			<button data-a={1} onClick={this.addCount}>click-{count}</button>
		</div>
	}
}

export default StateDemo;
