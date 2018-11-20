import React from 'react';
import Blog from './components/Blog';
import Notification from './components/Notification';
import blogService from './services/blogs';
import loginService from './services/login';
import BlogForm from './components/BlogForm';
import './StyleZ.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      username: '',
      password: '',
      user: null,
      error: null
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

  updateBlogs() {
    blogService.getAll().then(blogs => this.setState({ blogs }));
  }

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
      }, 5000);
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

  render() {
    const loginForm = () => {
      return (
        <div>
          <h2>Log in to application</h2>

          <form onSubmit={this.login}>
            <div>
              username:
              <input type="text" name="username" value={this.state.username} onChange={this.handleFieldChange} />
            </div>
            <div>
              password:
              <input type="password" name="password" value={this.state.password} onChange={this.handleFieldChange} />
            </div>
            <button className="login-button" type="submit">
              login{' '}
            </button>
          </form>
        </div>
      );
    };

    const blogForm = () => {
      return (
        <div>
          <div className="login-second-title">
            <div>{this.state.user.name} logged in</div>
            <button className="logout-button" type="button" onClick={this.logout}>
              logout
            </button>
          </div>{' '}
          <BlogForm updateBlogs={this.updateBlogs.bind(this)} />
          {this.state.blogs.map(blog => <Blog key={blog._id} blog={blog} />)}
        </div>
      );
    };

    return (
      <div>
        <h2 className="h2">blogs</h2>

        <Notification message={this.state.error} />

        {this.state.user === null ? loginForm() : <div>{blogForm()}</div>}
      </div>
    );
  }
}

export default App;
