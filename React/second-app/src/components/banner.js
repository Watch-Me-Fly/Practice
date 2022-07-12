import logo from "./../assets/logo.png";
import './../styles/banner.css';
import Recommendation from "./recommendation";

// 1st comonent of the app
function Banner() {
    const title = 'Jungle House';
    // const currentMonth = new Date().getMonth();
    // // getMonth() starts from 0
    // const isSpring = currentMonth >= 2 && currentMonth <= 5;

    // const recommendation = isSpring ? 
    // (<div className='jh-container'>🌺 it's spring, time to repot !</div>) 
    // : (<div className='jh-container'>⛔ it's not time yet</div>)
    
    return (
        <div>
            <div className='jh-banner'>
                <img src={logo} alt='Jungle House' className='jh-logo' />
                <h1 className='jh-title'>{title}</h1>
                
            </div>
            <br/>
            {/* {recommendation} */}
            <Recommendation />
        </div>
    )
}
// can also be written as such :
    /*
        <Banner>
            <img src={logo} alt='Jungle House' className='jh-logo' />
            <h1 className='jh-title'>{title}</h1>
        </Banner>

        function Banner ({children}) {
            return <div className='jh-banner'>{children}</div>;
        }
    */
// export default is a syntax in ES6 that means 
// I don't have to use curly brackets when importing
export default Banner;