import { createContext } from "react";
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
export let PostContext = createContext(postsData)