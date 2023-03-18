import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav(){
    return (
        <Stack spacing="12" align="flex-start">
        <NavSection title="Geral">
          <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
          <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
        </NavSection>

        <NavSection title="Automacao">
          <NavLink icon={RiInputMethodLine} href="/forms">Formularios</NavLink>
          <NavLink icon={RiGitMergeLine} href="/automation">Automacao</NavLink>
        </NavSection>
      </Stack>
    )
}