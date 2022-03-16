import React from "react";
import { useForm } from "react-hook-form";

export const Formulario = (props) => {

  const {setFecha, setIncidencia, setArrayObjeto} = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (fecha, e) => {
    console.log(fecha);
    obtenerDatos(fecha);
  };

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
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VfaWQiOjM1OSwicGVyX2lkIjozNDEsIm5vbWJyZSI6IkVSTkVTVE8gIENBTkNITyBST0RSw41HVUVaICIsImlhdCI6MTY0NzQ1MjAyMiwiZXhwIjoxNjQ3NDgwODIyfQ.MKnORkTb7dxShqaKiLOXJ_pRx3ndn025vcKTBjWNYT4",
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

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          
        <label className="me-2">Fecha</label>
        <input
          type="date"
          name="fecha"
          {...register("fecha", {
            required: {
              value: true,
              message: "Seleccionar la Fecha",
            },
          })}
        />
        {errors.fecha && (
          <span className="text-danger text-small d-block">
            {errors.fecha.message}
          </span>
        )}
        <button className="btn btn-warning btn-sm mt-2 ms-2 mb-2" >Obtener Datos</button>
      </form>
    </div>
  );
};
