import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateBookInfo, addBookInfo, deleteBook, selectBookList
} from '../redux/slice';
import { Book } from './Book.component';
import { Popup } from './Popup.component';

export const Bookstore = () => {
  const bookList = useSelector(selectBookList);
  const dispatch = useDispatch()

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [currentBook, setCurrentBook] = useState(undefined);
  const handleAddButtonClick = ()=>{
    setCurrentBook(undefined);
    setIsNew(true);
    setIsPopupVisible(true);
  }
  const addMethod = (book) => {
    dispatch(addBookInfo(book));
  }

  const updateMethod = (book) => {
    dispatch(updateBookInfo(book));
  }

  const deleteMethod = (book) => {
    dispatch(deleteBook(book));
  }

  const openPopupForUpdate = (book) => {
    setCurrentBook(book);
    setIsNew(false)
    setIsPopupVisible(true);
  }
  return (
    <div>
        <button onClick={handleAddButtonClick}>Add Book</button>
        {isPopupVisible && <Popup isNew={isNew} book = {currentBook} setCurrentBook={setCurrentBook} add={addMethod} update={updateMethod} close={()=> setIsPopupVisible(false)}/>}
        {bookList.length>0 && bookList.map((book, i) => <Book key={i} content={book} update={openPopupForUpdate} delete={deleteMethod}/>)}    
    </div>
  );
}
