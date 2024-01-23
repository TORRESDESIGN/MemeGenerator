import React from 'react'

function Form() {
	return (
		<form className="form-container" action ="">
			<div className="form-row">
                <div>
                    <label htmlFor="top-text">Top text</label><br />
                    <input className="input" placeholder="Type here" type="text" id="top-text" />
                </div>
                <div>
                    <label htmlFor="bot-text">Bottom text</label><br />
                    <input className="input" placeholder="Type here" type="text" id="bot-text" /><br />
                </div>
            </div>
			<input className="button" type="submit" value="Get a new meme image" />
		</form>
	)
}

export default Form