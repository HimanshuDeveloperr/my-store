

import './App.css';
import AddMedicine from './Components/AddMedicine';
import MedicineList from './Components/ul/MedicineList';
import { CartContextProvider } from './Context/CartContext';
import { NewMedContextProvider } from './Context/NewMedContext';


function App() {
  return (
    <CartContextProvider>

    <NewMedContextProvider>

    <div className="App">
    <AddMedicine></AddMedicine>
    <MedicineList></MedicineList>
    
    </div>
    </NewMedContextProvider>
    </CartContextProvider>
  );
}

export default App;
