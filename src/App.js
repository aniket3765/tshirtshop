import './App.css';
import AddItemForm from './Component/AddItemForm';
import StorContextProvider from './Store/storContextProvider';
import Store from './Component/Store';

function App() {

  return (
    <StorContextProvider>
      <AddItemForm></AddItemForm>
      <Store></Store>
    </StorContextProvider>
    
  );
}

export default App;
