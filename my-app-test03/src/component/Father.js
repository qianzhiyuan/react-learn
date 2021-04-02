import React from 'react';
import Child from "./Child";

class Father extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showChild: true,
			a: 1
		}
		console.log('Father.constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Father.getDerivedStateFromProps');
		return null
	}

	componentDidMount() {
		console.log('Father.componentDidMount');
		// setTimeout(() => {
		// 	console.log('-===-');
		// 	this.setState({a: 2})
		// }, 200)
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('Father.getSnapshotBeforeUpdate');
		// getSnapshotBeforeUpdate钩子return的数据会被
		// componentDidUpdate的第三个参数接收
		return null;
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('Father.shouldComponentUpdate');
		return true;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('Father.componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('Father.componentWillUnmount');
	}

	render() {
		console.log('Father.render');
		const {showChild} = this.state

		return <div>
			Father <br/>
			<button onClick={() => {
				console.log('点击' + (showChild ? '隐藏' : '展示') + '子元素btn');
				this.setState({showChild: !showChild})
			}}>{showChild ? '隐藏' : '展示'} -》 子元素
			</button>
			{showChild && <Child/>}
		</div>
	}
}

export default Father;
