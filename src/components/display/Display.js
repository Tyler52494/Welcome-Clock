import React from "react"

function Display(props) {

    return (
        <div className="Question">
            <strong>Question: </strong> {props.question} <br />
            <strong>Value: </strong> {props.value} <br />
            <strong>Category: </strong> {props.category} <br />


            <form onSubmit={props.handleSubmit} className="Answer">
                <label htmlFor="Answer">Answer: </label>
                <input
                    type="text"
                    name="answer"
                    value={props.Answer}
                    onChange={props.handleChange} />
            </form>
        </div>
    )
}


export default Display;