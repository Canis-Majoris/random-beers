import { mount } from 'enzyme';
import Card from '.';

test('renders Card component correctly', () => {
  const children = (
    <div className='card-content'>
      <p>test card content</p>
    </div>
  );
  const wrapper = mount(<Card className='custom-card-class'>{children}</Card>);

  expect(wrapper.contains(children)).toBe(true);
  expect(wrapper.find('.custom-card-class')).toBeTruthy();
});
