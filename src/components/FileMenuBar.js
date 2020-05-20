import React from 'react';
import '../App.css';

const FileMenuBar = () => (
	<div className="file-menu-bar">
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
)

export default FileMenuBar;