import Input from './Input'
import {UserContext} from './contexts/UserContext'

export default function App() { 
  return (
    <UserContext.Provider value={{
      username: 'Mohamed12', 
      Name: 'Mohamed', 
      email: 'mohamed@gmail.com'
      }}>
      <div className='App'>
        <Input />
      </div>
    </UserContext.Provider>
  )
}
