import { mount } from 'enzyme';
import Alert from '.';

test('renders Alert component correctly', () => {
  const children = <p>test alert text</p>;
  const wrapper = mount(<Alert variant='success'>{children}</Alert>);

  expect(wrapper.contains(children)).toBe(true);
  expect(wrapper.find('.alert.alert-success')).toBeTruthy();
});
