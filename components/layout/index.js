import React, { useContext } from 'react'
import Sidebar from '../sidebar';
import Header from '../header';
import { SidebarContext } from 'context/sidebarContext';


export default function Layout({ children }) {
  const { collapsed } = useContext(SidebarContext);

  return (
    <>
      <Sidebar />
      <div className={`container layoutWrap ${
              collapsed ? ' collapsed' : ''
            }`}>
      <Header />
      <main>{children}</main>
      </div>
    </>
  )
}