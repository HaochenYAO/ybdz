import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

const Posts = props => (
  <ul>
    {props.posts.map(post => (
      <li key={post.get('title')}>{post.get('title')}</li>
    ))}
  </ul>
);

Posts.propTypes = {
  posts: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
    title: PropTypes.string.isRequired.isRequired
  })).isRequired
};

export default Posts;
