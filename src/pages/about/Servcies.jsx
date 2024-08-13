import React from 'react'


function Servcies() {
    
    const services = [
        {id:1,heading:'Events',write_up:"Join us for unforgettable evenings of elegance and joy, where candles flicker, jazz melodies fill the air, and laughter flows.  From gallery openings to private tastings and charity auctions, every moment is a masterpiece."},
        {id:2,heading:'Whisky',write_up:"Indulge in the warmth of our whisky library, where every sip is a journey. Our selection of single malts, bourbons, and rare blends offers a world of flavors to explore "},
        {id:3,heading:'Art',write_up:"enjoy the talents of local artists through vibrant masterpieces and stunning abstracts. Just as cigars evoke emotions and spark contemplation, art ignites the senses and inspires the soul. Immerse yourself in the beauty and passion that surrounds you."},
        {id:4,heading:'Cigars',write_up:"Discover the rich world of cigars in our carefully curated humidor, featuring a diverse range of Nicaraguan, Dominican, and other global treasures. Each cigar has a unique story to tell, with flavors shaped by terroir, tradition, and craftsmanship. "}
    ]

    return (
    <React.Fragment>
        <div className=' border-b-[3px] border-black md:py-2 sm:px-5 sm:py-3 md:grid md:grid-cols-2 xl:grid-cols-4 flex flex-col gap-2'>
            {
                services.map((service)=>{
                    return(
                        <section className=' bg-gray-200 px-2 py-3 md:px-4 md:py-5 rounded-md  mx-2 my-3' key={"#"+service.id+"#"}>
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
