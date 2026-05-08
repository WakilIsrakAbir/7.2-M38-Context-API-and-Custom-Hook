import { useState } from 'react';
import { } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [email, setEmail] = useState('');
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);

        if(password.length < 6) {
            setError("Password Must be 6 carecter or longer.");
        }else{
            setError("")
        }
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

        // if(password.length < 6) {
        //     setError("Password Must be 6 carecter or longer.")
        // }else{
        //     setError("")
        // }

    }

    return (
        <div>
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={handleNameChange} placeholder='ControlledField Name' />
                <br />
                <br />
                <input onChange={handleEmailChange} defaultValue={email} type="email" name="email" placeholder='ControlledField email' required />
                <br /><br />
                <input type="password" name="passwors" placeholder='ControlledField Password' onChange={handlePasswordOnChange} defaultValue={password} required />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:"red"}}>
                <small> {error} </small>
            </p>

        </div>
    );
};

export default ControlledField;