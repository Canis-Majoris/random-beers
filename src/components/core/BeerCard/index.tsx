import { FC } from 'react';
import { Card } from '@Components/core';
import './index.scss';

export interface BeerCardProps {
  name: string;
  image: string;
  tagline?: string;
}

const BeerCard: FC<BeerCardProps> = ({ image, name, tagline }) => (
  <Card className='beer-card'>
    <div className='beer-card-image'>
      <img src={image ?? './images/placeholders/placeholder-beer.png'} alt={name} />
    </div>
    <div className='beer-card-info'>
      <h4 className='ellipsis'>{name}</h4>
      <p className='ellipsis'>{tagline}</p>
    </div>
  </Card>
);

export default BeerCard;
