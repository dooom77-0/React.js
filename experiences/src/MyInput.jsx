import { useState } from 'react'
export default function MyInput() {
    const [value,setValue] = useState('')
    return (
        <div>
            <label>Name :</label>
            <input value={value} onChange={(e) => setValue(e.target.value) } />
        </div>
    )
}
//--------------------------------State-------------------------------------------------