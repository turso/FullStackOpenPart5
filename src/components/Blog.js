import React from 'react';
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
    // this.toggleVisibility();
  };

  render() {
    // console.log('YKS BLOGI', this.props.blog);
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
          </div>
        </span>
      </div>
    );
  }
}

export default Blog;
