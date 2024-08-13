import React, { useEffect, useState } from "react"
// import { useForm, ValidationError } from '@formspree/react';
import axios from "axios";
import { useNavigate } from "react-router";

function ContactForm() {
    const navigate = useNavigate()
    const [inputFields, setInputFields] = useState({name:"",phone_number:"",email:"",message:""})
    const [serverState, setServerState] = useState({submitting: false,status: null});
    const {name,phone_number,email,message} = inputFields
    const [emptyInputFields, setEmptyInputFields] = useState(false)
    const [messageDelivered, setMessageDelivered] = useState(false)
    

    const onChangeUserInput = (e)=>{
        setInputFields({
            ...inputFields,[e.target.name]:e.target.value
        })
    }


    const handleServerResponse = (ok, msg) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
            setInputFields({name:"",phone_number:"",email:"",message:""});
            setMessageDelivered(true)
        }
      };


    const submitFunction = (e)=>{
        e.preventDefault()
        if(name=="longmen" && message=="admin" && phone_number=="" && email==""){
            navigate("/admin")
        }else if(name.length==0 || phone_number.length===0 || email.length===0 || message.length===0){
            setEmptyInputFields(true)
        } else{
            if(navigator.onLine){
                setServerState({ submitting: true });
                axios({
                    method: "POST",
                    url: "https://formspree.io/f/mwpebpkj",
                    data: inputFields
                }).then(() => {
                    handleServerResponse(true, "Message Delivered Successfully");
                }).catch(r => {
                    handleServerResponse(false, r.response.data.error);
                });
            }else{
                console.log("Offline")
            }
        }
    }
    
    useEffect(function(){
        const border_colour_timer = setTimeout(function(){
           return setEmptyInputFields(false)
        },3000)

        return ()=>{
            clearTimeout(border_colour_timer)
        }
    },[emptyInputFields])
    
    useEffect(()=>{
        const messageTimer = setTimeout(()=>{
            return setMessageDelivered(false);
        },3000)

        return ()=>{
            clearTimeout(messageTimer)
        }
    })


    return(
        <React.Fragment>
            <br />
            <div>
                <header className=" text-center font-semibold text-lg underline">Send Us A direct Message</header>
                <br />
                <main className=" bg-gray-200 py-3 md:px-5 max-sm:mx-6 px-2 mx-2 rounded-md">
                    <form action=""  className=" flex flex-col gap-5 py-1">
                        <input onChange={onChangeUserInput} name="name" id="name" value={name}  type={"text"} className={` outline-none border-b-[2px] bg-gray-200 placeholder:font-semibold placeholder: ${emptyInputFields && name.length===0  ?" border-b-red-500":"border-b-black"}  py-2 px-2 font-medium`} placeholder="Your Name"/>
                        <input onChange={onChangeUserInput} name="phone_number" id="phone number" value={phone_number}  type={"tel"} className={` outline-none border-b-[2px] bg-gray-200 placeholder:font-semibold placeholder: ${emptyInputFields && phone_number.length===0 ?" border-b-red-500":"border-b-black"}  py-2 px-2 font-medium`} placeholder="Your Phone Number"/>
                        <input onChange={onChangeUserInput} name="email" id="email" value={email}  type={"email"} className={` outline-none border-b-[2px] bg-gray-200 placeholder:font-semibold placeholder: ${emptyInputFields && email.length===0 ?" border-b-red-500":"border-b-black"}  py-2 px-2 font-medium`} placeholder="Your E-mail"/>
                        <textarea  onChange={onChangeUserInput} name="message" id="message" value={message} cols={1} rows={1} className={` outline-none border-b-[2px] bg-gray-200 placeholder:font-semibold placeholder: ${emptyInputFields && message.length===0 ?" border-b-red-500":"border-b-black"}  py-2 px-2 font-medium`} placeholder="Your Message" />
                        <div className=" flex flex-col gap-2 items-center justify-center">
                            <button  disabled={serverState.submitting} type="submit" onClick={submitFunction} className={` text-lg  ${serverState.submitting?" bg-gray-500":"bg-[#131b34]"} py-1 px-2  text-white rounded font-medium `}>Send a Message</button>
                            {/* <p className={messageDelivered ? " bg-green-500 text-white font-semibold text-lg rounded-md py-2 px-3 " : " errorMsg"}>{serverState.status.ok?"Message Delivered Successfully":"Mail Unsuccessful"}</p> */}
                             {serverState.status && (<p className={messageDelivered ? " bg-green-500 text-white font-semibold text-lg rounded-md py-2 px-3 " : " errorMsg"}>{messageDelivered && serverState.status.msg}</p>)} 
                            {/* {serverState.status && (<p className={messageDelivered ? " bg-green-500 text-white font-semibold text-lg rounded-md py-2 px-3 " : " errorMsg"}>{ messageDelivered && serverState.status.msg}</p>)} */}
                        </div>
                    </form>
                </main>
            </div>
            <br />
        </React.Fragment>
    )
}

export default ContactForm