import CareScale from './careScale.js';
import './../styles/plantItem.css';

function handleClick(plantName) // this is a function not a component
{
    alert(`✨You want to buy ${plantName} ? very good choice 🌱✨`);
}

function PlantItem(props)
{
    const {cover, name, water, light, price} = props;

    return (
        <li 
            className="jh-plant-item"
            onClick={() => handleClick(name)}
        >
            <span className="jh-plant-item-price">{price}€</span>
            <img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem;