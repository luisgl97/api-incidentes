import React from "react";
import { useForm } from "react-hook-form";

export const Formulario = (props) => {

  const {token, setFecha, setIncidencia} = props;
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
            "x-access-token": token,
          },
          body: JSON.stringify(fecha),
        }
      );
      const incidencias = await datos.json();
      const {data} = incidencias;
      console.log(data);
      setIncidencia(data);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 id="titulo_form">Formulario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          
        <label className="me-2"><b>Fecha de Búsqueda: </b></label>
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
        <button className="btn btn-block btn-warning btn-sm mt-3 ms-3 mb-3" >Obtener Datos</button>
      </form>
    </div>
  );
};
