import React from "react"

function ContactForm() {
    return(
        <React.Fragment>
            <br />
            <div>
                <header className=" text-center font-semibold text-lg underline">Send Us A direct Message</header>
                <br />
                <main className=" bg-gray-200 py-3 md:px-5 max-sm:mx-6 px-2 mx-2 rounded-md">
                    <form action="" className=" flex flex-col gap-5 py-1">
                        <input type={"text"} className={` outline-none border-b-[2px] bg-gray-200 placeholder:font-semibold placeholder: border-b-black py-2 px-2 font-medium`} placeholder="Your Name"/>
                        <input type={"tel"} className={` outline-none border-b-[2px] bg-gray-200 placeholder:font-semibold placeholder: border-b-black py-2 px-2 font-medium`} placeholder="Your Phone Number"/>
                        <input type={"email"} className={` outline-none border-b-[2px] bg-gray-200 placeholder:font-semibold placeholder: border-b-black py-2 px-2 font-medium`} placeholder="Your E-mail"/>
                        <textarea rows={1} cols={1} name="" id="" className={` outline-none border-b-[2px] bg-gray-200 placeholder:font-semibold placeholder: border-b-black py-2 px-2 font-medium`} placeholder="Your Message" />
                        <div className=" flex items-center justify-center">
                            <button type="submit" className={" text-lg  bg-[#131b34] py-1 px-2  text-white rounded font-medium "}>Send a Message</button>
                        </div>
                    </form>
                </main>
            </div>
            <br />
        </React.Fragment>
    )
}

export default ContactForm