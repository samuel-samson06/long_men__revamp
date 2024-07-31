import React from 'react'
import { year } from '../../util/date'

function Footer() {
  return (
    <React.Fragment>
        <div>
            <p className='bg-[#131b34] text-white py-3 capitalize font-medium text-xs text-center '>All rights reserved | A longmen co-operation &copy; {year}</p>
        </div>
    </React.Fragment>
  )
}

export default Footer