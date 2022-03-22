import React from 'react'

export const ExportarDatos = (props) => {
    const {fecha, incidencia} = props;
    
    
  const mandarDatosExcel = async () => {
    try {

      const urlSheetBestApi='https://sheet.best/api/sheets/08289069-f48f-4ae7-86e9-a84f3763e456';

      //Api sheetbest para exportar los objetos en 
      const res = await fetch(urlSheetBestApi,{
        method: 'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(incidencia)
      })
      console.log(res);
      console.log("Mandar datos excel");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
       <button id="boton_exportar" className="btn btn-lg btn-block btn-success ms-2" onClick={mandarDatosExcel}>
        Exportar Datos
      </button>
      <ul>
        <h1 id="titulo_tabla">Datos del dia {fecha.fecha}</h1>
        {incidencia?.map((item) => (
          <li key={item.inc_id} style={{'listStyle':'none'}}>
            {item.uni_nombre} - {item.tip_nombre}
          </li>
        ))}
      </ul>
    </div>
  )
}


