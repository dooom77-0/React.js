import "./App.css";
import Header from "./Components/Header";
import Post from "./Components/Post";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className={"App"} style={{ backgroundColor: "#ffffffff", width:'100%' , height:'100%'}}>
      <header>
        <Header />
      </header>
      <div style={{display:'flex',justifyContent:'center'}}>
      {/* POSTS & SIDEBAR CONTAINER */}
        <div style={{display:'flex', width:'60%'}}>
          {/* POSTS CONTAINER */}
          <main style={{paddingTop:'120px', width:"100%"}}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </main>
          {/* ==POSTS CONTAINER == */}

          {/* SIDEBAR CONTAINER */}
          <div style={{paddingTop:'120px',width:'40%'}}>
            <SideBar />
          </div>
          {/* ==SIDEBAR CONTAINER == */}
        </div>
        {/*== POSTS & SIDEBAR CONTAINER ==*/}
      </div>
    </div>
  );
}

export default App;

