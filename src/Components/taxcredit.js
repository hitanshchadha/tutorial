const TaxCredit = (props) => {
    return ( <div className=" TaxCredit absolute my-20 py-20 text-white  text-center flex justify-center align-middle  text-xs  ">
      <div className="text-center"> {props.tax}</div>
    </div> );
}
 
export default TaxCredit;