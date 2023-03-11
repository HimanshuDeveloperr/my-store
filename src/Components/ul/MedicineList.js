import React, {  useContext } from 'react';
import { Button } from 'react-bootstrap';
import CartContext from '../../Context/CartContext';
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
  const Cartctx=useContext(CartContext)

  const AddToCartHandler=(medicine)=>{
    console.log(medicine)
    Cartctx.addToCart({
      name:medicine.name,
      description:medicine.description,
      price:medicine.price
      ,quantity:medicine.quantity
    })

  }
  

  return (
    
      <div className="medicine-list">

        {context.medicines.map((medicine)=>{
            return(
        <li key={Math.random()} className="medicine-item">
          <span className="medicine-name">{medicine.name}</span>
          <span className="medicine-description">{medicine.description}</span>
          <span className="medicine-price">{medicine.price}</span>
          <span className="medicine-quantity">{medicine.quantity}</span>
          <span className="medicine-add-to-cart"><Button variant='warning' onClick={()=>AddToCartHandler(medicine)}>Add to Cart</Button></span>
        </li>

            )
        })}
      </div>
   
  );
};

export default MedicineList;
