import '@testing-library/jest-dom';
import { prettyDOM, render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { server } from '@Mocks/beer/server';
import { getBeerMock } from '@Mocks/beer/db';
import BeerGrid from '.';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders BeerGrid component correctly', async () => {
  const queryClient = new QueryClient();
  const { container } = render(
    <QueryClientProvider client={queryClient}>
      <BeerGrid number={50} />
    </QueryClientProvider>
  );
  const beerMock = getBeerMock();
  const beerCards = await screen.findAllByText(beerMock.name, { exact: false });

  expect(beerCards.length).toEqual(50);
  expect(prettyDOM(container)).toMatchSnapshot();
});
