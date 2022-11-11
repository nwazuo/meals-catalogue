import { Box } from '@chakra-ui/react';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <Box bg="brand.300" minH="100vh" w="100vw" py="100px">
      <Box maxW="1000px" mx="auto" px="20px">
        <Header />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
