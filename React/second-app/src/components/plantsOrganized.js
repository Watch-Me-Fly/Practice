import CareScale from './CareScale.js';

const plantsOrg = [
    {
        name: 'Monstera',
        category: 'Classic',
        id: '1st',
        isBestSale: true,
        light: 3,
        water: 1
    },
    {
        name: 'Ficus Lyrata',
        category: 'Other',
        id: '2nd',
        isBestSale: false,
        light: 2,
        water: 3
    },
    {
        name: 'Palm',
        category: 'Other',
        id: '3rd',
        isBestSale: true,
        light: 3,
        water: 2
    }
]
function handleClick(plantName) {
    console.log(`✨This is a click of ${plantName} ✨`)
}
function GetPlant() {
    return (
        plantsOrg.map((plant) =>
        (<div className="card" key={`${plant.id}`} onClick={() => handleClick(plant.name)}>
            {plant.isBestSale && <span>🟢 </span>}
            {plant.isBestSale && plant.category === "Classic" && <span>🟡 </span>}
            plant name = {plant.name} <br />
            plant category = {plant.category} <br />
            <CareScale careType='light' scaleValue={plant.light} />
            <CareScale careType='water' scaleValue={plant.water} />
            <br />
        </div>)
        )
    )
}
/*
Equivalent to line 25 which means :
-------------- && : element will only be generated if condition is met
    {plant.isBestSale ? <span>🟢 </span> : null}

--------------element will only be generated if BOTH conditions are met
    {plant.isBestSale 
        && plant.category === "Classic" 
        && <span>🟡 </span>}

--------------if EITHER condition is met
    {plant.isBestSale 
        || plant.category === "Classic" 
        && <span>🟡 </span>}
*/

export default GetPlant;