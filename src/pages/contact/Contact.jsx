import React from 'react'
import Main from './Main'
import ContactForm from "./ContactForm"

function Contact() {
  return (
    <React.Fragment>
        <div>
            <main>
                <Main/>
            </main>
            <section>
                <ContactForm/>
            </section>
        </div>
    </React.Fragment>
  )
}

export default Contact