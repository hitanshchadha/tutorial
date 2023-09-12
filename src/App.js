import Carousel from './Components/carousel';
import './App.css';
import Model from './Components/model';
import Price from './Components/price';
import TaxCredit from './Components/taxcredit';
import Buttons from './Components/Buttons';
import Ltext from './Components/Ltext';
import { useState } from 'react';
import DropdownMenu from './Components/DropdownMenu';
import Topbar from './Components/Topbar';
import Topbar2 from './Components/Topbar2';
import DropdownMenu2 from './Components/DropdownMenu2';
import DropdownMenu3 from './Components/DropdownMenu3'; 
import DropdownMenu4 from './Components/DropdownMenu4'; 
import TaxCredit2 from './Components/taxcredit2';
import Model2 from './Components/model2';
import Price2 from './Components/price2';
import ReactFullpage from "@fullpage/react-fullpage";

function App() {
  
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisible2, setDropdownVisible2] = useState(false);
  const [isDropdownVisible3, setDropdownVisible3] = useState(false);
  const [isDropdownVisible4, setDropdownVisible4] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
    setDropdownVisible2(false);  
    setDropdownVisible3(false); 
    setDropdownVisible4(false); 
  };
  const handleMouseEnter2 = () => {
    setDropdownVisible2(true);
    setDropdownVisible(false);
    setDropdownVisible3(false); 
    setDropdownVisible4(false); 

  };
  const handleMouseEnter3 = () => {
    setDropdownVisible3(true);
    setDropdownVisible4(false); 
    setDropdownVisible(false);
    setDropdownVisible2(false);

  };
  const handleMouseEnter4 = () => {
    setDropdownVisible4(true);
    setDropdownVisible(false);
    setDropdownVisible2(false);
    setDropdownVisible3(false);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
    
  };
  const handleMouseLeave2 = () => {
    setDropdownVisible2(false);
  };
  const handleMouseLeave3 = () => {
    setDropdownVisible3(false);
  };
  const handleMouseLeave4 = () => {
    setDropdownVisible4(false);
  };

  


  var Info1= {
    src: "https://digitalassets.tesla.com/tesla-contents/video/upload/Model-3-Main-Hero-Video-Desktop-NA.mp4", Model: "Model 3",Price: "From $29,740*",TaxCredit: "After Federal Tax Credit & Est. Gas Savings", Button: "Order Now" ,Button2: "Demo Drive"
    
}
var Info2={
   src: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop", Model: "Model Y",Price: "From $36,640*",TaxCredit: "After Federal Tax Credit & Est. Gas Savings", Button: "Order Now" ,Button2: "Demo Drive"}

   var Info3={
    src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg", Model: "Model S",Price: "From $71,090*",TaxCredit: "After Federal Tax Credit & Est. Gas Savings", Button: "Order Now" ,Button2: "Demo Drive"}

    var Info4={
      src: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD", Model: "Model X",Price: "From $71,090*",TaxCredit: "After Federal Tax Credit & Est. Gas Savings", Button: "Order Now" ,Button2: "Demo Drive"}

      var Info5={
        src: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global", Model: "Solar Roof",Price: "Produce Clean Energy From Your Roof",TaxCredit: "After Federal Tax Credit & Est. Gas Savings", Button: "Order Now" ,Button2: "Learn More"}

        var Info6={
          src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop.jpg", Model: "Powerwall",Price: "Produce Clean Energy From Your Roof",TaxCredit: "After Federal Tax Credit & Est. Gas Savings", Button: "Order Now" ,Button2: "Learn More"}

          var Info7={
            src: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg", Model: "Accessories",Price: "Produce Clean Energy From Your Roof",TaxCredit: "After Federal Tax Credit & Est. Gas Savings", Button: "Order Now" ,Button2: "Learn More"}
  return (
    <div className="App">
      {!isDropdownVisible && <Topbar />}
      {isDropdownVisible && <Topbar2 />}


      
     <svg  className='logo z-30 absolute mx-12 my-1' viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
     <div className='flex  align-middle justify-center text-white hover:text-black '>
     <ul 
           className='navbar absolute flex justify-center mx-10  '>
      <li  onMouseEnter={handleMouseEnter}  className='my-5  px-4 py-1 text-sm z-30 hover:bg-slate-100 ' ><button href="">Vehicles</button></li>
      <li onMouseEnter={handleMouseEnter2}  className='my-5  px-4 py-1 text-sm  z-30 hover:bg-slate-100 '><a href="">Energy</a></li>
      <li onMouseEnter={handleMouseEnter3}  className='my-5  px-4 py-1 text-sm  z-30  hover:bg-slate-100'><a href="">Charging</a></li>
      
      <li onMouseEnter={handleMouseEnter4}  className='my-5  px-4 py-1 text-sm  z-30 hover:bg-slate-100'><a href="">Shop</a></li>
     </ul></div>

     
      <div onMouseLeave={handleMouseLeave} >
     {isDropdownVisible && <DropdownMenu />}</div>

     <div onMouseLeave={handleMouseLeave2}>
     {isDropdownVisible2 && <DropdownMenu2 />}</div>

     <div onMouseLeave={handleMouseLeave3}>
     {isDropdownVisible3 && <DropdownMenu3 />}</div>

     <div onMouseLeave={handleMouseLeave4}>
     {isDropdownVisible4 && <DropdownMenu4 />}</div>
     
     
     <div className='contain'><Model model={Info1.Model} />
     <div><Price price={Info1.Price} />
     <TaxCredit tax={Info1.TaxCredit} />
      <Buttons Button={Info1.Button} Button2={Info1.Button2} />
     <Ltext></Ltext></div>
     
     <div className='Video'> <video height={2000} width={1800} autoPlay muted loop className='video1 aspect-video '>
      <source src={Info1.src} type="video/mp4" />
    </video>
   <Model2 model={Info2.Model} />
    <Price2 price={Info2.Price} />
    <TaxCredit2 tax={Info1.TaxCredit} />
    <Carousel src={Info2.src} /></div> 

   <Model2 model={Info3.Model} />
    <Price2 price={Info3.Price} />
    <TaxCredit2 tax={Info1.TaxCredit} />
    <Carousel src={Info3.src} />

    <Model2 model={Info4.Model} />
    <Price2 price={Info4.Price} />
    <TaxCredit2 tax={Info1.TaxCredit} />
    <Carousel src={Info4.src} />

    <Model2 model={Info5.Model} />
    <Price2 price={Info5.Price} />
    <Buttons Button={Info5.Button} Button2={Info5.Button2} />
    <Carousel src={Info5.src} />

    <Model2 model={Info6.Model} />
    <Carousel src={Info6.src} />

    <Model2 model={Info7.Model} />
    <Carousel src={Info7.src} />






    
    
    </div></div>

    
    
   
  );
}

export default App;
