import React, { Fragment } from 'react';
import './ObjectBrowserIcons.css';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faEye } from '@fortawesome/free-solid-svg-icons';

// const addOptions = [
// 	{ value: 'space', label: 'NASA' }
// ];

const fadeIn = 'animate__animated animate__fadeIn animate__faster';

const ObjectBrowserIcons = props => (
	<Fragment>
		<div className="object-browser-icon-container">
			<FontAwesomeIcon
				onClick={props.toggleDropdown}
				icon={faPlus}
				id="objectAddIcon"
				className="object-browser-icon"
				size="1x"
			/>
			<div className={`tooltip ${fadeIn} ${props.iconDropdowns.currentlyOpened === 'add' ? '' : 'hidden'}`}>
				<ul>
					<li onClick={props.activateObjectInput} className="tooltip-option">Spacecraft</li>
					<li className="tooltip-option">GroundStation</li>
				</ul>
			</div>
		</div>
		<div className="object-browser-icon-container">
			<FontAwesomeIcon
				onClick={props.toggleDropdown}
				icon={faPen}
				id="objectEditIcon"
				className="object-browser-icon"
				size="1x"
			/>
			<div className={`tooltip ${fadeIn} ${props.iconDropdowns.currentlyOpened === 'edit' ? '' : 'hidden'}`}>
				<ul>
					{props.iconDropdowns.edit.map(item =>
						<li className="tooltip-option">{item}</li>
					)}
				</ul>
			</div>
		</div>
		<div className="object-browser-icon-container">
			<FontAwesomeIcon
				onClick={props.toggleDropdown}
				icon={faEye}
				id="objectViewIcon"
				className="object-browser-icon"
				size="1x"
			/>
			<div className={`tooltip ${fadeIn} ${props.iconDropdowns.currentlyOpened === 'view' ? '' : 'hidden'}`}>
				<ul>
					{props.iconDropdowns.view.map(item =>
						<li className="tooltip-option">{item}</li>
					)}
				</ul>
			</div>
		</div>
	</Fragment>
)

export default ObjectBrowserIcons;