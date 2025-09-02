function Movie({title,rating,genre}) {

    return(
        <>
            <p>{title}</p>  
            <p>{rating}</p>
            <p>{genre}</p>
            
            {rating > 8 ? <a href="/">Recomended Movie To Watch</a> : <a href="/">Search for good rating movies</a>}
            <hr></hr>
        </>
    );
}

export default Movie;
