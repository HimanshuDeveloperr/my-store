import React, {  useContext } from 'react';
import { Button } from 'react-bootstrap';
import NewMedContext from '../../Context/NewMedContext';
import './MedicineList.css';


// const medicines = [
//     {
//       id: 1,
//       name: 'Paracetamol',
//       description: 'Fever and pain relief',
//       price: 2.99,
//       quantity: 10,
//     },
//     {
//       id: 2,
//       name: 'Ibuprofen',
//       description: 'Anti-inflammatory and pain relief',
//       price: 4.99,
//       quantity: 8,
//     },
//     {
//       id: 3,
//       name: 'Amoxicillin',
//       description: 'Antibiotic for bacterial infections',
//       price: 9.99,
//       quantity: 5,
//     },
//   ];
  


const MedicineList = () => {

  const context = useContext(NewMedContext)
  

  return (
    
      <div className="medicine-list">

        {context.medicines.map((medicine)=>{
            return(
        <li key={Math.random()} className="medicine-item">
          <span className="medicine-name">{medicine.name}</span>
          <span className="medicine-description">{medicine.description}</span>
          <span className="medicine-price">{medicine.price}</span>
          <span className="medicine-quantity">{medicine.quantity}</span>
          <span className="medicine-add-to-cart"><Button variant='warning'>Add to Cart</Button></span>
        </li>

            )
        })}
      </div>
   
  );
};

export default MedicineList;
