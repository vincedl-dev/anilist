import React, { useContext, useState,useReducer } from "react";
const ProductContext = React.createContext()


export function useProductContext(){
    return useContext(ProductContext)
}

const initialState = {
    iceCream:20,
    Cake:10
}

const reducer = (state,action) => {
    const {type, payload} = action
    switch(type){
        case 'INCREMENT_CAKE':
          
            return {
                ...state,
                Cake:state.Cake + 1
            }
        case 'INCREMENT_ICECREAM':
            return {
                ...state,
                iceCream:state.iceCream + 1
            }   

        case 'BUY_CAKE':
            return {
                ...state,
            Cake: state.Cake - action.payload
            }

        case 'BUY_ICECREAM':
            return {
                ...state,
             iceCream: state.iceCream - action.payload
            }
                
        default: return state
    }
}


export function ProductProvider({children}){
    const [state,dispatch] = useReducer(reducer,initialState);
    
    
    return(
        <ProductContext.Provider value={{...state,dispatch}}>
            {children}
        </ProductContext.Provider>
    ) 
}