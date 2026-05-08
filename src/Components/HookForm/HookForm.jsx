import { } from 'react';
import useInputField from '../../Hooks/useInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField("");
    const [password, passwordOnChange] = useInputField("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log("submit", name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br />
                <input defaultValue={name} type="text" onChange={nameOnChange} placeholder='HookForm Name' />
                <br /><br />
                <input defaultValue={email} type="email" name="email" placeholder='HookForm Email' onChange={emailOnChange} />
                <br /><br />
                <input type="password" name="password" defaultValue={password} onChange={passwordOnChange} placeholder='HookForm Password' />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;