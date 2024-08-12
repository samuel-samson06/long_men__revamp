import React, { useEffect, useState } from 'react'
import balvenie from "../../assets/balvenie.jpg"
import { gettingPartners } from '../admin/firebase'

function Brands() {
    const [partnersList, setPartnersList] = useState([])

    useEffect(()=>{
        const partner_data = async ()=>{
            try{
                const data = await gettingPartners()
                setPartnersList(data)
            }catch(error){
                console.log(error);
            }
        }
        partner_data()
    },[])

  return (
    <React.Fragment>
        <div className=' gap-5 py-5 flex flex-col items-center justify-center md:grid md:grid-cols-2 '>
            {/* <br /> */}
            <div className=' w-fit bg-gray-200 mx-10 my-2 rounded-t-md px-5 py-4'>
                <h1 className=' text-center text-lg font-semibold py-2 px-1'>The Balvenie</h1>
                <section className=' md:flex-row md:items-center md:gap-10 md:justify-center flex flex-col gap-3 items-center text-center'>
                    <main>
                        <img className=' rounded-md w-56' loading='lazy' src={balvenie} alt="Balvenie Whisky"/>
                    </main>
                    <article className=' md:w-60 md:text-lg md:leading-7  text-sm font-semibold'>
                        Savor the rich flavors of our single malt scotch whisky, expertly crafted by William Grant & Sons. Please enjoy in moderation
                    </article>
                </section>
            </div>
            {
                partnersList.length==0?<p></p>:
                partnersList.map((each_partner,index)=>{
                    return(
                        <div key={index+"##$$"} className='  bg-gray-200 mx-10 my-2 rounded-t-md px-5 py-4'>
                            <h1 className=' text-center text-lg font-semibold py-2 px-1'>{each_partner.brand_name}</h1>
                            <section className=' md:flex-row md:items-center md:gap-10 md:justify-center flex flex-col gap-3 items-center text-center'>
                                <main><img className=' w-56' loading='lazy' src={each_partner.imageUrl} alt={each_partner.brand_name}/></main>
                                <article className=' md:w-60 md:text-lg md:leading-7  text-sm font-semibold'>{each_partner.description}</article>
                            </section>
                        </div>
                    )
                })
            }
        </div>
    </React.Fragment>
  )
}

export default Brands

