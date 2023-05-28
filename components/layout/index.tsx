import React,{useContext} from 'react';
import Sidebar from "../sidebar"
import Header from "../header";
import { SidebarContext } from "@/context/sidebarContext";
import { Layout } from 'antd';


interface IProps {
  children:React.ReactNode
}

const  Layout2:React.FC<IProps> = ({children})=> {
  const { collapsed } = useContext(SidebarContext);
  return (
    <>
    <Layout>
        <Header/>
        <Sidebar/>
        <main className={`container layoutWrap ${collapsed ? ' collapsed' : ''}`}>
          {children}
          </main>
          </Layout>
    </>
  )
};

export default Layout2;