import "./App.css";
import Header from "./Components/Header";
import Post from "./Components/Post";
import SideBar from "./Components/SideBar";
const showSide = true
function App() {
  const posts = [{
    id: 1,
    name: 'Abdulrahman',
    children: <div style={{background:'#bdb'}}>
      <p style={{ fontWeight: 'bold', fontSize: '17px' }}>My name is {name}</p>
    </div>
  },
    {
    id : 2,
    name : 'Khalid',
    children : 'nigga nigga nigga'
    },
    {
    id : 3,
    name : 'Ali',
    children : 'mango'
    },
    {
      id: 4,
      name: 'Ahmed',
      children: 'My name is Ahmed'
    }
  ]
  const postsList = posts.map((post) => {
    return (
      <Post key={post.id} name={post.name}>
        {post.children}
      </Post>
    )
  })
  return (
    <div className={"App"} style={{ backgroundColor: "#fff", width:'100%' , height:'100%'}}>
      <header>
        <Header />
      </header>
      <div style={{display:'flex',justifyContent:'center'}}>
      {/* POSTS & SIDEBAR CONTAINER */}
        <div style={{display:'flex', width:'60%'}}>
          {/* POSTS CONTAINER */}
          <main style={{paddingTop:'120px', width:"100%"}}>
            {postsList}
          </main>
          {/* ==POSTS CONTAINER == */}

          {/* SIDEBAR CONTAINER */}
          <div style={{ paddingTop: '120px', width: '40%'}}>
            {showSide == true ? (<SideBar />) : (<></>)}
          </div>
          {/* ==SIDEBAR CONTAINER == */}
        </div>
        {/*== POSTS & SIDEBAR CONTAINER ==*/}
      </div>
    </div>
  );
}

export default App;

