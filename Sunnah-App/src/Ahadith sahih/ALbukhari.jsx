import ALbukhariData from './ALbukhari.json'
import './ALbukhari.css'
import { useState, useEffect } from 'react'
export default function ALbukhari() {
    const [hadithNumber, setHadithNumber] = useState(0)
    const [hadith, setHadith] = useState(ALbukhariData[hadithNumber].matn)
    useEffect(() => {
        setHadith(ALbukhariData[hadithNumber].matn)
        setHadithNumber(hadithNumber)
    }, [hadithNumber]) 
    return (
        <>
            <div className="ALbukhari" dir='rtl'>
                <h2 className='number'>حديث رقم {ALbukhariData[hadithNumber].number} من {ALbukhariData.length}</h2>
                <h1>{ALbukhariData[hadithNumber].title}</h1>
                <h2 className='Matn'>{hadith}</h2>
                <h3 className='Explane'> 🧠شرح  الحديث : {ALbukhariData[hadithNumber].ex}</h3>
                <h3 className='Narrator'> 👤الراوي: {ALbukhariData[hadithNumber].narrator}</h3>
                <h3 className='Narrator'> 👥المحدث: {ALbukhariData[hadithNumber].narrator2}</h3>
                <h3 className='Source'> 📕المصدر: {ALbukhariData[hadithNumber].source}</h3>
                <h3 className='Grade'> درجة الحديث : {ALbukhariData[hadithNumber].grade}</h3>
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
                    style={{ visibility: hadithNumber === ALbukhariData.length - 1 ? 'hidden' : 'visible' }}
                    onClick={() => {
                            if (hadithNumber < ALbukhariData.length - 1) {
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