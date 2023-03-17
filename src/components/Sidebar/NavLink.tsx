import { Stack, Icon, Text, Link, LinkProps as ChakraUiLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraUiLinkProps{
    icon: ElementType;
    children: string;
}
export function NavLink({icon, children, ...rest} : NavLinkProps){
    return(
        <Link display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="22" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Link>
    );
}