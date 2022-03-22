import React from "react";

export const MostrarDatosMes = (props) => {
  const { fechaMes, incidenciaMes } = props;
  return (
    <div>
      <ul>
        <h1 id="titulo_tabla">Datos del Mes {fechaMes}</h1>
        {incidenciaMes?.map((i) =>
          i.map((item) => (
            <li key={item.inc_id} style={{ listStyle: "none" }}>
              {item.uni_nombre} - {item.tip_nombre}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
