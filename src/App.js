import { useState, useEffect } from "react";
import { Formulario } from "./components/Formulario";

function App() {
  const [incidencia, setIncidencia] = useState([]);
  const [arrayObjeto, setArrayObjeto] = useState([]);
  const [fecha, setFecha] = useState({});

  // const addFecha = (fecha) => {
  //   setFecha(fecha);
  // };

  const obtenerDatos = async (fecha) => {

    try {

      setFecha(fecha);

      const datos = await fetch(
        "http://ogit.imp.gob.pe/impapi/sel_seguridad_incidente",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VfaWQiOjM1OSwicGVyX2lkIjozNDEsIm5vbWJyZSI6IkVSTkVTVE8gIENBTkNITyBST0RSw41HVUVaICIsImlhdCI6MTY0NzM5NzAwNywiZXhwIjoxNjQ3NDI1ODA3fQ.pFWoX3JjRRDEarsKCGvKRSzlAPgi-4f46ODTQBg7vmE",
          },
          body: JSON.stringify(fecha),
        }
      );
      const incidencias = await datos.json();
      setIncidencia(incidencias);
      const {data} = incidencias;
      setArrayObjeto(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  const mandarDatosExcel = async () => {
    try {

      const res = await fetch('https://sheet.best/api/sheets/08289069-f48f-4ae7-86e9-a84f3763e456',{
        method: 'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(arrayObjeto)
      })
      console.log("Mandar datos excel");
      console.log(arrayObjeto)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Api</h1>
      <Formulario obtenerDatos={obtenerDatos}/>
      <button className="btn btn-success ms-2" onClick={mandarDatosExcel}>
        Exportar datos
      </button>
      <ul>
        <h1>Datos de la fecha {fecha.fecha}</h1>
        {incidencia.data?.map((item) => (
          <li key={item.inc_id}>
            {item.uni_nombre} - {item.tip_nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
