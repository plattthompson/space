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
			active: false
		}
	}

	// state = {
	// 	objects: [
	// 		{
	// 			name: 'Console Window',
	// 			expanded: true,
	// 			children: ['Console']
	// 		},
	// 		{
	// 			name: 'Solar System',
	// 			expanded: false,
	// 			children: ['FF_Solar System']
	// 		},
	// 		{
	// 			name: 'Spacecraft',
	// 			expanded: true,
	// 			children: ['ISS']
	// 		}
	// 	]
	// }

	renderTabs = () => (
		Object.entries(this.state.objectTabs).map(subarray => 
			<div className="object-tab-container">
				<div onClick={this.changeTabExpansion} id={subarray[0]} className="object-tab">
					<h4 className="object-tab-text">{subarray[1].name}</h4>
					<FontAwesomeIcon
						icon={faChevronDown}
						// className="object-tab-chevron rotateChevron"
						// className={`object-tab-chevron ` + subarray[1].expanded ? 'rotatedChevron' : ''}
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
		// this.state.objects.map(object =>
		// 	<div className="object-tab-container">
		// 		<div onClick={this.changeTabExpansion} id={object.name} className="object-tab">
		// 			<h4 className="object-tab-text">{object.name}</h4>
		// 			<FontAwesomeIcon
		// 				icon={faChevronDown}
		// 				// className="object-tab-chevron rotateChevron"
		// 				// className={`object-tab-chevron ` + subarray[1].expanded ? 'rotatedChevron' : ''}
		// 				className={`object-tab-chevron ${subarray[1].expanded ? 'rotatedChevron' : ''}`}
		// 				size="1x"
		// 			/>
		// 		</div>
		// 		<div className={`object-tab-children-container ${this.state[subarray[0]].expanded ? '' : 'collapsed'}`}>
		// 			<ul className="object-tab-children-list">
		// 				{subarray[1].children.map(child =>
		// 					<li className="object-tab-child">{child}</li>
		// 				)}
		// 			</ul>
		// 		</div>
		// 	</div>
		// )
	)

	toggleDropdown = e => {
		// const enumObj = {
		// 	objectAddIcon: 'add',
		// 	objectEditIcon: 'edit',
		// 	objectViewIcon: 'view'
		// };
		this.state.iconDropdowns.currentlyOpened === enumObj[e.currentTarget.id] ?
			this.closeDropdown() :
			this.openDropdown(e);
	}

	openDropdown = e => {
		// const enumObj = {
		// 	objectAddIcon: 'add',
		// 	objectEditIcon: 'edit',
		// 	objectViewIcon: 'view'
		// };
		const openedDropdown = enumObj[e.currentTarget.id];
		const stateToBeUpdated = {...this.state};
		stateToBeUpdated.iconDropdowns.currentlyOpened = openedDropdown;
		this.setState({ ...stateToBeUpdated });
		// console.log(this.state.iconDropdowns.currentlyOpened);
		console.log(this.state);
	}

	closeDropdown = () => {
		const stateToBeUpdated = {...this.state};
		stateToBeUpdated.iconDropdowns.currentlyOpened = null;
		this.setState({ stateToBeUpdated });
	}

	activateObjectInput = () => {
		// Adds GroundStation or Spacecraft
		// const stateToBeUpdated = {...this.state};
		// if (stateToBeUpdated[e.target.id]) {
		// 	// Add children
		// } else {
		// 	// Add tab header and children
		// }

		// update object input to true
		const stateToBeUpdated = {...this.state};
		stateToBeUpdated.objectInput.active = true;
		stateToBeUpdated.iconDropdowns.currentlyOpened = null;
		this.setState({ stateToBeUpdated });
	}

	createObject = () => {

	}

	changeTabExpansion = e => {
		const tabToBeUpdated = e.currentTarget.id;
		// this.setState(prevState => ({
		// 	...prevState,
		// 	[tabToBeUpdated]: {
		// 	...prevState[tabToBeUpdated],
		// 	expanded: !prevState[tabToBeUpdated].expanded
		// } }));

		// this.setState(prevState => ({
		// 	objectTabs: {
		// 		...prevState.objectTabs,
		// 		[tabToBeUpdated]: {
		// 			...prevState.objectTabs[tabToBeUpdated],
		// 			expanded: !prevState.objectTabs[tabToBeUpdated].expanded 
		// 		}
		// 	},
		// 	...prevState
		// }));

		const stateToBeUpdated = {...this.state};
		const toggleExpanded = !stateToBeUpdated.objectTabs[tabToBeUpdated].expanded;
		stateToBeUpdated.objectTabs[tabToBeUpdated].expanded = toggleExpanded;
		this.setState({ ...stateToBeUpdated });

		console.log(this.state);
	}

	render() {
		return (
			<div className="object-browser">
				<div className="object-browser-header-container">
					<h2 className="object-browser-header">Object Browser</h2>
					<ObjectBrowserIcons
						iconDropdowns={this.state.iconDropdowns}
						toggleDropdown={this.toggleDropdown}
						activateObjectInput={this.activateObjectInput}
					/>
				</div>
				{this.renderTabs()}
				<div className={`object-input-container ${this.state.objectInput.active ? '' : 'hidden'}`}>
					<form onSubmit={this.createObject} className="object-input-form">
						<input className="object-input" placeholder="Object name" />
						<button className="object-input-btn">Add</button>
					</form>
				</div>
			</div>
		)
	}
}

export default ObjectBrowser;