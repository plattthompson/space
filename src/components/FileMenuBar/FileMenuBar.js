import React from 'react';
import '../../App.css';
import './FileMenuBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFileUpload, faTrash } from '@fortawesome/free-solid-svg-icons';

const FileMenuBar = () => (
	<div className="file-menu-bar">
		<div className="top-file-menu-bar">
			<div className="menu-container">
				<div className="file-menu flex-center hover-transition user-select">
					<h2>File</h2>
				</div>
				<div className="options-menu flex-center hover-transition user-select">
					<h2>Options</h2>
				</div>
				<div className="workspace-menu flex-center hover-transition user-select">
					<h2>Workspace</h2>
				</div>
				<div className="window-menu flex-center hover-transition user-select">
					<h2>Window</h2>
				</div>
			</div>
		</div>
		<div className="bottom-file-menu-bar">
			<div className="icons">
				<FontAwesomeIcon
					icon={faFile}
					size="1x"
				/>
				<FontAwesomeIcon
					icon={faFileUpload}
					size="1x"
				/>
				<FontAwesomeIcon
					icon={faTrash}
					size="1x"
				/>
			</div>
		</div>
	</div>
)

export default FileMenuBar;