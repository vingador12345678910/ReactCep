import {useState} from 'react'
import{FiSearch} from 'react-icons/fi'
import'./style.css';
import api from './service/api';

function App() {
  const[input,setInput]=useState('')
  const[cep,setCep]=useState({})
async function handleSearch(){
  //01310930/json

  if(input===''){
    alert("Digite algum Cep")
    return;
  }
try{
  const response=await api.get(`${input}/json`);

  setCep(response.data)
  setInput("")


  }catch{
    alert("Ops Erro ao Buscar");
    setInput("")

  }
  
}

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite o CEP"  value={input}onChange={(e)=>setInput(e.target.value)}/>

        <button className="buttonSearch" onClick={handleSearch} >
          <FiSearch/>

        </button>


      </div>
      {Object.keys(cep).length>0 && (
         <main className='main'>
         <h2>CEP:{cep.cep}</h2>
 
         <span>Rua:{cep.logradouro} </span>
 
         <span> Complementto: {cep.complemento}</span>
         <span>Cidade:{cep.localidade}</span>
 
         <span>Bairro:{cep.bairro}</span>
         <span> Estado: {cep.uf}</span>
 
       </main>

      )}
    
    </div>
  );
}

export default App;
