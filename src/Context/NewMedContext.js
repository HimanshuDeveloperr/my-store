import React, { useState } from 'react';

const NewMedContext = React.createContext({
  medicines: [],
  addMedicine: (medicine) => {}
});

export const NewMedContextProvider = (props) => {
  const [medicines, setMedicines] = useState([]);

  const addMedicineHandler = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const contextValue = {
    medicines: medicines,
    addMedicine: addMedicineHandler
  };

  return (
    <NewMedContext.Provider value={contextValue}>
      {props.children}
    </NewMedContext.Provider>
  );
};

export default NewMedContext;
