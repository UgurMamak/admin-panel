import { createContext } from "react";


export type SidebarContextType = {
    collapsed:boolean;
    collapseSidebar: ()=> void;
};

export const SidebarContext = createContext<SidebarContextType>({
    collapsed:false,
    collapseSidebar:()=>{}
});


