import React from 'react';
import '../../App.css';
import './ScriptElement.css';

const ScriptElement = props => (
	<div className="script-element hover-transition user-select" draggable="true">
		<li>{props.name}</li>
	</div>
)

export default ScriptElement;