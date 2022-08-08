import { Text } from '@chakra-ui/react';
import useMealStore from '../stores/meal';
import shallow from 'zustand/shallow';
import { useEffect } from 'react';

const Meal = () => {
  const { getAllMeals } = useMealStore(
    (state) => ({
      getAllMeals: state.getAllMeals,
    }),
    shallow
  );

  useEffect(() => {
    getAllMeals();
  }, []);

  return <Text>Meal Page</Text>;
};

export default Meal;
