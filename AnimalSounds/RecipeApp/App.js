import React, {useEffect, useState} from 'react'

const App = () => {

    const APP_ID = 'c0a957e2';
    const APP_KEY = '1635d768cdea59eb70f9078d35c9fc04'
    const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('useEffect has been run');
    })
    
    return (
        <div className='App'>
            <form className='search-form'>
                <input className='search-bar' type='text'>
                    <button 
                        onClick = {() => setCounter(counter + 1)}
                        className='search-button'
                        type='submit'>{counter}
                    >
                    </button>
                </input>
            </form>
        </div>
    )
}

export default App
