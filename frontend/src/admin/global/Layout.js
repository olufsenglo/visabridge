import React from 'react'
import HeaderTop from './HeaderTop';
import SidebarAdm from './Sidebar';

const Layout = (Component) => ({ ...props }) => {	
  return (
    <div>
      {/* <SidebarAdm />
      <HeaderTop /> */}
      <Component {...props} />
    </div>
  )
}

export default Layout
