import React, { useState } from 'react';

const NewMedContext = React.createContext({
  medicines: [],
  addMedicine: (medicine) => {},
  updateQuantity: (name, newQuantity) => {}
});

export const NewMedContextProvider = (props) => {
  const [medicines, setMedicines] = useState([]);

  const addMedicineHandler = (medicine) => {
    setMedicines([...medicines, medicine]);

  };


  
  const updateQuantityHandler = (name, newQuantity) => {
    setMedicines((prevMedicines) => {
      const updatedMedicines = prevMedicines.map((medicine) => {
        if (medicine.name === name) {
          return { ...medicine, quantity: newQuantity };
        }
        return medicine;
      });
      return updatedMedicines;
    });
  };

  const contextValue = {
    medicines: medicines,
    addMedicine: addMedicineHandler,
    updateQuantity: updateQuantityHandler
  };

  return (
    <NewMedContext.Provider value={contextValue}>
      {props.children}
    </NewMedContext.Provider>
  );
};

export default NewMedContext;
