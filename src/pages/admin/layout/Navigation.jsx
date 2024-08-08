import React from 'react'
import NavigationIcon from './navigations/NavigationIcon'
import NavigationDesktop from './navigations/NavigationDesktop'

function Navigation() {
  return (
    <React.Fragment>
        <div>
            <span><NavigationIcon/></span>
            <span><NavigationDesktop/></span>
        </div>
    </React.Fragment>
  )
}

export default Navigation