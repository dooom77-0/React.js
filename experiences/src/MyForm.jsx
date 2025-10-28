import { useState } from 'react'
export default function MyForm() {
    const [FormValue, setFormValue] = useState({ name: '', email: '', age: '', generalInfo: '', isStudent: false })
    return (
        <form style={{ padding: '20px', margin: '20px', border: '5px solid teal', borderRadius: '10px', color: '#fff', textAlign: 'center' }} onSubmit={(e) => { e.preventDefault();}}>
            <label>Name :</label>
            <input value={FormValue.name} onChange={(e) => {setFormValue({...FormValue, name : e.target.value})}} />
            <hr/>
            <label>email :</label>
            <input value={FormValue.email} onChange={(e) => setFormValue({...FormValue, email : e.target.value})} />
            <hr />
            <label>Age :</label>
            <input value={FormValue.age} onChange={(e) => setFormValue({...FormValue, age : e.target.value})} />
            <hr />
            <label>Are you a student :</label>
            <input type='checkbox' checked={FormValue.isStudent} onChange={(e) => setFormValue({...FormValue, isStudent : e.target.checked})} />
            <hr/>
            <label>General Info :</label>
            <textarea value={FormValue.generalInfo} onChange={(e) => setFormValue({...FormValue, generalInfo : e.target.value})} />
            <hr />
            
            <button>Submit</button>            
        </form>
    )
}
//-------------------------------------Form------------------------------------------