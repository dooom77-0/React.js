import { Outlet } from 'react-router-dom'
export default function PostLayout() {
  return (
    <>
    <div style={{width:"100%", background:"green",textAlign:"center"}}>
      <h2>Posts</h2>
    </div>
    
    <div>
        <Outlet />
          </div>
          
    <div style={{width:"100%", background:"green",textAlign:"center"}}>
      <h2>Posts</h2>
    </div>
    </>
  )
}
