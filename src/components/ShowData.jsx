import axios from 'axios';
import React, { useState,useEffect } from 'react'
import Popup from "./Popup"
const Showdata = () => {
    const[data,setData]=useState([]);
    const[status,setStatus]=useState("");
    const[landings,setLandings]=useState(null);
    const[reuse,setReuse]=useState(null);
    useEffect(()=>
    {
        if(status && landings && reuse)
        axios.get(`https://api.spacexdata.com/v3/capsules?status=${status}&reuse_count=${reuse}&landings=${landings}&page=1&limit=5`)
        .then((r)=>{console.log(r.data);setData(r.data)});
        else if(status && landings)
        axios.get(`https://api.spacexdata.com/v3/capsules?status=${status}&landings=${landings}&page=1&limit=5`)
        .then((r)=>{console.log(r.data);setData(r.data)});
        else if(landings && reuse)
        axios.get(`https://api.spacexdata.com/v3/capsules?reuse_count=${reuse}&landings=${landings}&page=1&limit=5`)
        .then((r)=>{console.log(r.data);setData(r.data)});
        else if(status)
        axios.get(`https://api.spacexdata.com/v3/capsules?status=${status}&limit=5`)
        .then((r)=>{console.log(r.data);setData(r.data)});
        else if(landings)
        axios.get(`https://api.spacexdata.com/v3/capsules?landings=${landings}&limit=5`)
        .then((r)=>{console.log(r.data);setData(r.data)});
        else if(reuse)
        axios.get(`https://api.spacexdata.com/v3/capsules?reuse_count=${reuse}&limit=5`)
        .then((r)=>{console.log(r.data);setData(r.data)});
        else
        axios.get(`https://api.spacexdata.com/v3/capsules?limit=5`)
        .then((r)=>{console.log(r.data);setData(r.data)})
    },[status,landings,reuse])
    

  return (
    <>
    <div class="flex justify-start gap-8 ml-12">
  <div class="mb-3 xl:w-96">
    <select onChange={(e)=>setStatus(e.target.value)} class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      mt-10
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected value="">Filter by status</option>
        <option value="active">Active</option>
        <option value="retired">Retired</option>
        <option value="destroyed">Destroyed</option>
        <option value="unknown">unknown</option>
    </select>
  </div>


 <div class="mb-3 xl:w-96">
    <select onChange={(e)=>setLandings(e.target.value)} class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      mt-10
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected value="">Filter by Number of landings</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
  </div>
  <div class="mb-3 xl:w-96">
    <select onChange={(e)=>setReuse(e.target.value)} class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      mt-10
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected value="">Filter by Reuse count</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
  </div>
</div>
{data && <div className='m-10 text-white text-center grid grid-cols-4 gap-6'>
        {data.map((el)=>
        (
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img class="w-full" src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/05/1000-13-1590457037.jpeg" alt="Capsules"/>
            <div class="px-6 py-4">
              <h6 class="text-gray-700 text-base">
                 Capsule serial: {el.capsule_serial}
              </h6>
              <h6 class={(el.status==="active" &&  "text-green-600  text-2xl") || ((el.status==="retired" || el.status==="destroyed") && "text-red-600 text-2xl") || (el.status==="unknown" && "text-blue-600 text-2xl")}>
              status:{el.status}
            </h6>
              <h6 class="text-gray-700 text-base">
                Reuse Count: {el.reuse_count}
              </h6>
              <h6 class="text-gray-700 text-base">
                Number of landings: {el.landings}
              </h6>
            </div>
           
        <Popup data={el}/>
          </div>
        ))}
    </div>} 
    {!data && <h1 className=' text-white'>No Data Matching for Your Search</h1>}
    </>

  )
}

export default Showdata