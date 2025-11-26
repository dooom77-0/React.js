import {Route,Routes,Link } from 'react-router-dom'
import './App.css'
import Hello from './Hello'
import About from './About'
import PostList from './PostList'
import PostDetails from './PostDetails'
import { PostContext } from './contexts/PostContext'

function App() {

  return (
    <>
      <PostContext.Provider>
        <div className="App">
          <div className='buttons'>
            <Link to='/'>
              <button>Hello</button>
            </Link>

            <Link to='/About'>
              <button>About</button>
            </Link>
            
            <Link to='/PostList'>
              <button>PostList</button>
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/About" element={<About />} />
            <Route path="/PostList" element={<PostList />} />
            <Route path="/PostDetails/:id" element={<PostDetails />} />
            <Route path="*" element={<h1>404 {"Not Found"}</h1>} />
          </Routes>
          </div >
      </PostContext.Provider>
    </>
  )
}

export default App
