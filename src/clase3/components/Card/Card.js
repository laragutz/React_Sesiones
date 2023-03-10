// importaciones
import React, {useState} from 'react'
import './card.css';
import CardImage from './CardImage';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const dummyText = ` --Most strange; no news yet of the ship we wait for. Mrs. Harker
reported last night and this morning as usual: "lapping waves and
rushing water," though she added that "the waves were very faint."
The telegrams from London have been the same: "no further report."
Van Helsing is terribly anxious, and told me just now that he fears
the Count is escaping us. He added significantly:--`;


const Card = ({BGImage, creationDate, cardTitle, metadata}) => {
       
    // logica de la app
        // declaracion y uso de hooks de State
        const [title, setTitle] = useState(cardTitle);
        const [texto, setTexto] = useState(dummyText);


        // leer valores de las props que vienen de un objeto
        
        //const {company} = metadata;
        
        // const company = metadata.company;

        // ---------------------------------------
        // Equivalente en funciones normales
        // const message = ""Robin Hood's book";
        // function setTitle(newMessage) {
            // message = newMessage
        // }
        // ---------------------------------------

        // crear funciones auxiliares
        // Funcion para cambiar el titulo de la Card en el evento click
        const changeCardTitle = ()=> {
            const messages_data = ['titulo 1', 'titulo2', "Robin Hood's", '5', '6'];
            // Generar un titulo random a partir del array de opciones
            const randomTitle =  Math.floor(Math.random() * (messages_data.length - 1));
        
            const newTitle = messages_data[randomTitle];
            
            setTitle(newTitle);
        }

        // Funcion para cambiar la descripcion de la Card en el evento Click
        const changeCardDesc = () => {
            setTexto('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos modi nobis animi, placeat pariatur dolorem vero sequi autem suscipit labore, tempore ipsum cumque deserunt, maiores aliquid! Et consectetur quia atque?')
        }

    // render de la app
    return (
        <div className="card">
            <CardImage 
                BGImage={BGImage}
            />
            <CardBody 
                title={title} 
                creationDate={creationDate} 
                texto={texto} 
                metadata={metadata}
            />

                <button onClick = {changeCardTitle}> cambiar titulo</button>
                <button onClick={changeCardDesc}> Cambiar Texto Descriptivo </button>


        </div>
    )
}

export default Card;
