/*
    The goal at the end is : 
        <CareScale scaleValue={plant.light} />
        see 'reuseComponents.html' for more details
*/
/*
function CareScale(props) {

    const scaleValue = props.value;
    // the following allows declaring 2 vars directly and
        // avoids multiple declarations :
            // const scaleValue = props.scaleValue;
            // const careType = props.careType;
    const {scaleValue, careType} = props;

    // Array => to go for a list (scale from 1-3)
    const range = [1, 2, 3]; 

    return (
        <div>
            {range.map( (rangeElement) => 
                scaleValue >= rangeElement ? 
                <span key={rangeElement.toString()}>☀️</span> : null
            )}
        </div>
    )
}
*/

function CareScale({scaleValue, careType}) {

    const range =  [1, 2, 3];

    const typeIcons = careType === 'light' ? '☀️' : '💧';

    return (
        <div>
            {range.map(
                (rangeElement) => scaleValue >= rangeElement ?
                <span key={rangeElement.toString()}>{typeIcons}</span> : null
            )}
        </div>
    )
}



export default CareScale;