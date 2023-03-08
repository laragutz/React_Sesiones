const CardBody = () =>{
    return(            
    <div className="card__body">
        <h1>{title}</h1>
        <h2>{creationDate}, Noon.</h2>
        
        <p>
        {texto}
        </p>
        {JSON.stringify(metadata)}

        <div>
            <h5>MEtadta</h5>
            <p>
            author:   {metadata.author}
            </p>

            <p>
                company: {company}
            </p>

        </div>
    </div>
    )
}