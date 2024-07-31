import React from 'react'
import balvenie from "../../assets/balvenie.jpg"

function Brands() {
  return (
    <React.Fragment>
        <div className=' flex flex-col gap-3 items-center bg-gray-200 rounded-t-md px-2 py-4'>
            <section className=' text-center'>
                <h1 className=' text-lg font-semibold py-2'>Ambassador of The Balvenie</h1>
                <article className=' text-sm font-semibold'>
                    Savor the rich flavors of our single malt scotch whisky, expertly crafted by William Grant & Sons. Please enjoy in moderation
                </article>
            </section>
            <main>
                <img className=' w-56' src={balvenie} alt="Balvenie Whisky"/>
            </main>
        </div>
    </React.Fragment>
  )
}

export default Brands

// Here are some rephrased or expatiated versions:

// - "."
// - "Indulge in the smooth, complex taste of our single malt scotch whisky, brought to you by the renowned William Grant & Sons. Remember to always drink responsibly."
// - "Experience the art of fine whisky-making with our single malt scotch, carefully produced by William Grant & Sons. Enjoy with respect and responsibility."
// - "Discover the depth and character of our single malt scotch whisky, proudly presented by William Grant & Sons. Please drink responsibly and appreciate the craftsmanship."
// - "Raise a glass to the exceptional quality of our single malt scotch whisky, courtesy of William Grant & Sons. Enjoy responsibly and savor the moment."

// These rephrased versions maintain the core message while using slightly different wording and tone to convey a sense of sophistication, appreciation, and responsibility.