import { Text, Box, GridItem, SimpleGrid } from '@chakra-ui/react';
import useMealStore from '../stores/meal';
import shallow from 'zustand/shallow';
import { useEffect } from 'react';
import Card from '../components/card';
import CardSkeleton from '../components/cardSkeleton';
import Filter from '../components/filter';

const getMealsSkeleton = () =>
  Array(3)
    .fill('')
    .map(() => <CardSkeleton />);

const Home = () => {
  const { getAllMeals, displayedMeals, loading } = useMealStore(
    (state) => ({
      getAllMeals: state.getAllMeals,
      displayedMeals: state.displayedMeals,
      loading: state.loading,
    }),
    shallow
  );

  useEffect(() => {
    getAllMeals();
  }, []);

  return (
    <Box>
      <Box py={10}>
        <Filter />
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {loading
          ? getMealsSkeleton()
          : displayedMeals.map(({ strMeal, strMealThumb, idMeal }) => (
              <GridItem key={idMeal}>
                <Card
                  imageUrl={strMealThumb}
                  title={strMeal}
                  url={`meal/${idMeal}`}
                />
              </GridItem>
            ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
