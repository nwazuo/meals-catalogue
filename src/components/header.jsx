import { Text, Box, Flex, HStack } from '@chakra-ui/react';
import logo from '../assets/prdmmeals.svg';

const Header = () => {
  return (
    <Box
      pb={10}
      pt={0}
      borderBottomWidth="1px"
      borderColor="white"
      color="white"
    >
      <HStack spacing="12px">
        <img src={logo} width={64} />
        <Text fontSize="4xl" py={0} fontWeight="bold">
          Prdm Meals
        </Text>
      </HStack>
      <Text mt={2}>
        Tasty and healthy meals, powered by frictionless collaboration
      </Text>
    </Box>
  );
};

export default Header;
