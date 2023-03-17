import { Input } from "@/components/Form/Input";
import { Button, Flex, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        background="gray.800"
        borderRadius={8}
        flexDir="column"
        p="8"
      >
        <Stack spacing="4">
         <Input name="email" type="email" label="email" />
         <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
