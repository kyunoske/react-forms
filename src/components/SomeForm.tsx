import React, {ChangeEvent, useState} from 'react';

function SomeForm() {

    const [form, setForm] = useState([])
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("")

    function handleChange(happy: ChangeEvent<HTMLInputElement>) {
        console.log("Alarm! A change: ", happy.target.value)
    }

    // @ts-ignore
    const handleSubmit = (event) => {
        event.preventDefault();

        let form = {
            firstName,
            lastName,
            email,
            telephone
        }
        // @ts-ignore
        setForm(form);
        console.log(form);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{
                display: "flex",
                flexDirection: "column",
                margin: "5px 20px"
            }}>
                <input
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                />
                <input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                name="telephone"
                onChange={(e) => setTelephone(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SomeForm;