import './App.css'
import { useState } from 'react'

export default function Inputs() {
    const [value, setValue] = useState({ name: '', tel: '', age: '', isEmployee: false, salary: '' })
    return (
        <div className='container'>
            <h1>Request a Loan</h1>
            <hr />
            
            <label>Name </label>
            <input value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })} />
            
            <label>Phone number</label>
            <input type='tel' value={value.tel} onChange={(e) => setValue({ ...value, tel: e.target.value })} />
            
            
            <label>Age</label>
            <input type='number' value={value.age} onChange={(e) => setValue({ ...value, age: e.target.value })} />
            
            <label>Are you an employee?</label>
            <input type='checkbox' checked={value.isEmployee} onChange={(e) => setValue({ ...value, isEmployee: e.target.checked })} />
            
            
            <label>Salary</label>
            <select>
                <option>Less than 500$</option>
                <option>Between 500$ and 2000$</option>
                <option></option>
            </select>            
            <button>Submit</button>
        </div>
    )

}