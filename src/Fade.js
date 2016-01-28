import React from 'react';

class Fade extends React.Component {
	constructor (props, context) {
		super(props, context);

		this._showElement = this._showElement.bind(this);
		this._hideElement = this._hideElement.bind(this);

		let style = {
			opacity:          0,
			WebkitTransition: `opacity ${this.props.duration}ms ease-out`,
			msTransition:     `opacity ${this.props.duration}ms ease-out`,
			transition:       `opacity ${this.props.duration}ms ease-out`
		};

		this.state = {
			style: Object.assign(style, props.style)
		};
	}
	componentDidMount () {
		this._showElement();
	}
	componentWillReceiveProps () {
		this._hideElement();
		this._showElement();
	}
	_showElement () {
		this.setState({style: {opacity: 1}});
	}
	_hideElement () {
		this.setState({style: {opacity: 0}});
	}
	render () {
		let props = Object.assign(this.state, this.props);

		return React.createElement(
			this.props.component,
			props,
			this.props.children
		);
	}
}

Fade.defaultProps = {
	component: 'div',
	duration: 200
};

export default Fade;
