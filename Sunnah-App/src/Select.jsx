import './Select.css'
import { Link } from 'react-router-dom'
export default function Select() {
  return (
    <>
      <div className="Select">
        <h1>يرجى إختيار القسم</h1>
            <Link to="/AhadithSahih">
            <button className='btn1'>احاديث صحيحة</button>
            </Link>
            
            <Link to="/AhadithHasan">
            <button className='btn2'>احاديث حسنة</button>
            </Link>
            
            <Link to="/AhadithDaif">
            <button className='btn3'>احاديث ضعيفة أو موضوعة (للتحذير منها)</button>
            </Link>
      </div>
    </>
  )
}
