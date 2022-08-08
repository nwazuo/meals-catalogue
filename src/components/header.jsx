import { Text, Box, Flex, HStack } from '@chakra-ui/react';
import logo from '../assets/paradimemeals.svg';

const Header = () => {
  return (
    <Box
      pb={10}
      pt={5}
      borderBottomWidth="1px"
      borderColor="white"
      color="white"
    >
      <HStack spacing="12px">
        <img src={logo} width={64} />
        <Text fontSize="4xl" py={0} fontWeight="bold">
          Prdm Kitchen
        </Text>
      </HStack>
      <Text mt={2}>
        Tasty and healthy meals, powered by frictionless collaboration
      </Text>
    </Box>
  );
};

export default Header;
