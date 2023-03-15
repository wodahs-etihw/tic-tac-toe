import logo from './logo.svg';
// import './App.css';
import Icons from "./components/Icons.js";
import { useState } from 'react';

var myPen = new Array(9);
myPen.fill("empty");

function App() {
  
  const [isCross , setIsCross ] = useState(false);
  const [winMessage,setWinMessage] = useState("");

  const reloadGame = () => {
    
     setIsCross(false);
     setWinMessage("");
     myPen.fill("empty",0,9);
     myPen.map((item,index)=>{  changeItem(item) })
   
  };

  const checkIsWinner = () => {

    if(myPen[0]==myPen[1] && myPen[0] == myPen[2]  && myPen[0]!="empty") {
    alert(myPen[0] + "won");
    }
    else if(myPen[3]==myPen[4] && myPen[3] == myPen[5]  && myPen[3]!="empty") {
      alert(myPen[3] + "won")
    }
    else if(myPen[6]==myPen[7] && myPen[6] == myPen[8]  && myPen[6]!="empty") {
      alert(myPen[6] + "won")
    }
    else if(myPen[0]==myPen[3] && myPen[0] == myPen[6]  && myPen[0]!="empty") {
      alert(myPen[0] + "won")
    }
    else if(myPen[1]==myPen[4] && myPen[1] == myPen[7] && myPen[1]!=="empty"){
      alert(myPen[1] + "won")
    }
    else if(myPen[2]==myPen[5] && myPen[2] == myPen[8] && myPen[2]!=="empty") {
      alert(myPen[2] + "won")
    }
    else if(myPen[0]==myPen[4] && myPen[0] == myPen[8] && myPen[0]!=="empty") {
      alert(myPen[0] + "won")
    }
    else if(myPen[2]==myPen[4] && myPen[2] == myPen[6] && myPen[2]!=="empty") {
      alert(myPen[2] + "won")
    }
    else {
      console.log("Nobody won")
    }

  }

  const changeItem = (index) => {
    console.log(index);
    checkIsWinner();
    if(myPen[index]==="empty")
    {
      console.log(myPen);
      myPen[index] = isCross ? "cross":"circle";
      console.log(myPen);
      setIsCross(!isCross);
    }
    else {
         console.log(false)
         
    }
  }

  
  
  return (
    <div>

     <div>
      <h1>Welcome to Tic Tac Toe Game</h1>
     <button onClick={()=>reloadGame()}  className='reset'  > Reset the game </button>
     <button  className='turn'  >Your Turn</button>
     </div>

   
    <div  className='mycontainer' >
     
      {
        myPen.map((item , index )=>(
          <div className='box'   onClick={ ()=>changeItem(index)} >
          <div  >
          <Icons  myindex={index}   name={item} />
          </div>
          </div>
        ))
      }
        

     
      
    
     
    </div>
    </div>
  );
}

export default App;
