import {
  Badge,
  Box,
  Select,
  SimpleGrid,
  Text,
  Flex,
  Button,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import { useRef } from 'react';
import useMealStore from '../stores/meal';

const FilterItem = ({ name: title, param, values }) => {
  const setFilter = useMealStore((state) => state.setFilter);
  const clearFilters = useMealStore((state) => state.clearFilters);
  const activeFilter = useMealStore((state) => state.activeFilter);
  const setActiveFilter = useMealStore((state) => state.setActiveFilter);
  const selectRef = useRef(null);
  const isActiveFilter = activeFilter === param;

  const handleChange = (e) => {
    const value = e.target.value;
    setFilter(param, value);
    setActiveFilter(param);
  };

  // const handleClearFilter = () => {
  //   clearFilters();
  // };

  return (
    <Box>
      <Flex justifyContent="space-between">
        <Text textTransform="capitalize" fontWeight="bold">
          {title}
        </Text>
        <Button
          variant="ghost"
          color="brand.300"
          size="sm"
          onClick={clearFilters}
          visibility={!isActiveFilter && 'hidden'}
        >
          Clear
        </Button>
      </Flex>
      <Select
        ref={selectRef}
        defaultValue=""
        onChange={handleChange}
        mt={2}
        borderColor={isActiveFilter && 'brand.300'}
      >
        <option selected={!isActiveFilter} hidden value="none">
          Select {title}
        </option>
        {values.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </Select>
    </Box>
  );
};

const FiltersSkeleton = () => {
  return (
    <>
      {Array(2)
        .fill('')
        .map(() => (
          <Box>
            <SkeletonText width="64px" noOfLines={1} />
            <Skeleton height="40px" mt={2} rounded="lg" />
          </Box>
        ))}
    </>
  );
};

const Filter = ({}) => {
  const filters = useMealStore((state) => state.filters);
  const loading = useMealStore((state) => state.loading);

  // TODO: filters skeleton on loading

  return (
    <Box rounded="lg" bgColor="white" shadow="lg" p={10}>
      <Text fontSize="xl" fontWeight="bold" borderBottomWidth="1px">
        Filters
        {/* <Badge colorScheme="purple">2</Badge> */}
      </Text>
      <SimpleGrid columns={2} spacing={6} mt={5}>
        {loading ? (
          <FiltersSkeleton />
        ) : (
          filters.map((filter) => <FilterItem key={filter.param} {...filter} />)
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Filter;
