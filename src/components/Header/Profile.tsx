import { Flex, Avatar, Text, Box } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo Oliveira</Text>
          <Text color="gray.300" fontSize="small">
            Gustavo@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gustavo Oliveira"
        src="https://avatars1.githubusercontent.com/u/12762300?v=4"
      />
    </Flex>
  );
}
