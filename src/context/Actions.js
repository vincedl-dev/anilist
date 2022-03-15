export const AddIceCream =  () => {
    return{
        
        type:'INCREMENT_ICECREAM'
        
    }
}

export const AddCake =  () => {
    return{
        type:'INCREMENT_CAKE'
        
    }
}

export const buyCake = (number) => {
    return{
        type:'BUY_CAKE',
        payload:number
    }
}

export const buyIceCream = (number) => {
    return{
        type:'BUY_ICECREAM',
        payload:number
    }
}