import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({ comments }) => <ol>{comments.map(comment => <Comment key={comment.id} {...comment} />)}</ol>;

export default CommentsList;