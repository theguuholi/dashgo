import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

type SidebarContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarContextData);

interface SidebarDrawerProviderProps {
    children: ReactNode
}
export function SidebarDrawerProvider({ children} : SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {disclosure.onClose()}, [router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure} >
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);