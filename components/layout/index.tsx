import {useContext} from 'react';
import Sidebar from "../sidebar"
import Header from "../header";
import { SidebarContext } from "@/context/sidebarContext";


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
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
}