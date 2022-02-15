import { useQuery } from 'react-query';
import { fetchRandomBeer, FetchRandomBeerResponse } from '@Api/beer';
import { IBeer } from '@Types/beer';

/**
 * Generates unique beer list
 *
 * @param {number} length The length of desired list.
 * @return {list} The list of random unique beers.
 */

export const getUniqueBeersList = async (length: number) => {
  const uniqueBeersList: IBeer[] = [];

  /**
   * Recursivly fetches beers until the desired amount is unique
   *
   * @param {number} n The remaining unique beers to fetch.
   */
  const fetchBeersUntillUniqueRec = async (n: number) => {
    if (n === 0) return;
    const queriesListResults: FetchRandomBeerResponse[] = await Promise.all(
      [...Array(n)].map(fetchRandomBeer)
    );

    for (let beer of queriesListResults)
      uniqueBeersList.findIndex(({ id }) => id === beer.id) < 0 &&
        uniqueBeersList.push(beer);

    await fetchBeersUntillUniqueRec(length - uniqueBeersList.length);
  };

  try {
    await fetchBeersUntillUniqueRec(length);
  } catch (err) {
    throw new Error(err as string);
  }

  return uniqueBeersList.sort((a, b) =>
    a.first_brewed.localeCompare(b.first_brewed)
  );
};

/**
 * Custom react query for random beers
 *
 * @param {number} length The length of desired list.
 * @param {function} length The length of desired list.
 */
const useRandomBeersQuery = (length: number, select?: any) =>
  useQuery<IBeer[]>(['beers', 'random'], () => getUniqueBeersList(length), {
    select,
    enabled: length > 0,
    retry: false,
    staleTime: 10000,
  });

export default useRandomBeersQuery;
