import { createSlice } from '@reduxjs/toolkit'

export const bookstoreSlice = createSlice({
  name: 'bookStore',
  initialState: {
    bookList: []
  },
  reducers: {
    updateBookInfo: (state, action) => {
        const bookDetails = action.payload;
        state.bookList.forEach(book=>{
            if(book.id === bookDetails.id){
                book.name = bookDetails.name;
                book.price = bookDetails.price;
                book.category = bookDetails.category;
                book.description = bookDetails.description;
            }
        })
    },
    addBookInfo: (state, action) => {
        state.bookList.push(action.payload);
    },
    deleteBook: (state, action) => {
        const bookDetails = action.payload;
        let indexToDelete=-1;
        for(let i=0; i<state.bookList.length; i++){
            const book = state.bookList[i];
            if(book.id === bookDetails.id){
                indexToDelete = i;
                break;
            }
        }
        state.bookList.splice(indexToDelete, 1);
    },
  },
})

export const { updateBookInfo, addBookInfo, deleteBook } = bookstoreSlice.actions


export const selectBookList = (state) => state.bookStore.bookList

export default bookstoreSlice.reducer

