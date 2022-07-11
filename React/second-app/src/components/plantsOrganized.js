const plantsOrg = [
    {
        name: 'Monstera',
        category: 'Classic',
        id: '1st',
        isBestSale: true,
        light: true,
        water: true
    },
    {
        name: 'Ficus Lyrata',
        category: 'Other',
        id: '2nd',
        isBestSale: false,
        light: false,
        water: true
    },
    {
        name: 'Palm',
        category: 'Other',
        id: '3rd',
        isBestSale: true,
        light: true,
        water: false
    }
]
function GetPlant() {
    return (
        plantsOrg.map((plant) =>
        (<div className="card" key={`${plant.id}`}>
            {plant.isBestSale && <span>🟢 </span>}
            {plant.isBestSale && plant.category === "Classic" && <span>🟡 </span>}
            plant name = {plant.name} <br />
            plant category = {plant.category} <br />
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