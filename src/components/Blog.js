import React from 'react';
import '../StyleZ.css';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    console.log('PAINETTIIN');
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    console.log('YKS BLOGI', this.props.blog);
    return (
      <div className="blog" onClick={this.handleClick}>
        {this.props.blog.title} {this.props.blog.author}
        {this.state.clicked && (
          <div>
            <div>{this.props.blog.url}</div>
            <div>{this.props.blog.likes} likes</div>
            {this.props.blog.user && <div> added by {this.props.blog.user.username} </div>}
          </div>
        )}
      </div>
    );
  }
}

export default Blog;
