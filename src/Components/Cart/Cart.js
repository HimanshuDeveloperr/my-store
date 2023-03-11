import { Button } from 'react-bootstrap'
import React, { Fragment } from 'react'

const Cart = () => {
  return (
    <Fragment>
        <Button variant='warning'>Cart
        <span style={{padding:'3px'}}>0</span></Button>
    </Fragment>
  )
}

export default Cart