import React, {  useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import image from "../../../../assets/contact_img.jpg"
import { today } from '../../utils/date';

function AdminDashboard() {
    let date=new Date();
    const navigate=useNavigate()
    const [time, setTime] = useState({hours:date.getHours(),minutes:date.getMinutes(),seconds:date.getSeconds()})
    
    useEffect(function(){
      const intervalFunction=setInterval(function(){
        const dateEffect=new Date();
        setTime(function(time){
          return {...time,hours:dateEffect.getHours(),minutes:dateEffect.getMinutes(),seconds:dateEffect.getSeconds()}
        })
      },1000)
      return function(){
        clearInterval(intervalFunction)
      }
    },[])
  
    function handleReturn(){
      navigate("/")
    }
  
    const {hours,minutes,seconds}=time
    return (
      <React.Fragment>
            <div>
                    <div className=" px-2">
                      <section>
                        <img src={image} alt="Logmen Logo" className=" rounded-sm"  />
                        <main className=" flex flex-col font-[monospace] mb-4 mt-8 border-t-2 border-b-2 gap-3  border-gray-400 py-2">
                            <p className=' font-semibold text-lg'>Admin Dashboard</p>
                            <p className=" max-md:text-lg text-xl font-bold">{today}</p>
                            <p className="  font-semibold text-lg">{`${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`}</p>
                        </main>
                      </section>
                    </div>
                <div className=' px-4 font-[monospace]'>
                  <button onClick={handleReturn} className=" bg-gray-700 text-white text-lg max-sm:text-base py-1 rounded font-semibold px-3 w-fit ">Logout</button>
                  <p className=" text-center font-black ">Longmen &copy;</p>
                </div>
            </div>
      </React.Fragment>
    )
}

export default AdminDashboard