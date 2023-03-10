// imports

//import { useState } from 'react'

import CardGenerator from './components/CardGenerator'

import './components/clase3.css'

// Crear componentes
const Clase3 = () => {

    {/*}
    const [ButtonEventProps, setButtonEventProps] = useState('')
    const[imageClassName, setImageClassName] = useState('image')
    
    const onClickHandlerButtonExample = (event) => {
        console.log('prueba del evento onclickhandler del button')
        setButtonEventProps(JSON.stringify(event.target))
    }
    const onImageMouseEnter = (event) => {
        setImageClassName('image image-animation')
    }

    const onImageMouseLeave = (event) => {
        setImageClassName('image')
    }
*/}
    // Fragmento de código JSX
    return (
        <>
            <div>Clase3</div>
            <CardGenerator />
{/*            
            <button onClick={onClickHandlerButtonExample}>Example</button>
            <pre>
                {ButtonEventProps}
            </pre>

            <img 
                src='https://picsum.photos/400/200' 
                alt='image eventos'
                className={imageClassName}
                onMouseEnter={onImageMouseEnter}
                onMouseLeave={onImageMouseLeave}
            />

    */}
        </>
    )
}

export default Clase3