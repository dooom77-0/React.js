import './App.css';
import { useState} from 'react'
import MyComponent from './MyComponent';
import { InputContext} from './contexts/InputContext';

export default function Input() {
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

  return (
      <>
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
            
            
        </div>
    </>
  )
}
