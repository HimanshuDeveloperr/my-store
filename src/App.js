

import './App.css';
import AddMedicine from './Components/AddMedicine';
import MedicineList from './Components/ul/MedicineList';
import { NewMedContextProvider } from './Context/NewMedContext';


function App() {
  return (
    <NewMedContextProvider>

    <div className="App">
    <AddMedicine></AddMedicine>
    <MedicineList></MedicineList>
    
    </div>
    </NewMedContextProvider>
  );
}

export default App;
