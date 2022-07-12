function Recommendation () {
    const currentMonth = new Date().getMonth();
    // getMonth() starts from 0
    const isSpring = currentMonth >= 2 && currentMonth <= 5;

    if (isSpring) {
        return <div className='jh-container'>🌺 it's spring, time to repot !</div>
    } else {
        return <div className='jh-container'>⛔ it's not time yet</div>
    }
}

export default Recommendation;