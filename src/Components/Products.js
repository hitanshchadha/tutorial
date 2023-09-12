const Products = (props) => {
    return ( <div>
         <img className="product-img" src={props.src} alt="hello" />
            <div className="product-name my-16 mx-20 text-md ">{props.name}</div>
            
    </div> );
}
 
export default Products;