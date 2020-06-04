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
		currentTab: null,
		currentTabId: null,
		tabs: [
			{
				id: 1,
				title: 'artemis_launch_sequence',
				script: ''
			},
			{
				id: 2,
				title: 'mission_plan_description',
				script: ''
			},
			{
				id: 3,
				title: 'set_up_objects',
				script: '',
			},
			{
				id: 4,
				title: 'propagate',
				script: ''
			}
		]
	}

	componentDidMount() {
		const firstTabTitle = this.state.tabs[0].title;
		this.setState({ currentTab: firstTabTitle });
	}

	renderTabs = () => {
		return this.state.tabs.map(item => (
			<li
				onClick={e => this.changeTabs(e, item)}
				className={`script-editor-tab ${this.state.currentTab === item.title ? 'active-tab' : ''}`}
			>
				{item.title}
			</li>
		))
	}

	renderScriptEditor = () => {

	}

	changeTabs = (e, item) => {
		this.setState({ currentTab: item.title });
	}

	onScriptChange = e => {
		const currentTab = this.state.currentTab;
		const tabStateToBeUpdated = [...this.state.tabs];
		// tabStateToBeUpdated.map(tab => {
		// 	if (tab.title === currentTab) {
		// 		tab.script = e;
		// 	}
		// });
		this.setState({
			currentTab: currentTab,
			tabs: tabStateToBeUpdated
		})
		console.log(this.state.tabs);
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
					// onChange={this.onScriptChange}
					value={this.state.tab}
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
					<label className="script-action-btn">Throttle</label>
					<input className="script-action-btn slider" type="range" min="1" max="100" />
				</div>
			</div>
		)
	}
}

export default ScriptEditor;