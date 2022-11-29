import axios from 'axios';
import React, { useState,useEffect } from 'react'
import Popup from "./Popup"
const Showdata = () => {
    const[data,setData]=useState([]);
    
    useEffect(()=>
    {
        axios.get("https://api.spacexdata.com/v3/capsules?status=active&page=1&limit=5")
        .then((r)=>{console.log(r.data);setData(r.data)})
    },[])
    

  return (
    
    <div className='m-10 text-white text-center grid grid-cols-4 gap-6'>

        {data.map((el)=>
        (
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img class="w-full" src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/05/1000-13-1590457037.jpeg" alt="Capsules"/>
            <div class="px-6 py-4">
              <h6 class="text-gray-700 text-base">
                 Capsule serial: {el.capsule_serial}
              </h6>
              <span><h6 class={(el.status==="active" &&  "text-green-600  text-2xl") || ((el.status==="retired" || el.status==="destroyed") && "text-red-600 text-2xl") || (el.status==="unknown" && "text-blue-600 text-2xl")}>
                status: {el.status}
              </h6>
              </span>
              <h6 class="text-gray-700 text-base">
                Type: {el.type}
              </h6>
            </div>
           
        <Popup data={el}/>
          </div>
        ))}
    </div>
  )
}

export default Showdata