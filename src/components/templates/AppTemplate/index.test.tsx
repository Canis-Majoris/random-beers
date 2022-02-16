import { mount } from 'enzyme';
import AppTemplate from '.';

test('renders AppTemplate component correctly', () => {
  const children = <p>test page content</p>;
  const wrapper = mount(<AppTemplate>{children}</AppTemplate>);

  expect(wrapper.contains(children)).toBe(true);
  expect(wrapper.find('.app-template container')).toBeTruthy();
});
