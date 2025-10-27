import { useState } from 'react'
export default function MyForm() {
    const [FormValue, setFormValue] = useState({ name: '', email: '' })
    console.log(FormValue);
    return (
        <form style={{ padding: '20px', margin: '20px', border: '5px solid teal', borderRadius: '10px', color: '#fff', textAlign: 'center' }} onSubmit={(e) => { e.preventDefault();}}>
            <label>Name :</label>
            <input value={FormValue.name} onChange={(e) => {setFormValue({name : e.target.value, email : FormValue.email})}} />
            <hr/>
            <label>email :</label>
            <input value={FormValue.email} onChange={(e) => setFormValue({email: e.target.value, name : FormValue.name })} />
            <hr/>
            <button>Submit</button>
            
        </form>
    )
}
//-------------------------------------Form------------------------------------------