import { useParams } from "react-router-dom"
import { useContext } from "react"
import { PostContext } from "./contexts/PostContext"

export default function PostDetails() {
  const posts = useContext(PostContext)
  const {postId} = useParams()

  const post = posts.find((p) => {
    return p.id === postId
  })
    console.log(post)
    return (
    <div>
        <h2>Post Details</h2>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
    </div>
  )
}
