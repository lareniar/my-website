import { ChangeEvent, useState } from "react";
import './index.css';

const Form = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const printConsole = (event: any) => {
        console.log(name);
        event.preventDefault();
    }

    const handleChangeName = (props: ChangeEvent<HTMLInputElement>) => {
        console.log(password);
        setName(props.target.value)
    }

    const handleChangeEmail = (props: ChangeEvent<HTMLInputElement>) => {
        console.log(email);
        setEmail(props.target.value)
    }

    const handleChangePassword = (props: ChangeEvent<HTMLInputElement>) => {
        console.log(name);
        setPassword(props.target.value)
    }


    return (
        <div>
            <h3>Create Account</h3>
            <form className="formStyle" onSubmit={printConsole} autoComplete="off">
                <input type="text" className="inputName" onChange={handleChangeName} placeholder="Name" />
                <input type="text" className="inputSurname" onChange={handleChangeEmail} placeholder="Email" />
                <input type="text" className="inputPassword" onChange={handleChangePassword} placeholder="Password" />
                <button >Submit</button>
            </form>
        </div>

    );

}

export default Form;