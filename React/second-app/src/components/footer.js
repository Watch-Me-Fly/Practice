import {useState, useEffect} from 'react';
import './../styles/footer.css';

function Footer(cart)
{
    const [inputValue, setInputValue] = useState('Your email');

    // useEffect(() => {
    //     console.log(`whenever element rerenders (so typing additional text is a rerender)`);
    // })

    // useEffect(() => {
    //     console.log(`
    // empty dependency array [], 
    // only displyed when the footer is first rendered
    // does not change`);
    // }, []);

    // useEffect(() => {
    //     console.log(`displayed when the footer is first rendered, 
    //     and also when the cart is updated, cart was passed as an argument to the function`);
    // }, [cart]);

    useEffect(() => {
        return () => 
        console.log(`
        displayed when the footer is removed, 
        must have a useState to show/hide footer, 
        useful when doing a clean up,
        ex : setInterval in useEffect => to avoid memory leaks
        `)
    }, [cart]);

    function handleInput(e) // receiving information from input 
    {
        setInputValue(e.target.value);
        // this gives input value the access of the content of input
    }
    /*
       // this will inhibit even typing the letter that is not allowed
            function checkValue(value) {
                if(!value.includes('a'))
                {
                    setInputValue(value);
                }
            }
        // to use it : for the onChange event :
             {(e) => checkValue(e.target.value)}
    */
    function handleBlur() // checking if input is email
    {
        if (!inputValue.includes('@'))
        {
            alert('Attention, this is not a valid address')
        }
    }
    return (
        <footer className='jh-footer'>
            <div className='jh-footer-elem'>
                For plants enthusiasts 🌱
            </div>
            <div className='jh-footer-elem'>✉️ Subscribe to our newsletter</div>
                <input 
                    placeholder='Enter your email'
                    onChange={handleInput}
                    value={inputValue}
                    onBlur={handleBlur}
                />
                <button onClick={() => alert(inputValue)
                // value is replaced by input value
                }>
                    Subscribe</button>
        </footer>
    )
}

export default Footer;