import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Context } from '../../Context/Context'

function Navigation() {
    const {toggleNavBar, setToggleNavBar}= useContext(Context)
    
    const triggerNavBarFunction= function(){
        setToggleNavBar(!toggleNavBar)
    }

    return (
    <React.Fragment>
        <div onClick={triggerNavBarFunction} className=' flex flex-col gap-1 p-0.5'>
            <motion.section variants={{
                initial:{
                    rotate:0,
                    x:0
                },
                final:{
                    rotate:0,
                    x:0
                },
                animate:{
                    rotate:45,
                    y:1
                }
            }} initial="initial" animate={toggleNavBar?"animate":"final"} className=' text-white w-6 rounded-md h-[2px] bg-white'></motion.section>
            <motion.section variants={{
                initial:{
                    rotate:0
                },
                final:{
                    rotate:0
                },
                animate:{
                    rotate:-45,
                    y:-4
                }
            }} initial="initial" animate={toggleNavBar?"animate":"final"} className=' text-white w-6 rounded-md h-[2px] bg-white'></motion.section>
        </div>
    </React.Fragment>
  )
}

export default Navigation