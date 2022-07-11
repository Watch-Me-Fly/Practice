import logo from "./../assets/logo.png";
import './../styles/banner.css';

// 1st comonent of the app
function Banner() {
    const title = 'Jungle House'
    return (
        <div className='jh-banner'>
            <img src={logo} alt='Jungle House' className='jh-logo' />
            <h1 className='jh-title'>{title}</h1>
        </div>
    )
}
// export default is a syntax in ES6 that means 
// I don't have to use curly brackets when importing
export default Banner;