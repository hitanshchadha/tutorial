import { motion } from "framer-motion";

const Buttons = (props) => {
    return ( 
        <div><motion.div
        animate={{ x: 500 }}
        transition={{ ease: "easeOut", duration: 2 }}
      />
    <div className=" buttons fixed bottom-20 flex justify-center flex-row  "> 
      <button className=" but  bottom-20 bg-slate-200  text-sm   w-64 text-black rounded-md"> <div className=" px-16 py-3">{props.Button}</div> </button>  
    <button className=" bottom-20 w-64   bg-neutral-800   bg-opacity-80 text-sm  mx-8 text-white rounded-md" >
{props.Button2}
    </button></div></div>);}

 
export default Buttons;