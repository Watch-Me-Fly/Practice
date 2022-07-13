import './../styles/layout.css';

function Recommendation () {
    const currentMonth = new Date().getMonth();
    // getMonth() starts from 0
    const isSpring = currentMonth >= 2 && currentMonth <= 5;

    if (isSpring) {
        return <h3 className='jh-recommend'>🌺 it's spring, time to repot !</h3>
    } else {
        return <h3 className='jh-recommend'>⛔ it's not time to repot yet</h3>
    }
}

export default Recommendation;