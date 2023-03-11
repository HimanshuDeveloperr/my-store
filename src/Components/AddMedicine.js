import { Button } from 'react-bootstrap';
import React, { useContext, useRef } from 'react';
import Cart from './Cart/Cart';
import NewMedContext, { NewMedContextProvider } from '../Context/NewMedContext';
import "./AddMedicine.css"

const AddMedicine = () => {
  const medicineRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef("");
  const quantityRef = useRef("");

  const context = useContext(NewMedContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = medicineRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;

    const medicine = {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    };

    context.addMedicine(medicine);

    // Clear the form input fields
    medicineRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
    quantityRef.current.value = "";
  };

  return (
    <NewMedContextProvider>

    <div className="form-box">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="M">Medicine</label>
          <input type="text" id="M" ref={medicineRef} required />
        </div>

        <div className="form-group">
          <label htmlFor="D">Description</label>
          <input type="text" id="D" ref={descriptionRef} required />
        </div>

        <div className="form-group">
          <label htmlFor="P">Price</label>
          <input type="number" id="P" ref={priceRef} required />
        </div>

        <div className="form-group">
          <label htmlFor="Q">Quantity</label>
          <input type="number" id="Q" ref={quantityRef} required />
        </div>

        <div>
          <Button variant="success"  type="submit">
            Add Product
          </Button>
        </div>
      </form>
      <Cart />
    </div>
    </NewMedContextProvider>
  );
};

export default AddMedicine;
