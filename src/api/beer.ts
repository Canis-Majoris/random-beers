import { endpoints } from '@Config';
import { IBeer } from '@Types/beer';

export type RandomBeerResponse = IBeer;

/**
 * Fetches random beer.
 *
 * @return {Promise<IBeer>} beer promise.
 */
export const fetchRandomBeer = async (): Promise<RandomBeerResponse> => {
  const response = await fetch(endpoints.beer.random);
  const json = await response.json();
  return json[0];
};
