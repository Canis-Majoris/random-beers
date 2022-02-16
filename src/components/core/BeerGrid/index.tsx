import { FC } from 'react';
import { useRandomBeersQuery } from '@Queries/beer';
import { Loading, Alert, Empty, BeerCard } from '@Components/core';
import './index.scss';

export interface BeerGridProps {
  number?: number;
}

const BeerGrid: FC<BeerGridProps> = ({ number = 30 }) => {
  const { data, isLoading, isFetching, error } = useRandomBeersQuery(number);

  return (
    <section className='beer-grid'>
      {(isLoading || isFetching) && <Loading />}
      {!(isLoading || isFetching) && error && (
        <Alert variant='error'>{error}</Alert>
      )}
      {!(isLoading || isFetching) && !error && data?.length === 0 && (
        <Empty>No Beers where retrieved :(</Empty>
      )}
      {!isLoading && (
        <div className='row'>
          {data?.map(({ name, id, image_url, tagline }) => (
            <div key={id} className='col-12 col-desktop-6'>
              <BeerCard name={name} tagline={tagline} image={image_url} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BeerGrid;
