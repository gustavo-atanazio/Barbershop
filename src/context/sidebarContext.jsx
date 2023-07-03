import { createContext, useState } from "react";

export const SidebarContext = createContext();

export function SidebarProvider({ children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const value = {isOpen, toggle};

    return (
        <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
    )
}