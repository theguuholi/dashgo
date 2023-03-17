import { Flex, Avatar, Text, Box } from "@chakra-ui/react";

export function Profile(){
    return (
        <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Gustavo Oliveira</Text>
          <Text color="gray.300" fontSize="small">
            Gustavo@gmail.com
          </Text>
        </Box>

        <Avatar size="md" name="Gustavo Oliveira" src="https://avatars1.githubusercontent.com/u/12762300?v=4" />
      </Flex>
    );
}