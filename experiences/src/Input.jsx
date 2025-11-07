import './App.css';
import { useState} from 'react'
import MyComponent from './MyComponent';
import { InputContext } from './contexts/InputContext';
import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'

export default function Input() {
  const UserData = useContext(UserContext);
  const [value, setValue] = useState({ name: '', tel: '', age: '' })
  function handleName(name) {
    setValue({ ...value, name})
  }
  function handlePhone(tel) {
    setValue({ ...value, tel})
  }
  function handleAge(age) {
    setValue({ ...value, age})
  }

  const FormValid = value.name && value.tel && value.age

  function Clg(e) {
    if (FormValid) {
      e.preventDefault();
      console.log(value)
    }

  }
  return (
    <>
      <h1 style={{color: '#fff'}}>Welcome {UserData.Name}</h1>
      <div className='container'>
        <InputContext.Provider value={{
          LabelTitle: 'Name', 
          handleChange: handleName, 
          value: value.name
        }}>
          <MyComponent />
        </InputContext.Provider>
            
        <InputContext.Provider value={{
          LabelTitle: 'Phone Number', 
          handleChange: handlePhone, 
          value: value.tel
          }}>
          <MyComponent />
        </InputContext.Provider>
            
        <InputContext.Provider value={{
          LabelTitle: 'Age', 
          handleChange: handleAge, 
          value: value.age
          }}>
          <MyComponent />
        </InputContext.Provider>
            
          <button className='btn' onClick={(e) => {Clg(e)}} style={{opacity: FormValid ? 1 : 0.5, cursor: FormValid ? 'pointer' : 'not-allowed'}}>Submit</button>
        </div>
    </>
  )
}
