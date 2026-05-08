import { useRef } from 'react';

const UncontrolledField = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(emailRef.current.value);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email);
        console.log(password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" placeholder='UncontrolledField Email' />
                <br />
                <br />
                <input ref={passwordRef} type="password" name="password" placeholder='UncontrolledField Password' />
                <br /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;