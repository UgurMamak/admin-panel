import React,{useContext} from 'react';
import Sidebar from "../sidebar"
import Header from "../header";
import { SidebarContext } from "@/context/sidebarContext";

interface IProps {
  children:React.ReactNode
}

const  Layout:React.FC<IProps> = ({children})=> {
  const { collapsed } = useContext(SidebarContext);
  return (
    <>
        <Header/>
        <Sidebar/>
        <main className={`container layoutWrap ${collapsed ? ' collapsed' : ''}`}>
          {children}
          </main>
    </>
  )
};

export default Layout;