import { FC } from 'react';
import { IBeer } from '@Types/beer';
import useRandomBeersQuery from '@Queries/useRandomBeersQuery';
import Loading from '@Components/core/Loading';
import Alert from '@Components/core/Alert';
import Empty from '@Components/core/Empty';
import BeerGridItem from './item';
import './index.scss';

export interface BeerGridProps {
  items?: IBeer[];
  loading?: boolean;
  fetching?: boolean;
  error?: any;
}

const BeerGrid: FC<BeerGridProps> = ({ items, loading, fetching, error }) => {
  return (
    <section className='beer-grid'>
      {(loading || fetching) && <Loading />}
      {!(loading || fetching) && error && (
        <Alert variant='error'>{error?.message}</Alert>
      )}
      {!(loading || fetching) && !error && items?.length === 0 && (
        <Empty>No Beers where retrieved :(</Empty>
      )}
      <div className='row'>
        {items?.map(({ name, id, image_url, tagline }) => (
          <div key={id} className='col-12 col-desktop-6'>
            <BeerGridItem name={name} tagline={tagline} image={image_url} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default () => {
  const { data, isLoading, isFetching, error } = useRandomBeersQuery(30);
  return (
    <BeerGrid
      items={data}
      loading={isLoading}
      fetching={isFetching}
      error={error}
    />
  );
};
