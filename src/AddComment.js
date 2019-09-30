import React from 'react';
import './AddComment.css';



const AddComment = ({ text, addComment }) =>
    <form>
        <input className="text">{text}</input>
        <button onClick={() => addComment(document.querySelector('.text').value)} type='button'>Dodaj komentarz</button>
    </form>;

export default AddComment;