import Product  from "./Product";

function ProductTab() {
    // let arr = [<li>"fast"</li>,<li>"water resistent"</li>];
    let data = ["fast","good","reusable"];
    // let opt1 = {a : "fast",b: "good"};
    return (
        <>
            <Product title="Book" price={10000}/>
            <Product title="Marker" price={20000}/>
            <Product title="laptop" price={30000}/>
        </>
    );
}

export default ProductTab;
