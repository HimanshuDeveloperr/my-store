


import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartContext from '../../Context/CartContext';



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
  
function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const Cartctx=useContext(CartContext)


  const totalNumber=Cartctx.medicine.reduce((acc,cur)=>{
    return acc+1;
  },0)

  
  const totalAmount= `${Cartctx.totalAmount.toFixed(2)}rs`

  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cart <span>{totalNumber}</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <ul style={{ 
    listStyle: 'none', 
    padding: 0, 
    margin: 0,
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
  }}>
    {Cartctx.medicine.map((medicine) => {
      return (
        <li key={Math.random()} style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 0',
          borderBottom: '1px solid #ccc',
        }}>
          <span style={{ 
            flex: 1, 
            marginRight: '10px',
            fontWeight: 'bold',
          }}>{medicine.name}</span>
          <span style={{ 
            flex: 2, 
            marginRight: '10px',
          }}>{medicine.description}</span>
          <span style={{ 
            flex: 1, 
            marginRight: '10px',
            textAlign: 'right',
          }}>${medicine.price}</span>
          <span style={{ 
            flex: 1, 
            marginRight: '10px',
            textAlign: 'center',
          }}>{medicine.quantity}</span>

          <span>
            <Button variant='danger'>Remove</Button>
          </span>
        </li>
      )
    })}
  </ul>
</Modal.Body>

        <Modal.Footer>
        <div style={{textAlign:"center"}} className="m-3"><h3>TOTAL AMOUNT</h3>
          <h4 style={{color:"lightcoral"}}>{totalAmount}</h4>
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;