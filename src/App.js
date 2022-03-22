import { useState } from "react";
import {ExportarDatos} from "./components/ExportarDatos";
import { Formulario } from "./components/Formulario";
import { FormularioMes } from "./components/FormularioMes";
import { Login } from "./components/Login";
import { MostrarDatosMes } from "./components/MostrarDatosMes";

function App() {
  
  const [token, setToken] = useState();

  const [incidencia, setIncidencia] = useState([]);
  const [incidenciaMes, setIncidenciaMes] = useState([]);
  const [fecha, setFecha] = useState({});
  const [fechaMes, setFechaMes] = useState();

  return (
    <div className="container ">
      <div className="text-center">
      <h1>Consulta de Incidencias</h1>
      <hr />
      <Login setToken={setToken}/>
      <Formulario token={token} setFecha={setFecha} setIncidencia={setIncidencia}/>
      <hr />
      <FormularioMes token={token} setFechaMes={setFechaMes} setIncidenciaMes={setIncidenciaMes}/>
      <ExportarDatos fecha={fecha} incidencia={incidencia}/>
      <MostrarDatosMes fechaMes={fechaMes} incidenciaMes={incidenciaMes}/>
      </div>
      
    </div>
  );
}

export default App;
