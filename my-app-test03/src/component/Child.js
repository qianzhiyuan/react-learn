import React from 'react';

class Child extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			a: true
		}
		console.log('Child.constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Child.getDerivedStateFromProps');
		return state
	}

	componentDidMount() {
		console.log('Child.componentDidMount');
	}

	componentWillUnmount() {
		console.log('Child.componentWillUnmount');
	}

	render() {
		function typeOfShow(type) {
			return type === '1' ? '红色' : '黄色'
		}
		console.log('Child.render');
		return <div>
			Child-{typeOfShow(1)}
		</div>
	}
}

export default Child;
