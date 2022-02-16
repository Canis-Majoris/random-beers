import { mount } from 'enzyme';
import Empty from '.';

test('renders Empty component correctly', () => {
  const children = <p>test empty text</p>;
  const wrapper = mount(<Empty>{children}</Empty>);

  expect(wrapper.contains(children)).toBe(true);
  expect(wrapper.find('.empty')).toBeTruthy();
});
