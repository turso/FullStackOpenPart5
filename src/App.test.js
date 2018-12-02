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
});
