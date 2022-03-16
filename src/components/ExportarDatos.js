import React from 'react'

export const ExportarDatos = (props) => {
    const {fecha, incidencia, arrayObjeto} = props;
    
    
  const mandarDatosExcel = async () => {
    try {

      //Api sheetbest para exportar los objetos en 
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
    <div>
       <button className="btn btn-success ms-2" onClick={mandarDatosExcel}>
        Exportar datos
      </button>
      <ul>
        <h1>Datos de la fecha {fecha.fecha}</h1>
        {incidencia.data?.map((item) => (
          <li key={item.inc_id} style={{'listStyle':'none'}}>
            {item.uni_nombre} - {item.tip_nombre}
          </li>
        ))}
      </ul>
    </div>
  )
}


