
import './App.css'
import ALbukhari from './Ahadith sahih/ALbukhari.jsx'
// import {Routes,Route} from 'react-router-dom'
import ALtermithi from './Ahadith hasan/ALtermithi.jsx'

function App() { 
  return (
    <div className="App">
      <ALtermithi />
      {/* <ALbukhari /> */}

      {/* <Routes>
        <Route path="/Ahadith hasan" element={<ALtermithi />} />
      </Routes>

      <Routes>
        <Route path="/Ahadith sahih" element={<ALbukhari />} />
      </Routes> */}
    </div>
  )
}

export default App;
