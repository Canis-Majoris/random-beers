import { mount } from 'enzyme';
import Loading from '.';

test('renders Loading component correctly', () => {
  const wrapper = mount(<Loading />);
  
  expect(wrapper.find('.loading')).toBeTruthy();
});
