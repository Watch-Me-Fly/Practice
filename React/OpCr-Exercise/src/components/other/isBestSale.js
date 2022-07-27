import CareScale from './CareScale.js.js';

// need to have (isBestSale for plantItem)
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