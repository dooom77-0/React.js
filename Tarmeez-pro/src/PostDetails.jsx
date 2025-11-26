import { useParams } from "react-router-dom"

export default function PostDetails({ title, body }) {
    const {id} = useParams()
    console.log(id)
    return (
    <div>
        <h2>Post Details</h2>
          <h1>{title}</h1>
          <p>{body}</p>
    </div>
  )
}
