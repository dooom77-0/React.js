import ALtermithiData from './ALtermithi.json'  
import './ALtermithi.css'
import { useState, useEffect } from 'react'


export default function ALtermithi() {
    const [hadithNumber, setHadithNumber] = useState(0)
    const [hadith, setHadith] = useState(ALtermithiData[hadithNumber].matn)

    useEffect(() => { 
        setHadith(ALtermithiData[hadithNumber].matn)
        setHadithNumber(hadithNumber)
        
    }, [hadithNumber])
    return (
    <>
            <div className="ALtermithi" dir='rtl'>
            <h2 className='number'>حديث رقم {ALtermithiData[hadithNumber].number} من {ALtermithiData.length}</h2>
            <h1>{ALtermithiData[hadithNumber].title}</h1>
                <h1 className='matn'>{hadith}</h1>
                <h2 className='explane'> 🧠شرح الحديث : {ALtermithiData[hadithNumber].ex}</h2>
                <h3 className='narrator'>👤الراوي:{ALtermithiData[hadithNumber].narrator}</h3>
                <h3 className='narrator'>👥 المحدث: {ALtermithiData[hadithNumber].narrator2}</h3>
                <h3 className='source'> 📕المصدر: {ALtermithiData[hadithNumber].source}</h3>
                <h3 className='grade'>درجة الحديث: {ALtermithiData[hadithNumber].grade}</h3>

                <div className="buttons">
                    <button
                    id='prev'
                    style={{ visibility: hadithNumber === 0 ? 'hidden' : 'visible' }}
                    onClick={() => {
                            if (hadithNumber > 0) {
                                setHadithNumber(hadithNumber - 1)
                            }
                        }}
                    >
                        السابق
                    </button>
                    <button
                    id='next'
                    style={{ visibility: hadithNumber === ALtermithiData.length - 1 ? 'hidden' : 'visible' }}
                    onClick={() => {
                            if (hadithNumber < ALtermithiData.length - 1) {
                                setHadithNumber(hadithNumber + 1)
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
