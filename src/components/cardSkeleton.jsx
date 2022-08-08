import {
  Flex,
  LinkBox,
  LinkOverlay,
  Text,
  Image,
  Skeleton,
  Box,
  SkeletonText,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CardSkeleton = () => {
  return (
    <Box
      as="article"
      height="full"
      rounded="lg"
      overflow="hidden"
      role="group"
      borderWidth="1px"
      bgColor="white"
    >
      <Flex overflow="hidden">
        <Skeleton width={400} height={300} />
      </Flex>
      <Text fontSize="sm" fontWeight="semibold" px="4" py="3">
        <SkeletonText noOfLines={1} />
      </Text>
    </Box>
  );
};

export default CardSkeleton;
