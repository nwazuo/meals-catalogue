import {
  Text,
  Box,
  Image,
  Button,
  Flex,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  VStack,
  HStack,
} from '@chakra-ui/react';
import useMealStore from '../stores/meal';
import shallow from 'zustand/shallow';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons';

function mapIngredientsToMeasure(mealData) {
  const result = [];

  for (let key of Object.keys(mealData)) {
    if (key.includes('strIngredient') && mealData[key]) {
      const ingredient = key;
      const ingredientIndex = key.substring('strIngredient'.length); // get ingredient index from chars after 'strIngredient'
      const matchingMeasure = `strMeasure${ingredientIndex}`;
      result.push([mealData[ingredient], mealData[matchingMeasure]]);
    }
  }

  return result;
}

const Meal = () => {
  const { mealId } = useParams();
  const { getSingleMeal, displayedSingleMeal, loading, error } = useMealStore(
    (state) => ({
      getSingleMeal: state.getSingleMeal,
      displayedSingleMeal: state.displayedSingleMeal,
      loading: state.loading,
      error: state.error,
    }),
    shallow
  );
  console.log('loading...', loading);

  useEffect(() => {
    getSingleMeal(mealId);
  }, [mealId]);

  return (
    <Box rounded="lg" bgColor="white" shadow="lg" p={10} mt={10}>
      <Button
        as={Link}
        to="/"
        variant="outline"
        color="brand.300"
        borderColor="brand.300"
        leftIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
      {loading || !displayedSingleMeal ? (
        'loading...'
      ) : (
        <Box mt={5} mx="auto" maxWidth="600px" textAlign="center">
          <Image
            src={displayedSingleMeal.strMealThumb}
            w={600}
            height={600}
            rounded="lg"
            display="block"
            mx="auto"
          />
          <Box textAlign="left">
            <Text fontSize="4xl" fontWeight="bold" as="h1">
              {displayedSingleMeal.strMeal}
            </Text>
            <Box
              borderTopWidth="1px"
              borderBottomWidth="1px"
              py={4}
              mt={5}
              fontSize="xl"
            >
              <Flex>
                <Text fontWeight="bold">Category: </Text>
                <Text pl={2}>{displayedSingleMeal.strCategory}</Text>
              </Flex>
              <Flex>
                <Text fontWeight="bold">Area: </Text>
                <Text pl={2}>{displayedSingleMeal.strArea}</Text>
              </Flex>
            </Box>
            <Box mt={5}>
              <Text fontSize="3xl" as="h2" fontWeight="bold">
                Ingredients
              </Text>
              <TableContainer border="1px" rounded="lg" mt={5}>
                <Table variant="striped">
                  <Thead>
                    <Tr>
                      <Th>Ingredient</Th>
                      <Th>Measure</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {mapIngredientsToMeasure(displayedSingleMeal).map(
                      ([ingredient, measure]) => (
                        <Tr>
                          <Td>{ingredient}</Td>
                          <Td>{measure}</Td>
                        </Tr>
                      )
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box mt={5}>
              <Text fontSize="3xl" as="h2" fontWeight="bold">
                How we made it
              </Text>
              <VStack spacing={'12px'} mt={3}>
                {displayedSingleMeal.strInstructions
                  .split('\r\n')
                  .map((line) => (
                    <Text w="100%">{line}</Text>
                  ))}
              </VStack>
            </Box>
            <HStack mt={10} pt={5} borderTopWidth="1px" spacing="32px">
              <Button
                as="a"
                target="_blank"
                variant="link"
                rightIcon={<ExternalLinkIcon />}
                href={displayedSingleMeal.strSource}
              >
                Source
              </Button>
              <Button
                as="a"
                target="_blank"
                variant="link"
                rightIcon={<ExternalLinkIcon />}
                href={displayedSingleMeal.strYoutube}
              >
                Youtube
              </Button>
            </HStack>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Meal;
