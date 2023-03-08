const CardFooter = () => {
    return(
        <div className="card-footer">
            <button onClick = {changeCardTitle}> cambiar titulo</button>
            <button onClick={changeCardDesc}> Cambiar Texto Descriptivo </button>
        </div>
    )
}