import './../styles/shoppingList.css';

const plantList = [
    'Monstera',
    'Ficus Lyrata',
    'Silver Pothos',
    'Yucca',
    'Palm'
]
// to link shoppingList and cart => passed cart/updatedCart as props
function ShoppingList({cart, updatedCart}) {
    // reduce => calculates value by value as a loop over the array
        // reduce ((accumulator, currentValue) => {function to do}, type of variable wanted as a result of the function "number; object; array")

    const categories = 
        plantList.reduce((accumulator, element) =>
        accumulator.includes(element.category) ?
        accumulator : accumulator.concat(element.category), []); 
        // displays categories combined (avoids duplicates)
            
    return (
        <div className="jh-shopping-list">
            <ul>
                {categories.map(
                    (cat) => (<li key={cat}>{cat}</li>)
                )}
            </ul>
            <ul className="jh-plant-list">
            {/* // for the plantList where only names are available */}
            {/* check openclassrooms page for more */}
                {plantList.map((plant, index) => (
                    <li key={`${plant}-${index}`}>
                        {plant}
                        <button onClick={() => updatedCart(cart+1)}>Add</button> 
                    </li>
                ))}
            </ul>
        </div>
        // giving indexes to assign keys to values (as in DB rows)
    )
}

export default ShoppingList;