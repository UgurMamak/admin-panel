import React, { useContext } from 'react'
import Sidebar from '../sidebar';
import Header from '../header';
import { SidebarContext } from 'context/sidebarContext';


export default function Layout({ children }) {
  const { collapsed } = useContext(SidebarContext);

  return (
    <>
      <Header />
      <Sidebar />
      <div className={`container layoutWrap ${collapsed ? ' collapsed' : ''
        }`}>

        <main>{children}</main>
      </div>
    </>
  )
}