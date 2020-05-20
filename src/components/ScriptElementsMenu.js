import React, { Component } from 'react';
import '../App.css';
import ScriptElement from './ScriptElement.js';

class ScriptElementsMenu extends Component {
	state = {
		scriptElements: [
			'Block...End',
			'Freeform',
			'Assign(s)',
			'Call',
			'Close',
			'For...End',
			'Get',
			'If...End'
		]
	}

	renderScriptElements = () => {
		return this.state.scriptElements.map(element =>
			<ScriptElement element={element} />
		)
	}

	render() {
		return (
			<div className="script-elements">
				<div className="script-elements-header-container">
					<h2 className="script-elements-header">Script Elements</h2>
				</div>
				<ul>
					{this.renderScriptElements()}
				</ul>
			</div>
		)
	}
}

export default ScriptElementsMenu;