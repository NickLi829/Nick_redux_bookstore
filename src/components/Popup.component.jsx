import React from 'react';
import uuid from 'react-uuid';

export const Popup = (props) => {
    const book = props.book

    const setName = (name)=>{
        props.setCurrentBook({...book, name: name})
    }

    const setPrice = (price)=>{
        props.setCurrentBook({...book, price: price})
    }

    const setCategory = (category)=>{
        props.setCurrentBook({...book, category: category})
    }

    const setDescription = (description)=>{
        props.setCurrentBook({...book, description: description})
    }

    const handleUpdate = () => {
        props.update(props.book);
        props.close();
    }

    const handleAdd = () => {
        props.add({
            id: uuid(),
            name: book?.name,
            price: book?.price,
            category: book?.category,
            description: book?.description
        });
        props.close();
    }
        
    return (
      <div>
          <p>Name</p>
          <input type="text" name ="name" value={book?.name} onChange={(e)=> setName(e.target.value)}/>
          <p>price</p>
          <input type="text" name ="price" value={book?.price} onChange={(e)=> setPrice(e.target.value)}/>
          <p>category</p>
          <input type="text" name ="category" value={book?.category} onChange={(e)=> setCategory(e.target.value)}/>
          <p>description</p>
          <input type="text" name ="description" value={book?.description} onChange={(e)=> setDescription(e.target.value)}/>
          {!props.isNew ? <button onClick={handleUpdate}>update</button> :
                <button onClick={handleAdd}>add</button>}
          <button onClick={props.close}>close</button>
      </div>
    );
  }
  