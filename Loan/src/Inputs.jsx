import './App.css'
import { useState } from 'react'
import Modal from './Modal'
import Swal from 'sweetalert2'
export default function Inputs() {
    const [value, setValue] = useState({ name: '', tel: '', age: '', isEmployee: '', salary: '' })
    const isFormValid = value.name && value.tel && value.age && value.salary;
    function handleSubmit(e) {
        e.preventDefault();
        if (!isFormValid || value.age < 18 || value.age > 40 || value.tel.length < 10 || value.tel.length > 12) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again',
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Your Loan Request has been sent successfully',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }
    return (
        <>
        <div className='container'>
            <h1>Request a Loan</h1>
            <hr />
            
            <label>Name </label>
            <input value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })} />
            
            <label>Phone number</label>
            <input type='number' minLength='10' maxLength='12' value={value.tel} onChange={(e) => setValue({ ...value, tel: e.target.value })} />
            
            
            <label>Age</label>
            <input type='number' min={18} max={40} value={value.age} onChange={(e) => setValue({ ...value, age: e.target.value })} />
            
            <label>Are you an employee?</label>
            <input className='check' type='checkbox' checked={value.isEmployee} onChange={(e) => setValue({ ...value, isEmployee: e.target.checked })} />
            
            
            <label>Salary</label>
            <select className='select' value={value.salary} onChange={(e) => setValue({ ...value, salary: e.target.value })}>
                <option value=''>choose the salary...</option>

                <option>Less than 500$</option>

                <option>Between 500$ and 2000$</option>

                <option>above 2000$</option>
            </select>            
            <button className='btn' style={{ opacity: isFormValid ? 1 : 0.5 }} disabled={!isFormValid} onClick={(e) => { handleSubmit(e) }}>Submit</button>
            
            </div>
        <Modal isVisible={false}/>
        </>
    )

}