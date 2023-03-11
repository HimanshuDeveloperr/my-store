import { Button } from 'react-bootstrap';
import React, { Fragment } from 'react';
import './AddMedicine.css';
import Cart from './Cart/Cart';

const AddMedicine = () => {
  return (
    <Fragment>
      <div className="form-box">
        <form className="form-container">
          <div className="form-group">
            <label htmlFor="M">Medicine</label>
            <input type="text" id="M" />
          </div>

          <div className="form-group">
            <label htmlFor="D">Description</label>
            <input type="text" id="D" />
          </div>

          <div className="form-group">
            <label htmlFor="P">Price</label>
            <input type="number" id="P" />
          </div>

          <div className="form-group">
            <label htmlFor="Q">Quantity</label>
            <input type="number" id="Q" />
          </div>

          <div>
            <Button className="btn-add-product">Add Product</Button>
          </div>
        </form>
        <Cart></Cart>
      </div>
    </Fragment>
  );
};

export default AddMedicine;
