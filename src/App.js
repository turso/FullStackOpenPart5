import React from 'react';
import Blog from './components/Blog';
import Notification from './components/Notification';
import blogService from './services/blogs';
import loginService from './services/login';
import BlogForm from './components/BlogForm';
import LoginForm from './components/LoginForm';
import Togglable from './components/Toggable';
import './StyleZ.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      blog: '',
      username: '',
      password: '',
      user: null,
      error: null,
      notification: null
    };
  }

  componentDidMount() {
    blogService.getAll().then(blogs => this.setState({ blogs }));

    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      this.setState({ user });
    }
  }

  refreshBlogList() {
    blogService.getAll().then(blogs => this.setState({ blogs }));
  }

  updateNotifications = notification => {
    this.setState({
      notification: notification
    });
    setTimeout(() => {
      this.setState({ notification: null });
    }, 6000);
  };

  updateErrors = error => {
    this.setState({
      error: error
    });
    setTimeout(() => {
      this.setState({ error: null });
    }, 6000);
  };

  login = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      });

      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
      blogService.setToken(user.token);
      this.setState({ username: '', password: '', user });
    } catch (exception) {
      this.setState({
        error: 'wrong username or password'
      });
      setTimeout(() => {
        this.setState({ error: null });
      }, 6000);
    }
  };

  logout = event => {
    event.preventDefault();
    window.localStorage.clear();
    this.setState({ user: null });
  };

  handleFieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateLikes = async blog => {
    console.log(blog);
    const updatedBlog = { ...blog, likes: blog.likes + 1 };

    await blogService.update(blog._id, updatedBlog);
    this.refreshBlogList();
  };

  render() {
    const loginForm = () => (
      <Togglable buttonLabel="login">
        <LoginForm
          visible={this.state.visible}
          username={this.state.username}
          password={this.state.password}
          handleChange={this.handleFieldChange}
          handleSubmit={this.login}
        />
      </Togglable>
    );

    const blogForm = () => {
      return (
        <div>
          <div className="login-second-title">
            <div>{this.state.user.name} logged in</div>
            <button className="logout-button" type="button" onClick={this.logout}>
              logout
            </button>
          </div>{' '}
          <Togglable buttonLabel="create new blog" ref={component => (this.BlogForm = component)}>
            <BlogForm
              refreshBlogList={this.refreshBlogList.bind(this)}
              updateNotifications={this.updateNotifications.bind(this)}
              updateErrors={this.updateErrors.bind(this)}
              toggleVisibility={() => this.BlogForm.toggleVisibility()}
            />
          </Togglable>
          {this.state.blogs.map(blog => <Blog updateLikes={this.updateLikes} key={blog._id} blog={blog} />)}
        </div>
      );
    };

    return (
      <div>
        <h2 className="h2">blogs</h2>

        <Notification error={this.state.error} notification={this.state.notification} />

        {this.state.user === null ? loginForm() : <div>{blogForm()}</div>}
      </div>
    );
  }
}

export default App;
