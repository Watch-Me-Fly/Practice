import {useState} from 'react';

function QuestionForm() {

    const [inputValue, setInputValue] =
        useState('Ask your question here');

    // this will inhibit even typing the letter that is not allowed
    function checkValue(value) {
        if(!value.includes('a'))
        {
            setInputValue(value);
        }
    }

    // returns a QuestionForm instance
    return (
        <div>
            <textarea 
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
                // can do setInputValue (if there was no value checking)
                    // passing the value in onChange => saves the value in local state
                    // this gives input value the access of the content of input
            />
            <button onClick={() => alert(inputValue)
            // value is replaced by input value
            }>Alert me</button>
        </div>
    )
}

export default QuestionForm;