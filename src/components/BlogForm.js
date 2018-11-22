import React from 'react';
import blogService from '../services/blogs';
import '../StyleZ.css';

class BlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      url: ''
    };
  }

  handleFieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createBlog = async event => {
    event.preventDefault();
    try {
      await blogService.create({ title: this.state.title, author: this.state.author, url: this.state.url });
      const message = `a new blog '${this.state.title}' by ${this.state.author} added`;

      await this.props.updateNotifications(message);
      this.props.refreshBlogList();
      this.setState({ title: '', author: '', url: '' });
      this.props.toggleVisibility();
    } catch (exception) {
      this.props.updateErrors('Unauthorized access');
    }
  };

  render() {
    return (
      <form className="blogForm" onSubmit={this.createBlog}>
        <h2>Create new</h2>
        <div>
          title: <input type="text" name="title" value={this.state.title} onChange={this.handleFieldChange} />
        </div>
        <div>
          author: <input type="text" name="author" value={this.state.author} onChange={this.handleFieldChange} />
        </div>
        <div>
          url: <input type="text" name="url" value={this.state.url} onChange={this.handleFieldChange} />
        </div>
        <div>
          <button type="submit">create</button>
        </div>
      </form>
    );
  }
}

export default BlogForm;
