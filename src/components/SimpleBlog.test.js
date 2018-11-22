import React from 'react';
import { shallow } from 'enzyme';
import SimpleBlog from './SimpleBlog';

describe('<SimpleBlog />', () => {
  let simpleBlogComponent;
  let onClickFunc;
  let blog;

  beforeEach(() => {
    blog = {
      title: 'test',
      author: 'test-author',
      likes: 666
    };
    onClickFunc = jest.fn();
    simpleBlogComponent = shallow(<SimpleBlog blog={blog} onClick={onClickFunc} />);
  });

  it('renders title and author', () => {
    const div = simpleBlogComponent.find('.title');
    expect(div.text()).toContain(blog.title);
    expect(div.text()).toContain(blog.author);
  });

  it('renders likes', () => {
    const div = simpleBlogComponent.find('.likes');
    expect(div.text()).toContain(blog.likes);
  });

  it('clicking the button twice will work', () => {
    const button = simpleBlogComponent.find('button');
    button.simulate('click');
    expect(onClickFunc.mock.calls.length).toBe(1);
    button.simulate('click');
    expect(onClickFunc.mock.calls.length).toBe(2);
  });
});
