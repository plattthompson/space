import React, { Component } from 'react';
import './App.css';
import FileMenuBar from './components/FileMenuBar.js';
import ObjectBrowser from './components/ObjectBrowser.js';
import ScriptEditor from './components/ScriptEditor.js';
import ScriptElementsMenu from './components/ScriptElementsMenu.js';

class App extends Component {
	render() {
		return (
			<div className="app-container">
				<FileMenuBar />
				<ObjectBrowser />
				<ScriptEditor />
				<ScriptElementsMenu />
			</div>
		)
	}
}

export default App;
