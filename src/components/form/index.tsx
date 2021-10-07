import { ChangeEvent, useState } from "react";

const Form = () => {
    const [name, setName] = useState("");

    const printConsole = (event: any) => {
        console.log(name);
        event.preventDefault();
    }

    const handleChangeName = (props: ChangeEvent<HTMLInputElement>) => {
        setName(props.target.value)
    }

    return (
        <div>
            <form onSubmit={printConsole}>
                <input type="text" onChange={handleChangeName} />
                <button >Enviar</button>
            </form>
        </div>

    );

}

export default Form;