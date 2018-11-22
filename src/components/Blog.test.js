import React from 'react';
import { shallow } from 'enzyme';
import Blog from './Blog';

describe('<Blog />', () => {
  let blogComponent;
  let blog;
  let user;
  let onClickFunc;

  beforeEach(() => {
    blog = {
      title: 'test',
      author: 'test-author',
      url: 'www.highwayToHell.com',
      likes: 666,
      user: {
        id: 1,
        username: 'test-user',
        name: 'test-name',
        adult: true
      }
    };

    user = {
      id: 1,
      username: 'test-user',
      name: 'test-name',
      adult: true
    };

    onClickFunc = jest.fn();

    blogComponent = shallow(<Blog blog={blog} user={user} onClick={onClickFunc} />);
  });

  it('renders only title in the beginning', () => {
    const div = blogComponent.find('.blog-title');
    expect(div.text()).toContain(blog.title);
  });

  it('after clicking name the details are displayed', () => {
    const button = blogComponent.find('.blog-title');
    button.simulate('click');

    const contentDiv = blogComponent.find('.blog-details');
    expect(contentDiv.text()).toContain(blog.author);
    expect(contentDiv.text()).toContain(blog.url);
    expect(contentDiv.text()).toContain(blog.likes);
  });
});
