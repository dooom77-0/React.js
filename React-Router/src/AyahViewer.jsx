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
        setLanguage("ar")
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
                  onClick={() => setLanguage('ar')} 
                  style={{ opacity: Language == 'ar' ? 0.5 : 1 }}>عربي</button>
                  
                <button 
                onClick={() => setLanguage('en') } 
                style={{opacity: Language == 'en' ? 0.5 : 1}}>english</button>
                
                <button 
                style={{opacity: Language == 'fr' ? 0.5 : 1}} 
                onClick={() => setLanguage("fr")}>Français</button>
                
                <button 
                style={{opacity: Language == 'ru' ? 0.5 : 1}} 
                onClick={() => setLanguage("ru")}>русский</button>
                
              </div>
              {/* <TafsitViewer /> */}
              <h2>{Tafsir[Language]}</h2>
              
            <div className="btns">
                <button 
                onClick={nextAyah} 
                style={{opacity: ayahNumber == 13 ? 0 : 1}}>Next Ayah</button>
                
                <button 
                style={{opacity: ayahNumber == 11 ? 0 : 1}} 
                onClick={prevAyah}>Previous Ayah</button>
            </div>  
        </div>
    </>
  )
}
