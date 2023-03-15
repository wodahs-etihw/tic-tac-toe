import react from "react";
import  ReactDOM  from "react-dom";
import { ImCross } from "react-icons/im";
import { TbCircle } from "react-icons/tb";
import {FaPenFancy} from "react-icons/fa";
import '../App.css';


const Icons = ({name}) => {
    
    console.log(name + "  My name");
    if(name == "circle")
    {
      return (<TbCircle    />)
      
      
    }
    else if(name=="cross")
    {
      return ( <ImCross  /> )
      
     
    }
    else {
      return  (<FaPenFancy  />)
      
      
    }
   
}

export default Icons ;