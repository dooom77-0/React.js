import {useState,useEffect} from 'react'
import axios from 'axios'
import { data } from 'react-router-dom'
import './App.css'

export default function AyahViewer() {
    const [ayahNumber, setAyahNumber] = useState(11)
    const [ayahText, setAyahText] = useState('')

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
        }
    }

    const prevAyah = () => {
        if (ayahNumber > 11) {
            setAyahNumber(ayahNumber - 1)
        }
    }
    useEffect(() => {
        
    })
  return (
    <>
        <div className="container" dir='rtl'>
            <h1>سورة الحجرات آية {ayahNumber}</h1>
            <h2>( {ayahText} )</h2>
              
            <div className="btns">
                <button onClick={nextAyah}>Next Ayah</button>
                <button onClick={prevAyah}>Previous Ayah</button>
            </div>  
        </div>
    </>
  )
}
