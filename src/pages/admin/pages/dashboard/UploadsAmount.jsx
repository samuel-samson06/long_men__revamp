import React from 'react'

function UploadsAmount() {
  return (
    <React.Fragment>
        <div className=' flex flex-col gap-4 lg:grid lg:grid-cols-3 '>
            <section className=' lg:py-5 flex bg-gray-200 justify-between py-3 px-4 rounded-md mx-2'>
                <p className=' font-semibold text-lg'>All Files Uploaded</p>
                <p className=' font-semibold text-lg'>0</p>
            </section>
            <section className=' lg:py-5 flex bg-gray-200 justify-between py-3 px-4 rounded-md mx-2'>
                <p className=' font-semibold text-lg'>Events Uploaded</p>
                <p className=' font-semibold text-lg'>0</p>
            </section>
            <section className=' lg:py-5 flex bg-gray-200 justify-between py-3 px-4 rounded-md mx-2'>
                <p className=' font-semibold text-lg'>Images Uploaded</p>
                <p className=' font-semibold text-lg'>0</p>
            </section>
            <br />
        </div>
    </React.Fragment>
  )
}

export default UploadsAmount