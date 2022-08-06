import { Box, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Page404 = () => {
  return (
    <Box color="white">
      <Text fontSize="6xl">You seem lost</Text>
      <Link as={RouterLink} mt={10} to="/">
        Back to home
      </Link>
    </Box>
  );
};

export default Page404;
