import React from 'react';
import PropTypes from 'prop-types';
import '../StyleZ.css';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };

  updateLikes = () => {
    this.props.updateLikes(this.props.blog);
  };

  deleteBlog = () => {
    this.props.deleteBlog(this.props.blog);
  };

  showDeleteButtonIfCreator = (blog, user) => {
    if (blog.user !== undefined) {
      if (blog.user.username === user.username) {
        return (
          <div>
            <button className="delete-button" type="button" onClick={this.deleteBlog}>
              delete
            </button>
          </div>
        );
      }
    } else {
      return (
        <div>
          <button className="delete-button" type="button" onClick={this.deleteBlog}>
            delete
          </button>
        </div>
      );
    }
  };

  render() {
    const showWhenVisible = { display: this.state.visible ? '' : 'none' };

    return (
      <div className="blog">
        <h4 className="blog-title" onClick={this.toggleVisibility}>
          {this.props.blog.title}
        </h4>
        <span style={showWhenVisible}>
          <div>
            <div>{this.props.blog.author}</div>
            <div>{this.props.blog.url}</div>
            <div>
              {this.props.blog.likes} likes{' '}
              <button type="button" onClick={this.updateLikes}>
                like
              </button>
            </div>
            {this.props.blog.user && <div> added by {this.props.blog.user.username} </div>}
            {this.showDeleteButtonIfCreator(this.props.blog, this.props.user)}
          </div>
        </span>
      </div>
    );
  }
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default Blog;
