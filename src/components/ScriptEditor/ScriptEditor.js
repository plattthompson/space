import React, { Component } from 'react';
import '../../App.css';
import './ScriptEditor.css';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-tomorrow_night';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';

class ScriptEditor extends Component {
	state = {
		// aceRef: React.createRef(),
		currentTabID: null,
		currentTab: null,
		currentScript: '',
		tabs: {
			1: {
				id: 1,
				title: 'artemis_launch_sequence',
				script: 'While (ISS.ElapsedTime() < TimeSpan.FromDays(2) {\n\tStep ISS;\n}'
			},
			2: {
				id: 2,
				title: 'mission_plan_description',
				script: 'if (readyForLaunch) {\n\tgoToTheMoon();\n}'
			},
			3: {
				id: 3,
				title: 'set_up_objects',
				script: 'objects set up',
			},
			4: {
				id: 4,
				title: 'propagate',
				script: ''
			}
		}
	}

	componentDidMount() {
		const { id, title, script } = Object.values(this.state.tabs)[0];
		this.setState({
			currentTab: title,
			currentTabID: id,
			currentScript: script
		});
	}

	renderTabs = () => {
		return Object.values(this.state.tabs).map(item => (
			<li
				onClick={e => this.changeTabs(e, item)}
				className={`script-editor-tab ${this.state.currentTab === item.title ? 'active-tab' : ''}`}
			>
				{item.title}
			</li>
		))
	}

	changeTabs = (e, item) => {
		// this.setState({ currentTab: item.title });
		this.setState({
			currentTabID: item.id,
			currentTab: item.title,
			currentScript: item.script
		});
	}

	onScriptChange = script => {
		const stateToBeUpdated = {...this.state};
		stateToBeUpdated.currentScript = script;
		stateToBeUpdated.tabs[stateToBeUpdated.currentTabID].script = script;
		this.setState({ ...stateToBeUpdated });
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
					onChange={this.onScriptChange}
					value={this.state.currentScript}
					// setAutoScrollEditorIntoView="true"
					name="script-editor"
					width="100%"
					height="90%"
					// maxLines={Infinity}
				/>
				<div className="script-editor-action-btns">
					<FontAwesomeIcon
						icon={faPlay}
						className="script-action-btn play"
						size="1x"
					/>
					<FontAwesomeIcon
						icon={faPause}
						className="script-action-btn pause"
						size="1x"
					/>
					<FontAwesomeIcon
						icon={faStop}
						className="script-action-btn stop"
						size="1x"
					/>
					<label className="throttle">Throttle</label>
					<input className="script-action-btn slider" type="range" min="1" max="100" />
				</div>
			</div>
		)
	}
}

export default ScriptEditor;