import create from 'zustand';
import { fetchAllMeals } from '../services/mealHttp';

// TODO: write unit test
function getFilterValuesForParam(param, arrayOfObjects) {
  const values = arrayOfObjects.map((item) => item[param]);
  const dedupedValues = new Set(values); // remove duplicates

  return Array.from(dedupedValues);
}

const useMealStore = create((set, get) => ({
  loading: false,
  error: false,
  setLoading: (val) => set({ loading: val }),
  setError: (val) => set({ error: val }),

  displayedMeals: [],

  allMeals: [],
  getAllMeals: async () => {
    set({ error: false, loading: true });
    try {
      const result = await fetchAllMeals(); // this is a bit of a leaky abstraction

      // reduce result to a single array of all meals
      const allMeals = result.reduce((accumulator, current) => {
        const nullSafeMeals = current.data.meals || []; // prevent error on null meals property

        return [...accumulator, ...nullSafeMeals];
      }, []);

      const initFilters = [
        {
          name: 'category',
          param: 'strCategory',
          values: [],
        },
        {
          name: 'area',
          param: 'strArea',
          values: [],
        },
      ];

      initFilters.forEach((filter, i) => {
        // get all values for filter param/key from all meals server data
        const filterValues = getFilterValuesForParam(filter.param, allMeals);

        initFilters[i].values = filterValues;
      });

      set({
        loading: false,
        allMeals,
        displayedMeals: allMeals,
        filters: initFilters,
      });
    } catch (e) {
      set({ error: true, loading: false });
    }
  },

  filters: [],
  activeFilter: '',
  setActiveFilter: (param) => {
    set({ activeFilter: param });
  },
  setFilter: (param, value) => {
    const filtered = get().allMeals.filter((meal) => meal[param] === value);

    console.log('filtered => ', filtered);

    set({ displayedMeals: filtered });
  },
  clearFilters: () => {
    set({ activeFilter: '', displayedMeals: get().allMeals });
  },
}));

export default useMealStore;
