import { mount } from 'enzyme';
import Header from '.';

test('renders Header component correctly', () => {
  const wrapper = mount(<Header />);
  const heading = <h4>header</h4>;

  expect(wrapper.contains(heading)).toBe(true);
  expect(wrapper.find('.header')).toBeTruthy();
});
