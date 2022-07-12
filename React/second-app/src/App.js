import {useState} from 'react';
import Banner from './components/banner.js';
import Cart from './components/cart.js';
import ShoppingList from './components/shoppingList.js';
import GetPlant from './components/plantsOrganized.js';
import QuestionForm from './components/questionForm.js';

function handleSubmit(e) {
  e.preventDefault();
  console.log(e.target['my_input'].value); 
}
function App() {
  const [cart, updatedCart] = useState([]); 
  // harbor (lifting up child to parent)

  return (
    <div>
      <Banner />
      {/* linking Cart and ShoppingList, passing states as props
      get props from cart.js by destructuring them overthere*/}
      <div>
        <Cart cart={cart} updatedCart={updatedCart} />
        <ShoppingList cart={cart} updateCart={updatedCart} />
      </div>

      <GetPlant />
      <QuestionForm />
      <form onSubmit={handleSubmit}>
        <input type='text' name='my_input' defaultValue='type your text'/>
        <button type='submit'>Enter</button>
      </form>
    </div>
  );
}

export default App;
