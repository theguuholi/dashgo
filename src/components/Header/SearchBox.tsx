import { Flex, Input } from "@chakra-ui/react";

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.800"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.500"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{
          color: "gray.400",
        }}
      />

      {/* <Icon as={RiSearchLine} fontSize="20" zIndex="999" /> */}
    </Flex>
  );
}
