import React, { Component } from 'react';
import '../App.css';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow_night';

class ScriptEditor extends Component {
	state = {
		tabs: [
			{
				title: 'falcon heavy',
				script: ''
			},
			{
				title: 'apollo',
				script: ''
			}
		]
	}

	renderTabs = () => {
		return this.state.tabs.map(item => (
			<li>{item.title}</li>
		))
	}

	renderScriptEditor = () => {

	}

	render() {
		return (
			<div className="script-editor-container">
				<div className="script-editor-tab-container">
					<ul className="script-editor-tab-list">
						{ this.renderTabs() }
					</ul>
				</div>
				<AceEditor
					mode="javascript"
					theme="tomorrow_night"
					setAutoScrollEditorIntoView="true"
					name="script-editor"
					width="100%"
					height="80%"
				/>
				<div className="script-editor-action-btns">
				</div>
			</div>
		)
	}
}

export default ScriptEditor;