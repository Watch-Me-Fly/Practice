/*
    The goal at the end is : 
        <CareScale scaleValue={plant.light} />
        see 'reuseComponents.html' for more details
*/

// ------------- one way of doing this
const quantityLabel = {
    1: 'little',
    2: 'moderate',
    3: 'much'
}

function CareScale (props)
{
    // to avoid flooding the () in function : create a variable
        const {scaleValue, careType} = props;
    // create a range for the care
        const range = [1, 2, 3];
    // define what to show for each type
        const scaleType =
            careType === 'light' ? (
                <span>🔆</span>
            ) : (
                <span>💧</span>
            )
    
    return (
        <div onClick={() =>
            alert(`This plant requires 
                ${quantityLabel[scaleValue]}
                ${careType === 'light' ? 'light' : 'watering'}
                `)
        }>
            {range.map((rangeElement) =>
                scaleValue >= rangeElement ? (
                    <span key={rangeElement.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}
export default CareScale;