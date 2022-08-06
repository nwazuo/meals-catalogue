import {
  Box, Button, Flex, Text,
} from '@chakra-ui/react';
import shallow from 'zustand/shallow';
import useCounter from './store/useCounter';

function App() {
  const { count, incrementCount, resetCount } = useCounter(
    (state) => ({
      count: state.count,
      incrementCount: state.incrementCount,
      resetCount: state.resetCount,
    }),
    shallow,
  );

  return (
    <Flex
      justifyContent="center"
      direction="column"
      alignItems="center"
      bg="brand.300"
      w="screen"
      h="100vh"
    >
      <Box color="white" textAlign="center">
        <Text fontSize="2xl" fontWeight="bold">
          Prdm Kitchen
        </Text>
        <Text fontSize="xl">
          How many plates of food would you be eating today?
        </Text>
      </Box>
      <Text fontSize="6xl" fontWeight="bold" color="white">
        {count}
      </Text>
      <Button mb={4} onClick={incrementCount}>
        Increment
      </Button>
      <Button onClick={resetCount}>Reset</Button>
    </Flex>
  );
}

export default App;
