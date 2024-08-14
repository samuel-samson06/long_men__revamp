import React from 'react'
import Main from './Main'
import ContactForm from "./ContactForm"

function Contact() {
  return (
    <React.Fragment>
        <div className=' md:relative md:w-full md:flex md:h-[540px]'>
            <main className='  bg-[url(assets/contact_img.jpg)] bg-cover bg-center bg-no-repeat relative flex flex-col justify-center md:w-3/5 lg:w-1/2  '>
                <Main/>
            </main>
            <section className=' md:bg-gray-100 flex flex-col justify-center md:w-1/2 lg:w-1/2 md:px-10 '>
                <ContactForm/>
            </section>
        </div>
    </React.Fragment>
  )
}

export default Contact
