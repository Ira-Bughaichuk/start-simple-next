"use client";

import { useState } from "react";



export default function Video({video}) {
  const [liked, setLiked] = useState(false)
  
    return (
    <>
    {video.name}
    <button type="button" onClick={()=>setLiked(true)}>{liked ? "You liked me:))" : "Like me!"}</button>
    </>
  )
}
