import React from "react";

export const ExportarDatosMes = (props) => {
  const { fechaMes, incidenciaMes } = props;
  console.log(incidenciaMes);

  const mandarDatosExcel = async () => {
    try {

      const urlSheetBestApi='https://sheet.best/api/sheets/f8bc110e-35e2-464e-8898-f8bc5f5f406e';

      //Api sheetbest para exportar los objetos  
      const res = await fetch(urlSheetBestApi,{
        method: 'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(incidenciaMes)
      })
      console.log(res);
      console.log("Mandar datos excel");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* <ul>
        <h1 id="titulo_tabla">Datos del Mes {fechaMes}</h1>
        {incidenciaMes?.map((i) => 
          i.map((item) => (
            <li key={item.inc_id} style={{ listStyle: "none" }}>
              {item.uni_nombre} - {item.tip_nombre}
            </li>
          ))
        )}
      </ul> */}
      <div>
       <button id="boton_exportar" className="btn btn-lg btn-block btn-success ms-2" onClick={mandarDatosExcel}>
        Exportar Datos del Mes
      </button>
      <ul>
        <h1 id="titulo_tabla">Datos del dia {fechaMes}</h1>
        {incidenciaMes?.map((item) => (
          <li key={item.inc_id} style={{'listStyle':'none'}}>
            {item.uni_nombre} - {item.tip_nombre}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};
