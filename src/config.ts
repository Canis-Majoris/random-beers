import { QueryClient } from 'react-query';

/**
 * setup react query client
 */
export const queryClient = new QueryClient();

export const endpoints = {
  beer: {
    random: 'https://api.punkapi.com/v2/beers/random',
  },
};
