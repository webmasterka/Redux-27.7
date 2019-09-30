import React from 'react';
import './App.css';
import CommentsListContainer from "./CommentsListContainer";
import AddCommentContainer from './AddCommentContainer';

const App = () => {
  return (
    <div className="App">
      Tu będzie lista komentarzy!
      <AddCommentContainer />
      <CommentsListContainer />
    </div>
  );
};

export default App;