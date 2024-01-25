import './App.css';
import AddItemForm from './Component/AddItemForm';
import StorContextProvider from './Store/storContextProvider';
import Store from './Component/Store';
import Cart from './Component/Cart';

function App() {

  return (
    <StorContextProvider>
      <AddItemForm></AddItemForm>
      <Store></Store>
      <p></p>
      <Cart></Cart>
    </StorContextProvider>
    
  );
}

export default App;
