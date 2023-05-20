import { useState } from "react";


type SidebarType = {
    collapsed: boolean;
    collapseSidebar: () => void;
}

export const useSidebar = (value: boolean): SidebarType => {
    const [collapsed, setCollapsed] = useState<boolean>(value);

    const collapseSidebar = () => {
        setCollapsed(!collapsed);
    }

    return { collapsed, collapseSidebar }


}