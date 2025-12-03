import {Route,Routes,Link } from 'react-router-dom'
import './App.css'
import Hello from './Hello'
import About from './About'
import PostList from './PostList'
import PostDetails from './PostDetails'
import { PostContext } from './contexts/PostContext'
import PostLayout from './PostLayout'

function App() {
  let postsData = [
  {
  id: "1",
  title: "first post",
  body: "this is the first post"
},
{
  id: "2",
  title: "second post",
  body: "this is the second post"
},
{
  id: "3",
  title: "third post",
  body: "this is the third post"
  }
]
  return (
    
    <>
      <PostContext.Provider value={postsData}>
        <div className="App">
          <div className='buttons'>
            <Link to='/'>
              <button>Hello</button>
            </Link>

            <Link to='/About'>
              <button>About</button>
            </Link>
            
            <Link to='/Posts'>
              <button>PostList</button>
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/About" element={<About />} />
            <Route path='/Posts' element={<PostLayout />}>
              <Route index element={<PostList />} />
              <Route path=":postId" element={<PostDetails />} />
            </Route>
            <Route path="*" element={<h1>404 {"Not Found"}</h1>} />
          </Routes>
          </div >
      </PostContext.Provider>
    </>
  )
}

export default App
