function Product({name , price}) {
    let styles = { backgroundColor : price > 1000 ?  "brown" : null};
    return(
        <div style={styles}>
            <p>{name}</p>
            <p>{price}</p>
            <h3>{price > 1000 ? <p>Discount : 10%</p> : <a href="/">Get the discount</a>}</h3>
        </div>
    );
}

export default Product;