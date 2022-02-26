
import React, { useEffect ,useState } from 'react';
import './App.css';

function App() {
   
  const [count , setCount] = useState(0);
  const incCount = () => {
    setCount(count => count+1);
  }

  const decCount = () => {
      return setCount(count => count>0 && count-1 );
  }

    const [coun , setCoun] = useState(0);
    const incrCount = () => {
      setCoun(coun => coun+1);
    }
    const decrCount = () => {
        return setCoun(coun=> coun>0 && coun-1);
      }


    const [cou , setCou] = useState(0);
    const increCoun = () => {
      setCou(cou => cou+1);
    }
    const decreCoun = () => {
        return setCou(cou=> cou>0 && cou-1);
      }



      const [co , setCo] = useState(0);
      const incremCount = () =>{
        setCo(co => co+1);
      }
      const decremCount = ()=>{
        setCo(co => co>0 && co-1);
      }


      //delete function

      const [de,setDel] = useState(false);
      const del = () =>{
        setDel(de=> !de );
      }
      const [d,setDele] = useState(false);
      const dele = () =>{
        setDele(d=> !d );
      }
      const [d1,setDele1] = useState(false);
      const dele1 = () =>{
        setDele1(d1=> !d1 );
      }
      const [d2,setDele2] = useState(false);
      const dele2 = () =>{
        setDele2(d2=> !d2 );
      }

      useEffect (() => {
      },[count,coun,co,cou] );
      const change = () => {
        setCount(0);
        setCo(0);
        setCou(0);
        setCoun(0);
      }

      useEffect(() => {
      },[d,d1,d2,de]);
      const reset = () => {
        setDele(d => !d && d );
        setDele1(d1=>!d1 && d1);
        setDele2(d2=>!d2 && d2);
        setDel(de=>!de && de);
      }


  return (
    <div className="app">
      <div className="count">
      <div class="butto">
      <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/shopping-cart_1f6d2.png'/>
      <span>{count+co+coun+cou}</span>
      <h1>items</h1>
      </div>
      <br/>
      <div class="buttons" >
      <h1 id='z'className={de && "a"}>{count}</h1>
       <button id="a" title={"-"} onClick={decCount} className={de && "a"} >-</button>
        <button id = "b" title={"+"} onClick={incCount} className={de && "a"}>+</button>
        <button id = "b" title={"+"} onClick={del} className = {de && "a"}>del</button>
        </div>
        <br/>
        <div class="button">
        <h1 id='y' className = {d && "a"}>{coun}</h1>
        <button id="c"title={"-"} onClick={decrCount} className = {d && "a"}>-</button>
        <button id='d'title={"+"} onClick={incrCount} className = {d && "a"}>+</button>
        <button id = "b" title={"+"} onClick={dele} className = {d && "a"}>del</button>
        </div>
        <br/>
        <div class="buttonss">
        <h1 id='x' className = {d1 && "a"}>{cou}</h1>
        <button id='e'title={"-"} onClick={decreCoun} className = {d1 && "a"}>-</button>
        <button id='f'title={"+"} onClick={increCoun} className = {d1 && "a"}>+</button>
        <button id = "b" title={"+"} onClick={dele1} className = {d1 && "a"}>del</button>
        </div>
        <br/>
        <div class="buttonsss">
        <h1 id='w' className = {d2 && "a"}>{co}</h1>
        <button id='g' title={"-"} onClick={decremCount} className = {d2 && "a"}>-</button>
        <button id='h' title={"+"} onClick={incremCount} className = {d2 && "a"}>+</button>
        <button id = "b" title={"+"} onClick={dele2} className = {d2 && "a"}>del</button>
        </div>
        <br/>
        <div>
        <button id = "p" onClick={change}>Reset</button>
        <button id = "r" onClick={reset}>All-set</button>
      </div>
    </div>
  </div>
  );
}

export default App;