import { Link } from 'react-router-dom'
import { PostContext } from './contexts/PostContext'
import { useContext } from 'react'

export default function PostList() {
  let posts = useContext(PostContext)
  let postList = posts.map((post) => {
    return (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <div style={{backgroundColor:"lightblue",margin:"10px",padding:"10px"}}>
          <h1>{post.title}</h1>
        </div>
      </Link>
    )
  })
  return (
    <div>
      {postList}
    </div>
  )
}
