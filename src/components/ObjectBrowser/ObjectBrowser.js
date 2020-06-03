import React, { Component } from 'react';
import '../../App.css';
import './ObjectBrowser.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faEye, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class ObjectBrowser extends Component {
	state = {
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
	}

	renderTabs = () => {
		return Object.entries(this.state).map(subarray => 
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
				<div className={`object-tab-children-container ${this.state[subarray[0]].expanded ? '' : 'collapsed'}`}>
					<ul className="object-tab-children-list">
						{subarray[1].children.map(child =>
							<li className="object-tab-child">{child}</li>
						)}
					</ul>
				</div>
			</div>
		)
	}

	changeTabExpansion = e => {
		const tabToBeUpdated = e.currentTarget.id;
		this.setState(prevState => ({
			...prevState,
			[tabToBeUpdated]: {
			...prevState[tabToBeUpdated],
			expanded: !prevState[tabToBeUpdated].expanded
		} }));
	}

	render() {
		return (
			<div className="object-browser">
				<div className="object-browser-header-container">
					<h2 className="object-browser-header">Object Browser</h2>
					<FontAwesomeIcon icon={faPlus} className="object-browser-icon" size="1x" />
					<FontAwesomeIcon icon={faPen} className="object-browser-icon" size="1x" />
					<FontAwesomeIcon icon={faEye} className="object-browser-icon" size="1x" />
				</div>
				{this.renderTabs()}
			</div>
		)
	}
}

export default ObjectBrowser;