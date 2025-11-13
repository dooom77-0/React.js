
import './App.css'
// import ALbukhari from './Ahadith sahih/ALbukhari.jsx'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import ALtermithi from './Ahadith hasan/ALtermithi.jsx'
import Daif from './Ahadith daif/Daif.jsx'
import Home from './HomePage.jsx';
import Select from './Select.jsx';
import ALbukhari from './Ahadith sahih/ALbukhari.jsx';
function App() { 
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Select" element={<Select />}/>
          <Route path="/AhadithHasan" element={<ALtermithi />} />
          <Route path="/AhadithSahih" element={<ALbukhari />} />
          <Route path="/AhadithDaif" element={<Daif />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
