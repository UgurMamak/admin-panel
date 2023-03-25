import { useState } from "react";

export const useSidebar = (value = false) => {
    const [sidebar, setSidebar] = useState(value);

    const collapseSidebar = () => {
        console.log("sidebar", sidebar);
        setSidebar(!sidebar);
    }

    const collapsed = sidebar;

    return [collapsed, collapseSidebar];
}