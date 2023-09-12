const Price = (props) => {
    return ( <div className=" price absolute my-20 py-14 text-white  text-center flex justify-center align-middle  text-lg  font-bold">
      <div className="text-center"> {props.price}</div>
    </div> );
}
 
export default Price;