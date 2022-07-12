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
  return (
    <div>
      <Banner />
      <Cart />
      <ShoppingList />
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
