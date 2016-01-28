import React      from 'react';
import Render     from './Render';

export default class Portal extends React.Component {
	render () {
		return <div {...this.props} component="div">{this.props.children}</div>;
	}
}
