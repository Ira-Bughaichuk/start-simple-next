// 'use client'; // because wu use useEffect, useState  
// import { useEffect, useState } from "react";

// export default function AllPage() {
// const [allVideos, setAllVideos] = useState([]);
// useEffect(()=>{
//   fetch('/api/video')
//   .then(res => res.json())
//   .then(setAllVideos)
// },[])

//   return (
//     <>
//      All 
//      {allVideos.map((item, indx)=>(
//       <li key={indx}>{item.name}</li>
//      ))}
//     </>
   
//   )
// }

//але щоб не використовувати 'use client'; і не робити клієнтським виконуємо це:
import  {getAllVideos} from '../../(server)/api/video/data';
// import  {getAllVideos} from  "@/app/api/video/data"
// import  {getAllVideos} from '@/app/(server)/api/video/data';
export default async function AllPage() {
 const allVideos = await getAllVideos();
  
    return (
      <>
       All 
       {allVideos.map((item, indx)=>(
        <li key={indx}>{item.name}</li>
       ))}
      </>
     
    )
  }