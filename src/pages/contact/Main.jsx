import {FaInstagram,FaWhatsapp} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {FaPhoneVolume} from "react-icons/fa6"

import React from "react"
function Main(){
    return (
        <React.Fragment>
            <div>
                <div className={` bg-[url(assets/contact_img.jpg)] bg-cover bg-center bg-no-repeat relative border-t-2 border-white`}>
                    <section className=' bg-black bg-opacity-80 text-white text-base w-relative px-3 py-4 flex flex-col gap-5'>
                        <h1 className=' font-semibold text-2xl text-center'>Contact Us</h1>
                        <main className=' italic font-normal capitalize space-y-2 w-full'>
                        </main>
                    <aside className=" space-y-3">
                        <section className=" flex gap-5">
                            <p className=" font-semibold text-xl f">Socials:</p>
                            <aside className="flex items-center font-semibold gap-3 text-xl">
                                <span><a href="https://www.instagram.com/longmenafr/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><FaInstagram/></a></span>
                                <span><a href="https://wa.link/jf3ch6"><FaWhatsapp/></a></span>
                            </aside>
                        </section>
                        <section className=" flex gap-5 items-center">
                            <p className=" text-xl font-semibold">Phone:</p>
                            <aside className=" border-b-2 px-2 border-white py-1 w-fit  text-lg font-semibold flex items-center gap-2">
                                <span>Place a Call</span> 
                                <span><a href=""><FaPhoneVolume/></a></span>
                            </aside>
                        </section>
                        <section className=" flex gap-5 items-center">
                            <p className=" text-xl font-semibold">Email:</p>
                            <aside className=" border-b-2 px-2 border-white py-1 w-fit text-lg font-semibold flex items-center gap-2">
                                {/* <a h className=" capitalize font-semibold">Send Us A direct mail</a>  */}
                                <a href="mailto:Okaforlotanna@gmail.com" className="flex items-center gap-2">Send Us A direct mail<span><HiOutlineMail/></span></a>                                
                            </aside>
                        </section>
                    </aside><br />
                </section>
            </div>
            </div>
        </React.Fragment>
    )
}
export default Main
