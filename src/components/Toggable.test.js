import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Toggable from './Toggable';

describe('<Togglable />', () => {
  let toggableComponent;

  beforeEach(() => {
    toggableComponent = shallow(
      <Toggable buttonLabel="show...">
        <div className="testDiv" />
      </Toggable>
    );
  });

  it('renders its children', () => {
    expect(toggableComponent.contains(<div className="testDiv" />)).toEqual(true);
  });

  it('at start the children are not displayed', () => {
    const div = toggableComponent.find('.toggableContent');
    expect(div.getElement().props.style).toEqual({ display: 'none' });
  });

  it('after clicking the button, children are displayed', () => {
    const button = toggableComponent.find('button');

    button.at(0).simulate('click');
    const div = toggableComponent.find('.toggableContent');
    expect(div.getElement().props.style).toEqual({ display: '' });
  });
});
