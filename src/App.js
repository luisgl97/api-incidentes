import { useState, useEffect } from "react";
import {ExportarDatos} from "./components/ExportarDatos";
import { Formulario } from "./components/Formulario";

function App() {
  
  const [incidencia, setIncidencia] = useState([]);
  const [arrayObjeto, setArrayObjeto] = useState([]);
  const [fecha, setFecha] = useState({});

  return (
    <div className="container ">
      <div className="text-center">
      <h1>Api Incidentes</h1>
      <hr />
      <Formulario setFecha={setFecha} setIncidencia={setIncidencia} setArrayObjeto={setArrayObjeto}/>
      <hr />
      <ExportarDatos fecha={fecha} incidencia={incidencia} arrayObjeto={arrayObjeto}/>
      </div>
      
    </div>
  );
}

export default App;
