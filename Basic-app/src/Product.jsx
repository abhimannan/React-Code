import './Product.css';

function Product({title,price,features}) {
    // let list = features.map((el)=> <li>{el}</li>);
    let styles = {backgroundColor : price > 15000 ? "yellow" : ""}
    return (
        <div className="product" style={styles}>
            <h3>{title}</h3>
            <p>{price}</p>
            {price > 15000 ? <p>Discount : 10%</p> : <a href="/">Get Discount</a>}
        </div>
    );
}

export default Product;
