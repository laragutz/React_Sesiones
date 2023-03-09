const CardFooter = ({metadata,company}) => {
    return(
        <div className="card_footer">
            <h5>Metada</h5>
            <p>
                autor: {metadata.autor}
            </p>
            <p>
                company: {company}
            </p>
        </div> 
    )
}

export default CardFooter