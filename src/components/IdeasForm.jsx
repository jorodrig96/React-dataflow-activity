import {useState} from 'react';

export default function IdeasForm (props) {

    let [input, setInput]= useState("")

    const handleSubmit = e => {
        e.preventDefault()
        props.addIdeas(input)
}

    return (
       <form onSubmit= {handleSubmit}>
        <input type= 'text' onChange={e => setInput(e.target.value)} />
        <button type= 'submit'>Submit your idea!</button>
       </form>
    )
};