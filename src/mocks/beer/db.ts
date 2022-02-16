import { IBeer } from '@Types/beer';
import { getRandomDate } from '@Utils/date';

// Create mock beer response
export const getBeerMock = (): IBeer => ({
  id: Math.floor(Math.random() * 100000000),
  name: 'Test Beer',
  tagline: 'Beer tagline text',
  image_url:
    'https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_9,y_0/v1617716394/shape/mentalfloss/643219-gettyimages-1248993201.jpg?itok=NRWUukt9',
  first_brewed: getRandomDate(new Date(1800, 0, 1), new Date()).toString(),
});
