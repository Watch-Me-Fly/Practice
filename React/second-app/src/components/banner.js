import './../styles/banner.css';

function Banner ({children})
{
    // --------------- One way to create a banner
        // const title = 'Jungle House';
        // return (<h1>{title}</h1>);
    
    // --------------- Second way to create a banner
    return (
        <div className="jh-banner">{children}</div>
    )
}

/* NOTE
    export default is a syntax in ES6 that means  :
    I don't have to use curly brackets when importing
*/
export default Banner;