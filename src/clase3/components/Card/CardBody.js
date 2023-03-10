const CardBody = ({title, texto, creationDate, metadata}) =>{
    return(            
        <div className="card__body">
            <h1>{title}</h1>
            <h2>{creationDate}, Noon.</h2>
        
            <p>
                {texto}
            </p>
            {JSON.stringify(metadata)}
        </div>
    )
}

export default CardBody