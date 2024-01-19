import React from 'react';

export const Book = (props) => {
    const book = props.content
    return (
      <div>
          <ul>
            <li>Name: {book.name}</li>
            <li>Price: {book.price}</li>
            <li>Category: {book.category}</li>
            <li>Description: {book.description}</li>
          </ul> 
          <button onClick={()=> props.update(book)}>update</button>
          <button onClick={()=> props.delete(book)}>delete</button>
      </div>
    );
  }
  