import {useState} from 'react';
import './../styles/cart.css';

function Cart({cart, updatedCart}) {
    // allow user to only add 1 type of plant
    const monsteraPrice = 8;
    // create a cart state
        // need to declare a function at the same time to update the state
        // initial value = 0
    //const [cart, updatedCart] = useState(0);
        // NOTE : line is commented out because values are passed as properties inside () of the function
    // another state to show/hide cart
        // to interact with it : 
            // create a button to show the cart / another to close it
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? 
    (// in case true
        // make a button that adds an item to the cart (+1)
        <div className='jh-cart'>
            <button onClick={() => setIsOpen(false)}>Close</button>
            <h2>Cart</h2>
            <div>
                Monstera: {monsteraPrice} €
                <br/>
                {/* <button onClick={() => updatedCart(cart+1)}>Add</button> */}
                {/* <button onClick={() => updatedCart(cart-1)}>Remove</button> */}
                <button onClick={() => updatedCart(0)}>Clear cart</button>
            </div>
            <h3>Total due: {monsteraPrice * cart} €</h3>
        </div >
    ) 
    : ( // in case false
        <button onClick={()=> setIsOpen(true)}>Open Cart</button>
    )
}
export default Cart;