import {useState} from 'react';
import {plantList} from '../data/plantList.js';
import PlantItem from './plantItem.js';
import Categories from './categories.js';
import './../styles/shoppingList.css';

// to link shoppingList and cart => passed cart/updatedCart as props
function ShoppingList({cart, updateCart}) 
{
    const [activeCategory, setActiveCategory] = useState('');

    /**==============================================
     * NOTE 
     *  reduce() :
            calculates value by value as a loop over the array
     *  reduce( (accumulator, currentValue) => 
            {function to do}, type of variable wanted as a result :
                "number; object; array")
    *   displays categories combined (avoids duplicates)
     *=============================================**/
    const categories = plantList.reduce(
        (accumulator, plant) => accumulator.includes(plant.category) ?
        accumulator : accumulator.concat(plant.category), []
    );

    function addToCart(name, price) 
    {
        /* - Add a plant to the cart. */
        const currentPlantSaved = 
            cart.find( (plant) => plant.name === name );
        
        if (currentPlantSaved)
        {
            /* 
                - check if the plant is already in the cart :
                    -- if yes : update the cart by adding one more unit 
            */
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            );
            updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantSaved.amount+1}
            ]);
        } else {
            /* -- if not : add the plant with quantity = 1 */
            updateCart([...cart, {name, price, amount: 1}]);
        }
    }
    return (
        <div className="jh-shopping-list">
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <ul className='jh-plant-list'>
                {plantList.map( 
                    // to show vs hide the plant according to category
                    ({id, cover, name, water, light, price, category}) =>
                    !activeCategory || activeCategory === category ? (
                        <><div key={id}>
                                <PlantItem
                                    cover={cover}
                                    name={name}
                                    water={water}
                                    light={light}
                                    price={price} />
                            </div>
                            <button onClick={() => addToCart(name, price)}>Add</button></>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList;