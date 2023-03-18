import {
  Icon,
  Text,
  Link as ChakraLink,
  LinkProps as ChakraUiLinkProps,
} from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";

interface NavLinkProps extends ChakraUiLinkProps {
  icon: ElementType;
  children: string;
  href: string
}
export function NavLink({ href, icon, children, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="22" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}
