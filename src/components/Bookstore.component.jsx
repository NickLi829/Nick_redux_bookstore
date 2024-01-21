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
  
  const handleDownloadBooksAsCSV = () => {
    if (bookList.length === 0) {
      alert('No books to download');
      return;
    }
    const books = bookList;
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(books[0]);
    let csv = books.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    csv = csv.join('\r\n');
    const csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);
    const link = document.createElement('a');
    link.setAttribute('href', csvData);
    link.setAttribute('download', 'books.csv');
    link.click();
  }

  return (
    <div>
        <button onClick={handleAddButtonClick}>Add Book</button>
        <button onClick={handleDownloadBooksAsCSV}>Download Books as CSV</button>
        {isPopupVisible && <Popup isNew={isNew} book = {currentBook} setCurrentBook={setCurrentBook} add={addMethod} update={updateMethod} close={()=> setIsPopupVisible(false)}/>}
        {bookList.length>0 && bookList.map((book, i) => <Book key={i} content={book} update={openPopupForUpdate} delete={deleteMethod}/>)}    
    </div>
  );
}
