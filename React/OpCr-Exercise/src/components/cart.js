import {useState, useEffect} from 'react';
import './../styles/cart.css';

// create cart state (local use) 
    // or add properties to the function (parent passing)
function Cart ({cart, updateCart})
{
    // useState to show/hide the cart (closed by default)
        const [isOpen, setIsOpen] = useState(true);
    // calculate using reduce(), base is 0
        const total = cart.reduce(
            (accumulator, plantType) => 
            accumulator + plantType.amount * plantType.price, 0
        );

    // first parameter to pass to useEffect is a function function 
        // (the effect to be run)
    // second is dependencies
        // accepts a list between square brackets (list of dependencies)
    useEffect(() => {
       // alert(`${total} € to pay`);
       document.title = `${total} € to pay`
    }, [total]); // only display the alert when cart total changed

    return isOpen ? ( // is cart open?
        <div className='jh-cart'>
            <button
                onClick = {() => setIsOpen(false)}
                className='jh-cart-toggle-button'
            >Close</button>
            {cart.length > 0 ? ( // are there any cart items ?
                <div>
                    <h2>Cart</h2>
                    <ul>
                        {cart.map(({name, price, amount}, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price} € x {amount}
                            </div>
                        ))}
                    </ul>
                    {/* 
                        to make a button adding items to cart (+1):
                            <button onClick={() => updatedCart(cart+1)}>
                                Add</button>
                     */}
                    <h3>Total : {total}</h3>
                    <button onClick={() => updateCart([])}>Empty</button>
                </div>
            ) : ( // no cart items ?
                <div>Your cart is empty</div>
            )}
        </div>
    ) : ( // default is set to false, so this is the default
        <div className='jh-cart-closed'>
            <button
                className='jh-cart-toggle-button'
                onClick = {() => setIsOpen(true)}
            >Open cart</button>
        </div>
    )
}

export default Cart;