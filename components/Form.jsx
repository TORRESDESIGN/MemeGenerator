import React from 'react'

function Form() {
	return (
		<form className="form-container" action ="">
			<div className="top-text">
				<label htmlFor="top-text">Top text</label><br />
				<input type="text" id="top-text" value="type here" />
			</div>
			<div className="bot-text">
				<label htmlFor="bot-text">Bottom text</label><br />
				<input type="text" id="bot-text" value="type here" />
			</div>
			<input className="button" type="submit" value="Get a new meme image 🖼" />
		</form>
	)
}

export default Form