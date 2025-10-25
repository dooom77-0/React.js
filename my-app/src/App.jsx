import "./App.css";
import Header from "./Components/Header";
import Post from "./Components/Post";
import SideBar from "./Components/SideBar";

const showSide = true
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
            <Post name={"Abdulrahman"}>
              <>
                <p style={{fontSize:'20px',background:'red',color:'#fff',padding:'10px',borderRadius:'10px',fontWeight:'bold'}}>My name is Abdulrahman</p>
              </>
            </Post>
            <Post name={"Khalid"} >
              <>
                <p style={{fontSize:'20px',background:'yellow',color:'#000',fontWeight:'bold',padding:'10px 0'}}>nigga nigga nigga</p>
              </>
            </Post>
            <Post name={"Ahmed"}>
              <>
                <p style={{fontSize:'20px',background:'green',color:'#fff',padding:'10px',borderRadius:'10px',fontWeight:'bold'}}>mango mango </p>
              </>
            </Post>
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

