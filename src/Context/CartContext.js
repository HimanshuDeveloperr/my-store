import React ,{useReducer}from 'react'

const CartContext=React.createContext({
    medicine:[],
    addToCart:(medicine)=>{},
    totalAmount:0
    
})

const defaultState = {
    medicine: [],
    totalAmount: 0
}

const CartReducer=(state,action)=>{
    if (action.type === "ADD"){
      const  updatedAmount= state.totalAmount+action.value.price*action.value.quantity
        

        let update = state.medicine.concat(action.value)

        return {
            medicine:update,
            totalAmount:updatedAmount
        }
    }

    return defaultState
}



export const CartContextProvider=(props)=>{

    const [state, dispatch] = useReducer(CartReducer, defaultState)

 const CartHandler=(medicine)=>{

    dispatch({
        type:"ADD",
        value:medicine
    })

 }

    const cart={
        medicine:state.medicine,
        addToCart:CartHandler,
        totalAmount:state.totalAmount
    }
    return(
        <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
    )
}

export default CartContext