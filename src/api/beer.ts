import { endpoints } from '@Config';
import { IBeer } from '@Types/beer';

// fetchRandomBeer
export type FetchRandomBeerResponse = IBeer;

export const fetchRandomBeer = async (): Promise<FetchRandomBeerResponse> => {
  const response = await fetch(endpoints.beer.random);
  const json = await response.json();
  return json[0];
};
