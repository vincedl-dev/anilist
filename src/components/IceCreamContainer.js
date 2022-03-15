import {buyIceCream} from '../redux'
import { useState } from 'react';
import { useDispatch } from "react-redux";

const IceCreamContainer = () => {
    const [number,setNumber] = useState(1)
    const dispatch = useDispatch()

    return (
        
        <>
            <p>Buy Ice Cream</p>
            <input type='text' value = {number} onChange = {e => setNumber(e.target.value)}/>
            <button onClick={() => dispatch(buyIceCream(number))}>Buy</button>

            
        </>
    );
}



export default IceCreamContainer;