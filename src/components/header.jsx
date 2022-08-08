import { Text, Box } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box py={10} borderBottomWidth="1px" borderColor="white" color="white">
      <Text fontSize="4xl" py={0} fontWeight="bold">
        Paradime Kitchen
      </Text>
      <Text>
        Tasty and healthy meals, powered by frictionless collaboration
      </Text>
    </Box>
  );
};

export default Header;
