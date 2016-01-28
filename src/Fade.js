import React from 'react';

class Fade extends React.Component {
	constructor (props, context) {
		super(props, context);

		let style = {
			WebkitTransition: `opacity ${this.props.duration}ms ease-in`,
			msTransition:     `opacity ${this.props.duration}ms ease-in`,
			transition:       `opacity ${this.props.duration}ms ease-in`
		};

		this.state = {
			style: Object.assign(style, props.style),
			opacity: 0
		};

		this.mounted = true;
	}

	componentDidMount () {
		setTimeout(this._showElement.bind(this), 2);
	}

	_showElement () {
		this.setState({opacity: 1});
	}

	render () {
		let props = Object.assign(this.state, this.props);

		props.style.opacity = this.state.opacity;
		props.id = 'xupleto';

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
