/* index.js */

import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function Main() {
	return (
		<>
			<small className="title">Children errorbox example.</small>
			<ErrorBox>The world is spinning faster than usual.</ErrorBox>
			<small className="title">Dialog Box example.</small>
			<DialogBox title="This is important">
				Here is some important message of some sort.
			</DialogBox>
		</>
	)
}

function ErrorBox( { message, children } ) {
	return (
		<aside className="error-box">
			<span className="fa fa-exclamation-triangle"></span>
			{ children }
		</aside>
	)
}

class DialogBox extends React.Component {

	onClose() {
		const { title } = this.props;
		alert( `[CLOSING] ${ title }` );
	}

	render() {
		const { title, children } = this.props;
		return (
			<div className="dialog-box">
				<h2>{ title }</h2>
				<div className="content-inner">
					{ children }
				</div>
				<div className="buttons-wrapper">
					<button onClick={ this.onClose.bind( this ) }>Close</button>
				</div>
			</div>
		)
	}

}

ReactDOM.render( <Main />, document.querySelector( '#root' ) );
