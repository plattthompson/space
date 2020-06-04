import React, { Component } from 'react';
import '../../App.css';
import './ObjectBrowser.css';
import ObjectBrowserIcons from '../ObjectBrowserIcons/ObjectBrowserIcons.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const enumObj = {
	objectAddIcon: 'add',
	objectEditIcon: 'edit',
	objectViewIcon: 'view'
};

class ObjectBrowser extends Component {
	state = {
		objectTabs: {
			consoleWindow: {
				name: 'Console Window',
				expanded: true,
				children: ['Console']
			},
			solarSystem: {
				name: 'Solar System',
				expanded: false,
				children: ['FF_Solar System']
			},
			spacecraft: {
				name: 'Spacecraft',
				expanded: true,
				children: ['ISS']
			}
		},
		iconDropdowns: {
			currentlyOpened: null,
			add: ['Spacecraft', 'GroundStation'],
			edit: ['Undo', 'Redo'],
			view: ['See simulation']
		},
		objectInput: {
			active: false,
			value: ''
		}
	}

	renderTabs = () => (
		Object.entries(this.state.objectTabs).map(subarray => 
			<div className="object-tab-container">
				<div onClick={this.changeTabExpansion} id={subarray[0]} className="object-tab">
					<h4 className="object-tab-text">{subarray[1].name}</h4>
					<FontAwesomeIcon
						icon={faChevronDown}
						className={`object-tab-chevron ${subarray[1].expanded ? 'rotatedChevron' : ''}`}
						size="1x"
					/>
				</div>
				<div className={`object-tab-children-container ${this.state.objectTabs[subarray[0]].expanded ? '' : 'collapsed'}`}>
					<ul className="object-tab-children-list">
						{subarray[1].children.map(child =>
							<li className="object-tab-child">{child}</li>
						)}
					</ul>
				</div>
			</div>
		)
	)

	toggleDropdown = e => {
		this.state.iconDropdowns.currentlyOpened === enumObj[e.currentTarget.id] ?
			this.closeDropdown() :
			this.openDropdown(e);
	}

	openDropdown = e => {
		const openedDropdown = enumObj[e.currentTarget.id];
		const stateToBeUpdated = {...this.state};
		stateToBeUpdated.iconDropdowns.currentlyOpened = openedDropdown;
		this.setState({ ...stateToBeUpdated });
	}

	closeDropdown = () => {
		const stateToBeUpdated = {...this.state};
		stateToBeUpdated.iconDropdowns.currentlyOpened = null;
		this.setState({ ...stateToBeUpdated });
	}

	activateObjectInput = () => {
		const stateToBeUpdated = {...this.state};
		stateToBeUpdated.objectInput.active = true;
		stateToBeUpdated.iconDropdowns.currentlyOpened = null;
		this.setState({ ...stateToBeUpdated });
	}

	handleObjectInputChange = e => {
		const textValue = e.target.value;
		const stateToBeUpdated = {...this.state};
		stateToBeUpdated.objectInput.value = textValue;
		this.setState({ ...stateToBeUpdated });
	}

	createObject = e => {
		e.preventDefault();
		const stateToBeUpdated = {...this.state};
		stateToBeUpdated.objectTabs.spacecraft.children.push(stateToBeUpdated.objectInput.value);
		stateToBeUpdated.objectInput.value = '';
		stateToBeUpdated.objectInput.active = false;
		this.setState({ ...stateToBeUpdated });
	}

	changeTabExpansion = e => {
		const tabToBeUpdated = e.currentTarget.id;
		const stateToBeUpdated = {...this.state};
		const toggleExpanded = !stateToBeUpdated.objectTabs[tabToBeUpdated].expanded;
		stateToBeUpdated.objectTabs[tabToBeUpdated].expanded = toggleExpanded;
		this.setState({ ...stateToBeUpdated });
	}

	render() {
		return (
			<div className="object-browser">
				<div>
					<div className="object-browser-header-container">
						<h2 className="object-browser-header">Object Browser</h2>
						<ObjectBrowserIcons
							iconDropdowns={this.state.iconDropdowns}
							toggleDropdown={this.toggleDropdown}
							activateObjectInput={this.activateObjectInput}
						/>
					</div>
					{this.renderTabs()}
				</div>
				<div className={`object-input-container ${this.state.objectInput.active ? '' : 'hidden'}`}>
					<form onSubmit={this.createObject} className="object-input-form">
						<input
							onChange={this.handleObjectInputChange}
							value={this.state.objectInput.value}
							className="object-input"
							placeholder="Object name"
						/>
						<button className="object-input-btn">Add</button>
					</form>
				</div>
			</div>
		)
	}
}

export default ObjectBrowser;