import './App.css';
import { useState} from 'react'
export default function Input() {
    const [value,setValue] = useState({name:'',tel:'',age:''})
  return (
      <>
        <div className='container'>
            <label>Name </label>
            <input 
            value={value.name} 
            onChange={(e) => setValue({ ...value, name: e.target.value })} />
            
            <label>phone number </label>
            <input 
            value={value.tel} 
            onChange={(e) => setValue({ ...value, tel: e.target.value })} />
            
            <label>age </label>
            <input 
            value={value.age} 
            onChange={(e) => setValue({ ...value, age: e.target.value })} />
            
        </div>
    </>
  )
}
