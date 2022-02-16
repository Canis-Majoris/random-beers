import { mount } from 'enzyme';
import BeerCard from '.';

const props = {
  name: 'Test Beer',
  tagline: 'Beer tagline text',
  image:
    'https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_9,y_0/v1617716394/shape/mentalfloss/643219-gettyimages-1248993201.jpg?itok=NRWUukt9',
};

test('renders BeerCard component correctly', () => {
  const wrapper = mount(<BeerCard {...props} />);
  const image = wrapper.find('img');
  const title = wrapper.find('h4');
  const description = wrapper.find('p');

  expect(wrapper.find('.beer-grid-item')).toBeTruthy();
  expect(image.exists()).toBeTruthy();
  expect(image.prop('src')).toEqual(props.image);
  expect(image.prop('alt')).toEqual(props.name);
  expect(title.text()).toEqual(props.name);
  expect(description.text()).toEqual(props.tagline);
});
