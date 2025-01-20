import '../App.css';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

function Sender() {
    let inputRef=useRef();
    let dispatch=useDispatch();
  return (

    <div className="App">
      <h2 className='card-title'>Sender</h2>
      <input ref={inputRef}></input>
      <button onClick={()=>{
        console.log(inputRef.current.value);
        dispatch({type:"addActor",data:inputRef.current.value});
      }}>Actor</button>
      <button onClick={()=>{
        console.log(inputRef.current.value);
        dispatch({type:"addCricketer",data:inputRef.current.value});
      }}>Cricketer</button>
      <button onClick={()=>{
        console.log(inputRef.current.value);
        dispatch({type:"addPolitician",data:inputRef.current.value});
      }}>Politician</button>
    </div>
  )
}

export default Sender