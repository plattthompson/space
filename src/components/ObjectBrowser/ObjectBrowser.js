import React, { Component } from 'react';
import '../../App.css';
import './ObjectBrowser.css';

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
				</div>
				<div className={`object-tab-children-container ${this.state[subarray[0]].expanded ? '' : 'collapsed'}`}>
					<ul className="object-tab-children-list">
						{subarray[1].children.map(child =>
							<li>{child}</li>
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
				{this.renderTabs()}
			</div>
		)
	}
}

export default ObjectBrowser;