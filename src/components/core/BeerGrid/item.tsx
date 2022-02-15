import { FC } from 'react';
import Card from '@Components/core/Card';
import './index.scss';

export interface BeerGridItemProps {
  name: string;
  image: string;
  tagline?: string;
}

const BeerGridItem: FC<BeerGridItemProps> = ({ image, name, tagline }) => (
  <Card className='beer-grid-item'>
    <div className='beer-grid-item-image'>
      <img src={image} alt={name} />
    </div>
    <div className='beer-grid-item-info'>
      <h4 className='ellipsis'>{name}</h4>
      <p className='ellipsis'>{tagline}</p>
    </div>
  </Card>
);

export default BeerGridItem;
