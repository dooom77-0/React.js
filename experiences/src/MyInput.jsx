import { useContext} from 'react'
import { InputContext } from './contexts/InputContext'
import { UserContext } from './contexts/UserContext';
export default function MyInput() {
  const UserData = useContext(UserContext);
  const MyContext = useContext(InputContext);
  return (
    <>
      <label> {MyContext.LabelTitle}</label>
      <input 
      value={MyContext.value}
        onChange={(e) => MyContext.handleChange(e.target.value)} />
      
      
    </>
  )
}
