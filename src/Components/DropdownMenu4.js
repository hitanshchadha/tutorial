import Menuright from "./Menuright";
import Products from "./Products";
import Topbar2 from "./Topbar2";

const DropdownMenu4 = () => {
  const product={
    src:"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png",
    name:"Apparel",
    order:"Order"
  }
  const product2={
    src:"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Lifestyle.png",
    name:"Lifestyle",
    order:"Order"
  }
  const product3={
    src:"https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Vehicle-Accessories.png",
    name:"Vehicle Accessories",
    order:"Order"
  }
  
    return (<div className="flex   ">
      
      <svg  className='logo2 z-30 absolute mx-12 my-1' viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
      
      
      <div className="drop absolute z-20 bg-white flex items-end justify-end text-sm  ">
      <div className="product z-30 "><Products src={product2.src} name={product2.name} ></Products></div>
      <div className="product z-30"><Products src={product.src} name={product.name} ></Products></div>
      <div className="product z-30"><Products src={product3.src}  name={product3.name}></Products></div>
        <div className="dropdown-menu">
       <div > <Menuright name="Apparel  ." /></div>
       <div> <Menuright name="Lifestyle   " /></div>
       <div> <Menuright name="DogeCoin  " /></div>
       <div> <Menuright name="Compare   " /></div>
       <div> <Menuright name="Fleet  " /></div>
       
        </div>
      </div>
      
      </div>
    );
  };
  export default DropdownMenu4;