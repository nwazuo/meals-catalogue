import http from './http';

const alphabets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export async function fetchAllMeals() {
  /*
   * Get all meals by making a get request for each alphabet
   *
   * Ideally, an endpoint should return all the data but this
   * api doesn't make such provision
   */
  const requests = [];

  alphabets.forEach((alphabet) => {
    requests.push(http.get(`/search.php?f=${alphabet}`));
  });

  return Promise.all(requests);
}
