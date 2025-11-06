import { useContext} from 'react'
import { InputContext } from './contexts/InputContext'

export default function MyInput() {
  const MyContext = useContext(InputContext);
  return (
    <>
      <label>{MyContext.LabelTitle}</label>
      <input 
      value={MyContext.value}
      onChange={(e) => MyContext.handleChange(e.target.value)} />
    </>
  )
}
