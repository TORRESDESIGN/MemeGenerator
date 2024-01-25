import React from 'react'

function Form() {
	return (
		<main>
			<form action="">
				<input className="form-row" type="text" placeholder= "Type here" id="top-text" />
				<input className="form-row" type="text" placeholder= "Type here" id="bot-text" />
				<input className="button" type="submit" value="Get a new meme image" />
			</form>
		</main>
	)
}

export default Form