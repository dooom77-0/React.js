import {useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'
import TafsirData from './Tafsir.json'
export default function AyahViewer() {
    const [ayahNumber, setAyahNumber] = useState(11)
    const [ayahText, setAyahText] = useState('')

    const [Tafsir, setTafsir] = useState(TafsirData[`49:${ayahNumber}`]?.tafsir)
    const [Language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'ar'
    })

    useEffect(() => {
        localStorage.setItem('language', Language)
    }, [Language])

    useEffect(() => {
        setTafsir(TafsirData[`49:${ayahNumber}`]?.tafsir)
    }, [ ayahNumber,Language])

    useEffect(() => {
        setTafsir(TafsirData[`49:${ayahNumber}`]?.tafsir)
        setLanguage('ru')
    }, [ayahNumber])

    useEffect(() => {
        axios.get(`https://api.alquran.cloud/v1/ayah/49:${ayahNumber}`)
            .then(res => {
                setAyahText(res.data.data.text)
            })
            .catch(err => {
                console.log(err)
            })
    }, [ayahNumber])

    const nextAyah = () => {
        if (ayahNumber < 13) {
            setAyahNumber(ayahNumber + 1)
            setLanguage()
        }
    }

    const prevAyah = () => {
        if (ayahNumber > 11) {
            setAyahNumber(ayahNumber - 1)
        }
    }
    

  return (
    <>
        <div className="container" dir='rtl'>
            <h1>Surah Al-Hujurat, verse {ayahNumber}</h1>
              <h2>( {ayahText} ({ayahNumber}) )</h2>
              <hr />
              <h2>Translation into other languages</h2>
              <div>
                <button
                className='Ar' 
                onClick={() => setLanguage('ar')} 
                style={{ opacity: Language == 'ar' ? 0.5 : 1,cursor: Language == 'ar' ? 'not-allowed' : 'pointer' }}>عربي</button>
                  
                <button
                className='En' 
                onClick={() => setLanguage('en') } 
                style={{opacity: Language == 'en' ? 0.5 : 1,cursor: Language == 'en' ? 'not-allowed' : 'pointer'}}>english</button>
                
                <button
                className='Fr'
                style={{opacity: Language == 'fr' ? 0.5 : 1,cursor: Language == 'fr' ? 'not-allowed' : 'pointer'}} 
                onClick={() => setLanguage("fr")}>Français</button>
                
                <button 
                className='Ru'
                style={{opacity: Language == 'ru' ? 0.5 : 1,cursor: Language == 'ru' ? 'not-allowed' : 'pointer'}} 
                onClick={() => setLanguage("ru")}>русский</button>
                  
                <button 
                className='Cn'
                style={{opacity: Language == 'cn' ? 0.5 : 1,cursor: Language == 'cn' ? 'not-allowed' : 'pointer'}} 
                onClick={() => setLanguage("cn")}>中文</button>
                
              </div>
              {/* <Tafsir /> */}
              <h2 className='Tafsir'>{Tafsir[Language]}</h2>
              
            <div className="btns">
                <button
                className='Next' 
                onClick={nextAyah} 
                style={{opacity: ayahNumber == 13 ? 0 : 1, padding: '10px', margin: '5px'}}>Next Ayah</button>
                
                <button
                className='Prev'
                style={{opacity: ayahNumber == 11 ? 0 : 1, padding: '10px', margin: '5px'}} 
                onClick={prevAyah}>Previous Ayah</button>
            </div>  
        </div>
    </>
  )
}
