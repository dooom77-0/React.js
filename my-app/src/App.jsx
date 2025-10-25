import "./App.css";
import Header from "./Components/Header";
import Post from "./Components/Post";
import SideBar from "./Components/SideBar";

const showSide = true
function App() {
  const Fcon = `My name is Abdulrahman, I am 18 years old`
  const Scon = `My name is Khalid, I am 19 years old`
  const Tcon = `My name is Ahmed, I am 20 years old`
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
            <Post name={"Abdulrahman"} content={Fcon} />
            <Post name={"Khalid"} content={Scon} />
            <Post name={"Ahmed"} content={Tcon}/>
          </main>
          {/* ==POSTS CONTAINER == */}

          {/* SIDEBAR CONTAINER */}
          <div style={{ paddingTop: '120px', width: '40%' }}>
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

