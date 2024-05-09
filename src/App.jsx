import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formularios";
import RepoList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVivsivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return(
    <div>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

      {nomeUsuario.length > 4 && (
        <>
            {/* tem que ser com a letra maiuscula */}
            <Perfil nomeUsuario={nomeUsuario} /> 
            <RepoList nomeUsuario={nomeUsuario}/>
        </>
      )}


      
      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVivsivel(!formularioEstaVisivel)} type="button">Toggle Form</button> */}
    </div>
  )
}

export default App
