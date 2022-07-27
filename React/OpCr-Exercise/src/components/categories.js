import './../styles/categories.css';

function Categories (props)
{
    // need one prop to show the current category
        // another to act as a function choosing the category
        // last one to be a list of categories to choose from
    const {setActiveCategory, categories, activeCategory} = props;

    return (
        <div className='jh-categories'>
            <select 
                value = {activeCategory}
                onChange = {(e) => setActiveCategory(e.target.value)}
                className = 'jh-categories-select'
            >
                <option value=''>---</option> {/* // default selected */}
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Reset</button>
        </div>
    )
}
export default Categories;