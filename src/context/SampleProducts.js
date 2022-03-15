
import { useProductContext } from "./Products";
import {AddIceCream,AddCake,buyCake,buyIceCream} from './Actions'
import { useState } from "react";

const SampleProducts = () => {
    const {Cake,iceCream,dispatch} = useProductContext()
    const [CakeNumber,setCakeNumber] = useState(1)
    const [IceCreamNumber,setIceCreamNumber] = useState(1)
    
    console.log(Cake)
    return ( 
        <>
        <div>
        <p>Buy Cake</p>
             <input type='text' value = {CakeNumber} onChange = {e => setCakeNumber(e.target.value)}/>
            <button onClick={() => dispatch(buyCake(CakeNumber))}>Buy</button>
        </div>
        <div>
        <p>Buy IceCream</p>
             <input type='text' value = {IceCreamNumber} onChange = {e => setIceCreamNumber(e.target.value)}/>
            <button onClick={() => dispatch(buyIceCream(IceCreamNumber))}>Buy</button>
        </div>
        <table>
            <tbody>
                <tr>
                    <th>Product</th>
                    <th>Stocks</th>
                    
                </tr>
                <tr>
                <td>Cake</td>
                <td>{Cake}</td>
                </tr>
                <tr>
                    <td>Ice Cream</td>
                    <td>{iceCream}</td>
                </tr>
            
            </tbody>
        </table>
            {Cake}
            <button onClick = {() => dispatch(AddCake())}>Add Cake</button>
            <button onClick = {() => dispatch(AddIceCream())}>Add IceCream</button>
 
        </>
    );
}
 
export default SampleProducts;