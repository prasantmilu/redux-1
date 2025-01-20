import '../App.css';
import { useSelector } from "react-redux";

function Receiver() {
let storeObj=useSelector((store)=>{
  return store;
});


  return (
    <div className="App">
      <h2 className='card-title'>Receiver</h2>
     <h3 className="card-container">Actors:{storeObj.actors}</h3>
      <h3>Cricketer:{storeObj.cricketer}</h3>
      <h3>Politicians:{storeObj.politicians}</h3>
    </div>
  )
}

export default Receiver