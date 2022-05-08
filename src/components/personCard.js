import React, {useState} from 'react';

const PersonCard = (props) => {
    const [state, setState] = useState(props.initialClicks);
    return (
        <div>
            <h2> {props.lastName} , {props.firstName}</h2>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Click count: {state}</p>
            <button onClick ={ (event) => setState(state + 1)}>click to count {props.firstName}</button>
        </div>
    )
}


export default PersonCard;