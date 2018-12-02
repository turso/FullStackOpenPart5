import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Blog from './components/Blog';
import LoginForm from './components/LoginForm';
jest.mock('./services/blogs');
import blogService from './services/blogs';

describe('<App />', () => {
  let app;

  describe('when user is not logged', () => {
    beforeEach(() => {
      app = mount(<App />);
    });

    it('only login form is rendered', () => {
      app.update();
      const loginFormComponent = app.find(LoginForm);
      expect(loginFormComponent.length).toEqual(1);
    });
    it('no blogs are rendered', () => {
      app.update();
      const blogComponents = app.find(Blog);
      expect(blogComponents.length).toEqual(0);
    });
  });

  describe('when user is logged', () => {
    beforeEach(() => {
      const user = {
        username: 'mrMusckle',
        token: '1231231214',
        name: 'bloggaajaM'
      };

      localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
      app = mount(<App />);
    });

    it('all blogs are rendered', () => {
      app.update();
      const blogComponents = app.find(Blog);
      expect(blogComponents.length).toEqual(blogService.blogs.length);
    });
    it('no loginform is rendered', () => {
      app.update();
      const loginFormComponent = app.find(LoginForm);
      expect(loginFormComponent.length).toEqual(0);
    });
  });
});
