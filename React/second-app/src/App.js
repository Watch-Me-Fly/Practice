import { useState } from 'react';
import logo from './assets/logo.png';
import Banner from './components/banner.js';
import Recommendation from './components/recommendation.js';
import Cart from './components/cart.js';
import ShoppingList from './components/shoppingList.js';
import Footer from './components/footer.js';
import './styles/layout.css';

function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target['my_input'].value); 
  }
function App()
{
    const title = 'Jungle House';
    const [cart, updateCart] = useState([]);
    // [] = harboring : lifting child up to parent

    return (
        <><div>
            <Banner>
                <img src={logo} alt="Jungle House" className='jh-logo' />
                <h1 className='jh-title'>{title}</h1>
            </Banner>            
            <Recommendation />
            <form onSubmit={handleSubmit}>
                <input type='text' name='my_input' 
                        defaultValue='type text / check console'/>
                <button type='submit'>Enter</button>
            </form>
            <div className='jh-layout-inner'>
                {/* link to Cart and ShoppingList, 
                    passing states as props
                    get props from cart.js by destructuring them overthere */}
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
        </div><Footer /></>
    )
}
export default App;