import React from 'react'

function Form() {
	return (
		<form className="form-container" action ="">
			<label htmlFor="top-text">Top text</label><br />
			<input type="text" id="top-text" />
			<label htmlFor="bot-text">Bottom text</label><br />
			<input type="text" id="bot-text" /><br />
			<input type="submit" value="Get a new meme image 🖼" />
		</form>
	)
}

export default Form