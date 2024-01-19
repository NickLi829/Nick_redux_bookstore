import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {Bookstore} from './components/Bookstore.component';

function App() {
  return (
    <Provider store={store}>
      <Bookstore/>
    </Provider>
  );
}

export default App;
