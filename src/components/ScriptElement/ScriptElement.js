import React from 'react';
import '../../App.css';
import './ScriptElement.css';

const ScriptElement = props => (
	<div className="script-element hover-transition user-select">
		<li>{props.element}</li>
	</div>
)

export default ScriptElement;