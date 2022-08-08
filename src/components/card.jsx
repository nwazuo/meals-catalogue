import { Flex, LinkBox, LinkOverlay, Text, Image, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Card = ({ imageUrl, title, url }) => {
  return (
    <Link to={url}>
      <Box
        as="article"
        height="full"
        rounded="lg"
        overflow="hidden"
        transition="box-shadow 0.1s ease-out"
        role="group"
        borderWidth="1px"
        _dark={{ bg: 'whiteAlpha.50' }}
        _hover={{ shadow: 'md', cursor: 'pointer', transform: 'scale(1.05)' }}
        transitionDuration={'0.5'}
        transitionProperty="transform"
        bgColor="white"
      >
        <Flex overflow="hidden" bg="gray.100">
          <Image src={imageUrl} width={400} height={300} objectFit="cover" />
        </Flex>
        <Text fontSize="sm" fontWeight="semibold" px="4" py="3">
          {title}
        </Text>
      </Box>
    </Link>
  );
};

export default Card;
