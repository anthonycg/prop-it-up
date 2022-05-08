import React, {useState} from 'react';

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);
    
    // const handleClick = () => {
    //     console.log("hello" + props.age)
    //     setAge(props.age + 1);
    // }

    return (
        <div>
            <h2> {props.lastName} , {props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick ={ (event) => setAge(age + 1) }>Birthday button for {props.firstName}</button>
        </div>
    );
}


export default PersonCard;