import DaifData from "./Daif.json"
import './Daif.css'
import { useState, useEffect } from 'react'


export default function Daif() {
    const [daifNumber, setDaifNumber] = useState(0)
    const [daifMatn, setDaifMatn] = useState(DaifData[daifNumber].matn)

    useEffect(() => {
        setDaifMatn(DaifData[daifNumber].matn)
        setDaifNumber(daifNumber)
    }, [daifNumber])
    return (
        <>
            <div className="Daif" dir="rtl">
                <h2 className='number'>حديث رقم {DaifData[daifNumber].number} من {DaifData.length}</h2>
                <h2 className='matn2'>{daifMatn}</h2>
                <h2 className='explane2'> {DaifData[daifNumber].ex}</h2>
                <h3 className='source2'> 📕المصدر: {DaifData[daifNumber].source}</h3>
                <h3 className='grade2'>درجة الحديث: {DaifData[daifNumber].grade}</h3>

                <div className="buttons">
                    <button
                        id='prev'
                        style={{ visibility: daifNumber === 0 ? 'hidden' : 'visible' }}
                        onClick={() => {
                            if (daifNumber > 0) {
                                setDaifNumber(daifNumber - 1)
                            }
                        }}
                    >
                        السابق
                    </button>
                    <button
                        id='next'
                        style={{ visibility: daifNumber === DaifData.length - 1 ? 'hidden' : 'visible' }}
                        onClick={() => {
                            if (daifNumber < DaifData.length - 1) {
                                setDaifNumber(daifNumber + 1)
                            }
                        }}
                    >
                        التالي
                    </button>
                </div>
            </div>
        </>
    )
    
}