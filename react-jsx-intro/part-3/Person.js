const Person = (props) => {
    let voteResponse = props.age >= 18 ? "please go vote!" : "You must be 18.";
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some infromation about this person.</p>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies:
                    {hobbies}
                </ul>
            </ul>
            <h3>{voteResponse}</h3>
        </div>
    );
}