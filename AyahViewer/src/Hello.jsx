import { Link } from 'react-router-dom'
import'./App.css'
export default function Hello() {
  return (
      <div className='App2'>
        <div className='Hello'>
              <h1>Добро пожаловать на сайт AyahViewer</h1>
              <h2>нажмите на кнопку, чтобы перейти в AyahViewer</h2>
            <Link to="/AyahViewer">
                <button id='Go'>Перейти к AyahViewer</button>
            </Link>
        </div>
    </div>
  )
}
