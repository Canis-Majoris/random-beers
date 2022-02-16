import { mount } from 'enzyme';
import Footer from '.';

test('renders Footer component correctly', () => {
  const wrapper = mount(<Footer />);
  const heading = <h4>footer</h4>;

  expect(wrapper.contains(heading)).toBe(true);
  expect(wrapper.find('.footer')).toBeTruthy();
});
