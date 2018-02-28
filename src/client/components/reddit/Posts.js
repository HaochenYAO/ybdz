import React from 'react';
import PropTypes from 'prop-types';

const Posts = props => (
  <ul>
    {props.posts.map(post => (
      <li key={post.title}>{post.title}</li>
    ))}
  </ul>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired.isRequired
  })).isRequired
};

export default Posts;
