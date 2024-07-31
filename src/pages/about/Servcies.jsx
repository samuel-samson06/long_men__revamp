import React from 'react'


function Servcies() {
    
    const services = [
        {id:1,heading:'Events',write_up:"Join us for unforgettable evenings of elegance and joy, where candles flicker, jazz melodies fill the air, and laughter flows. Our expertly crafted events seamlessly blend the worlds of cigars, whisky, and art, creating timeless experiences that linger long after the night is over. From gallery openings to private tastings and charity auctions, every moment is a masterpiece."},
        {id:2,heading:'Whisky',write_up:"Indulge in the warmth of our whisky library, where every sip is a journey. Our selection of single malts, bourbons, and rare blends offers a world of flavors to explore - from hints of vanilla and oak to subtle smoky notes. Join us for intimate tastings, where every dram has a tale to tell and every moment is savored."},
        {id:3,heading:'Art',write_up:"Our walls are alive with creativity, showcasing the talents of local artists through vibrant masterpieces, thought-provoking sculptures, and stunning abstracts. Just as cigars evoke emotions and spark contemplation, art ignites the senses and inspires the soul. Immerse yourself in the beauty and passion that surrounds you."},
        {id:4,heading:'Cigars',write_up:"Discover the rich world of cigars in our carefully curated humidor, featuring a diverse range of Nicaraguan, Dominican, and other global treasures. Each cigar has a unique story to tell, with flavors shaped by terroir, tradition, and craftsmanship. Whether you're a seasoned connoisseur or just starting your journey, our collection invites you to explore the subtleties of tobacco and uncover new favorites."}
    ]

    return (
    <React.Fragment>
        <div className=' border-b-[3px] border-black flex flex-col gap-2'>
            {
                services.map((service)=>{
                    return(
                        <section className=' bg-gray-200 px-2 py-3 rounded-md  mx-2 my-3' key={"#"+service.id+"#"}>
                            <header><span className=' text-lg font-serif '>{service.id}.)</span>&nbsp;&nbsp;<span className=' text-xl font-semibold font-serif'>{service.heading}</span></header>
                            <article className=' italic font-medium capitalize'>{service.write_up}</article>
                        </section>
                    )
                })
            }
        </div>
    </React.Fragment>
  )
}

export default Servcies


// Here are the rephrased versions:

// 1. Cigars:

// "Discover the rich world of cigars in our carefully curated humidor, featuring a diverse range of Nicaraguan, Dominican, and other global treasures. Each cigar has a unique story to tell, with flavors shaped by terroir, tradition, and craftsmanship. Whether you're a seasoned connoisseur or just starting your journey, our collection invites you to explore the subtleties of tobacco and uncover new favorites."

// 1. Whisky:

// "Indulge in the warmth of our whisky library, where every sip is a journey. Our selection of single malts, bourbons, and rare blends offers a world of flavors to explore - from hints of vanilla and oak to subtle smoky notes. Join us for intimate tastings, where every dram has a tale to tell and every moment is savored."

// 1. Art:

// "Our walls are alive with creativity, showcasing the talents of local artists through vibrant masterpieces, thought-provoking sculptures, and stunning abstracts. Just as cigars evoke emotions and spark contemplation, art ignites the senses and inspires the soul. Immerse yourself in the beauty and passion that surrounds you."

// 1. Events:

// "Join us for unforgettable evenings of elegance and joy, where candles flicker, jazz melodies fill the air, and laughter flows. Our expertly crafted events seamlessly blend the worlds of cigars, whisky, and art, creating timeless experiences that linger long after the night is over. From gallery openings to private tastings and charity auctions, every moment is a masterpiece."
