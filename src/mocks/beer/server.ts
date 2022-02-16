import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { endpoints } from '@Config';
import { getBeerMock } from './db';

// for node/test environments
export const server = setupServer(
  rest.get(endpoints.beer.random, (req, res, ctx) => {
    return res(ctx.json([getBeerMock()]));
  })
);
