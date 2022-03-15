import { useSelector } from "react-redux";


const Table = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)


   
    return (
        <table>
            <tbody>
                <tr>
                    <th>Product</th>
                    <th>Stocks</th>
                    
                </tr>
                <tr>
                <td>Cake</td>
                <td>{numOfCakes}</td>
                </tr>
                <tr>
                    <td>Ice Cream</td>
                    <td>{numOfIceCream}</td>
                </tr>
            
            </tbody>
        </table>
    );
}
 
export default Table;