import React, { Component } from 'react';
import '../../App.css';
import ScriptElement from '../ScriptElement/ScriptElement.js';
import '../ScriptElementsMenu/ScriptElementsMenu.css';

class ScriptElementsMenu extends Component {
	state = {
		scriptElements: [
			{
				name: 'Block...End',
				scriptContent: ''
			},
			{
				name: 'Freeform',
				scriptContent: ''
			},
			{
				name: 'Assign(s)',
				scriptContent: ''
			},
			{
				name: 'Call',
				scriptContent: ''
			},
			{
				name: 'Close',
				scriptContent: ''
			},
			{
				name: 'For...End',
				scriptContent: ''
			},
			{
				name: 'Get',
				scriptContent: ''
			},
			{
				name: 'If...End',
				scriptContent: 'If ( ) {\n	\n}'
			}
		]
	}

	renderScriptElements = () => {
		return this.state.scriptElements.map(element =>
			<ScriptElement name={element.name} scriptContent={element.scriptContent} />
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